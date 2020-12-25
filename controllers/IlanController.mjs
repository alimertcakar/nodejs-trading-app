import { publishListing, updateListingPrice as ListingModelUpdateListingPrice, updateListingStock as ListingModelUpdateListingStock } from "../models/Listing.mjs";


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


export { publishNewListing, updateListingPrice, updateListingStock };