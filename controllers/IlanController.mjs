import {
    getAllListings as ListingModelGetAllListings, publishListing, updateListingPrice as ListingModelUpdateListingPrice,
    updateListingStock as ListingModelUpdateListingStock,
    getSingleListing as ListingModelGetSingleListing,
    getCategoryAllListings as ListingModelGetCategoryAllListings
} from "../models/Listing.mjs";


async function publishNewListing(title, description, price, stock, publisherId, kategoriId) {
    const res = await publishListing(title, description, price, stock, publisherId, kategoriId);
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

async function getAllListings() {
    const res = await ListingModelGetAllListings();
    return res;
}

async function getSingleListing(id) {
    const res = await ListingModelGetSingleListing(id);
    return res;
}
async function getCategoryAllListings(id) {
    const res = await ListingModelGetCategoryAllListings(id);
    return res;
}

export { publishNewListing, updateListingPrice, updateListingStock, getAllListings, getSingleListing, getCategoryAllListings };