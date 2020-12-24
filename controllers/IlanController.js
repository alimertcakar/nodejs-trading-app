const { publishListing, updateListingPrice: ListingModelUpdateListingPrice, updateListingStock: ListingModelUpdateListingStock } = require("../models/Listing");


async function publishNewListing(title, description, price, stock, publisherId) {
    const res = await publishListing(title, description, price, stock, publisherId);
    return res;
}
async function updateListingPrice(price, listingId) {
    const res = await ListingModelUpdateListingPrice(price, listingId);
    return res;
}
async function updateListingStock(stock, listingId) {
    const res = await ListingModelUpdateListingStock(stock, listingId);
    return res;
}


module.exports = { publishNewListing, updateListingPrice, updateListingStock };