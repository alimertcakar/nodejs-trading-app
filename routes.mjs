import express from "express";
const app = express();
import passport from "passport";
import bodyParser from 'body-parser';
import cookieparser from "cookie-parser";
import expressession from 'cookie-session';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger.json');
import cors from "cors";
app.use(cors())


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);


app.use(cors());
app.use(bodyParser.json());

app.use(cookieparser());
app.use(expressession({
    secret: 'alimertsikrit',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


import HomeRoute from "./routes/Home.mjs";
app.use("/", HomeRoute);
import UserRoute from "./routes/User.mjs";
app.use("/hesap", UserRoute);
import SecretRoute from "./routes/Secret.mjs";
app.use("/gizli", SecretRoute);
import ListingRoute from "./routes/Listing.mjs";
app.use("/ilan", ListingRoute);
import TransactionRoute from "./routes/Transaction.mjs";
app.use("/transfer", TransactionRoute);

import ProfilRoute from "./routes/Profil.mjs";
app.use("/profil", ProfilRoute);

import AramaRoute from "./routes/Ara.mjs";
app.use("/ara", AramaRoute);


export { app };