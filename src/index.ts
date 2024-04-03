require("dotenv").config();
import { ExtendedClient } from "./Bot/structures/Client";

export const client = new ExtendedClient();

client.start();

const express = require("express");
const Express = express();
const fs = require("fs");
const path = require("path")
const cookiepars = require("cookie-parser");

Express.use(express.json());
Express.use(express.urlencoded({ extended: true }));
Express.use(express.static('public'));
Express.use(cookiepars());

Express.use(require("./structs/main"));
Express.use(require("./game/user"));

Express.listen(process.env.port, () => {
    console.log("Dome Is Listening On Port", process.env.port);
});

Express.use((req, res, next) => {
    var ErrorName = "errors.dome.not_found";
    var ErrorCode = 1004;

    res.set({
        'X-Epic-Error-Name': ErrorName,
        'X-Epic-Error-Code': ErrorCode
    });

    res.status(404);
    res.json({
        "errorCode": ErrorName,
        "errorMessage": "Sorry the resource you were trying to find could not be found",
        "numericErrorCode": ErrorCode,
        "originatingService": "any",
        "intent": "prod"
    });
});




//lil calm return;