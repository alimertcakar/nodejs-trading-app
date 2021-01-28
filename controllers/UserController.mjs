import {
    updateBalanceById as UserModelUpdateBalanceById, isExistingUsername, validateUser, createUser, deleteUserByUsername, updateUsernameByIdOrUsername,
    getUserListings as UserModelGetUserListings, getUserById as UserModelGetUserById
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
async function getUserbyId(id) {
    const res = await UserModelGetUserById(id);
    return (res[0].username)
}
async function getUserListings(id) {
    const res = await UserModelGetUserListings(id);
    return (res)
}

export { createUserAccount, updateBalanceById, getUserbyId, getUserListings };