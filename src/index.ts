require("dotenv").config();
import { ExtendedClient } from "./Bot/structures/Client";

export const client = new ExtendedClient();

client.start();

const express = require("express");
const Express = express();
const fs = require("fs");
const path = require("path")
const cookiepars = require("cookie-parser");
