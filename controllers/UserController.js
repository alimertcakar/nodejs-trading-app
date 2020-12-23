const { isExistingUsername, validateUser, createUser, deleteUserByUsername, updateUsernameByIdOrUsername,
    getUserListings } = require("../models/User");

async function createUserAccount(username, password) {
    const user = await isExistingUsername(username);
    if (!user) {
        createUser(username, password)
        return "Kullanıcı kaydı başarılı."
    }
    else {
        return "Kullanıcı adı kullanımda.";
    }
}

module.exports = { createUserAccount };