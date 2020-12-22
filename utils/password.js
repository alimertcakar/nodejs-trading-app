const argon2 = require('argon2');



const hashPassword = async (password) => {
    let hash = "";
    try {
        hash = await argon2.hash(password, { type: argon2.argon2id });
    }
    catch (err) {
        console.log(err);
        hash = err;
    }
    return hash;
}
const verifyPassword = async (password, attemptedPassword) => {
    try {
        if (await argon2.verify(password, attemptedPassword)) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;