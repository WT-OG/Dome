const express = require("express");
const Express = express.Router();
const fs = require("fs")
const path = require("path");


Express.post("/fortnite/api/game/v2/grant_access/*", async (req, res) => {
    res.json({});
    res.status(204);
})

Express.post("/api/v1/user/setting", async (req, res) => {
    res.json([]);
})

Express.get("/waitingroom/api/waitingroom", async (req, res) => {
    res.status(204);
    res.end();
})

Express.get("/socialban/api/public/v1/*", async (req, res) => {
    res.json({
        "bans": [],
        "warnings": []
    });
})

Express.get("/fortnite/api/statsv2/account/:accountId", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    });
})

Express.get("/statsproxy/api/statsv2/account/:accountId", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    });
})

Express.get("/fortnite/api/stats/accountId/:accountId/bulk/window/alltime", async (req, res) => {
    res.json({
        "startTime": 0,
        "endTime": 0,
        "stats": {},
        "accountId": req.params.accountId
    })
})

Express.post("/fortnite/api/feedback/*", async (req, res) => {
    res.status(200);
    res.end();
})

Express.post("/fortnite/api/statsv2/query", async (req, res) => {
    res.json([]);
})

Express.post("/statsproxy/api/statsv2/query", async (req, res) => {
    res.json([]);
})

Express.post("/fortnite/api/game/v2/events/v2/setSubgroup/*", async (req, res) => {
    res.status(204);
    res.end();
})

Express.get("/fortnite/api/game/v2/enabled_features", async (req, res) => {
    res.json([])
})

Express.get("/fortnite/api/game/v2/twitch/*", async (req, res) => {
    res.status(200);
    res.end();
})



Express.post("/fortnite/api/game/v2/chat/*/*/*/pc", async (req, res) => {
    res.json({ "GlobalChatRooms": [{"roomName":"lawinserverglobal"}] })
})

Express.post("/fortnite/api/game/v2/chat/*/recommendGeneralChatRooms/pc", async (req, res) => {
    res.json({})
})

Express.post("/datarouter/api/v1/public/data", async (req, res) => {
    res.status(204);
    res.end();
})

module.exports = Express;