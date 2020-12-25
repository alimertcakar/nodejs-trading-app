import {
    updateBalanceById as UserModelUpdateBalanceById, isExistingUsername, validateUser, createUser, deleteUserByUsername, updateUsernameByIdOrUsername,
    getUserListings
} from "../models/User.mjs";

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
async function updateBalanceById(id, balance) {
    const res = await UserModelUpdateBalanceById(id, balance);
    return res;
}

export { createUserAccount, updateBalanceById };