const bcrypt = require('bcryptjs');

const encrypt = (pass) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pass, salt);
}

const comparation = (str1, str2) => {
    const result = bcrypt.compareSync(str1, str2);
    return result
}

module.exports = {
    encrypt, comparation
}