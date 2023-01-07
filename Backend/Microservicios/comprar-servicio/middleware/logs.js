const connection = require("../database/db");

const viewLog = (req, res, next) => {
  const oldWrite = res.write,
    oldEnd = res.end,
    chunks = [],
    now = new Date();

  res.write = function (chunk) {
    chunks.push(chunk);
    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk, error) {
    if (chunk) chunks.push(chunk);

    const bodyRes = Buffer.concat(chunks).toString("utf8");

    connection.query("CALL HospitalGatifu.insertarLog(?,?,?,?,?)", [
      `[${req.method}] - ${req.url}`,
      `${JSON.stringify(req.body) || "{}"}`,
      bodyRes,
      res.statusCode === 400 ? 1 : 0,
      now,
    ]);

    oldEnd.apply(res, arguments);
  };

  next();
};

module.exports = viewLog;
