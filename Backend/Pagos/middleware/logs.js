const connection = require("../database/db");
function is_json(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
const viewLog = (req, res, next) => {
  var oldWrite = res.write,
    oldEnd = res.end,
    chunks = [],
    now = new Date();

  res.write = function (chunk) {
    chunks.push(new Buffer(chunk));
    return oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) chunks.push(new Buffer(chunk));


    let body = "{ }"

    try {
     body= JSON.stringify(req.body)
    } catch (e) {
      body="{}";
    }
    var bodyRes = Buffer.concat(chunks).toString("utf8");
    

    try {
      bodyRes= JSON.stringify(req.body)
     } catch (e) {
      bodyRes=JSON.stringify({bodyrespuesta:bodyRes});
     }

    
    connection.query("CALL HospitalGatifu.insertarLog(?,?,?,?,?)", [
      `[${req.method}] - ${req.url}`,
      `${body}`,
      bodyRes,
      res.statusCode === 400 ? 1 : 0,
      now,
    ]);

    oldEnd.apply(res, arguments);
  };

  next();
};

module.exports = viewLog;