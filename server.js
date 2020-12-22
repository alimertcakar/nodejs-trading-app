const db = require("./db");
const { app } = require("./routes");
const { publishListing } = require("./models/Listing");


const authsetup = require("./middlewares/Auth");


publishListing("title", "desc", 125, 50, 1);

//ilan detayı getir

// (async () => {
//     const res = await getUserListings(4);
//     console.log(res);
// })();


app.listen(80);



