import express from "express";
const app = express();
import passport from "passport";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieparser from "cookie-parser";
import expressession from 'cookie-session';

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


export { app };