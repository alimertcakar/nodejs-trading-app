const db = require("./db");
const { app } = require("./routes");
const user = require("./models/User")

var cors = require('cors')


app.use(cors());




