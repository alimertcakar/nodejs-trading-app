const db = require("./db");
const { app } = require("./routes");
const { publishListing } = require("./models/Listing");

var cors = require('cors')
app.use(cors());



publishListing("ilan basligi", "aciklama ikinci satici", 4);

app.listen(80);



