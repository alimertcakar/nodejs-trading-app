const { publishListing } = require("../models/Listing");


async function publishNewListing(title, description, price, stock, publisherId) {
    const res = await publishListing(title, description, price, stock, publisherId);
    return res;
}

module.exports = { publishNewListing };