import db from "./db.mjs";
import { app } from "./routes.mjs";
import { publishListing } from "./models/Listing.mjs";
import cors from "cors";
app.use(cors())



//ilan detayı getir

// (async () => {
//     const res = await getUserListings(4);
//     console.log(res);
// })();


app.listen(80);



