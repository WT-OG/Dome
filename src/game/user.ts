const e = require("express");
const app = e.Router();
const iniparser = require("ini");
var CurrentAccountName = process.env.displayname;

app.get("/account/api/public/account", async (req, res) => {
    var response = [];

    if (typeof req.query.accountId == "string") {
        var accountIdd = req.query.accountId;
        if (accountId.includes("@")) accountId = accountId.split("@")[0];

        response.push({
            "id": accountId,
            "displayName": accountId,
            "externalAuths": {}
        })
    }

    if (Array.isArray(req.query.accountId)) {
        for (var x in req.query.accountId) {
            var accountId = req.query.accountId[x];
            if (accountId.includes("@")) accountId = accountId.split("@")[0];

            response.push({
                "id": accountId,
                "displayName": accountId,
                "externalAuths": {}
            })
        }
    }

    res.json(response)
})

app.get("/account/api/public/account/:accountId", async (req, res) => {
    if (process.env.UseEmailForUserName == "false") {
        CurrentAccountName = req.params.accountId;
    }

    if (CurrentAccountName.includes("@")) CurrentAccountName = CurrentAccountName.split("@")[0];

    res.json({
        "id": req.params.accountId,
        "displayName": CurrentAccountName,
        "name": "DomeUser",
        "email": CurrentAccountName + "@dome.com",
        "failedLoginAttempts": 0,
        "lastLogin": new Date().toISOString(),
        "numberOfDisplayNameChanges": 0,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "US",
        "lastName": "Server",
        "preferredLanguage": "en",
        "canUpdateDisplayName": false,
        "tfaEnabled": false,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "NOT_MINOR",
        "cabinedMode": false,
        "hasHashedEmail": false
    })
})

app.post("/auth/v1/oauth/token", async (req, res) => {
    res.json({
        "access_token": "SigmaToken",
        "token_type": "bearer",
        "expires_in": 28800,
        "expires_at": "9999-12-31T23:59:59.999Z",
        "deployment_id": "sigmadeploymentidlol",
        "organization_id": "sigmaorganizationidlol",
        "product_id": "prod-fn",
        "sandbox_id": "fn"
    })
})

app.get("/epic/id/v2/sdk/accounts", async (req, res) => {
    res.json([{
        "accountId": CurrentAccountName,
        "displayName": CurrentAccountName,
        "preferredLanguage": "en",
        "cabinedMode": false,
        "empty": false
    }])
})

app.post("/epic/oauth/v2/token", async (req, res) => {
    res.json({
        "scope": "basic_profile friends_list openid presence",
        "token_type": "bearer",
        "access_token": "sigmatokenlol",
        "expires_in": 28800,
        "expires_at": "9999-12-31T23:59:59.999Z",
        "refresh_token": "sigmatokenlol",
        "refresh_expires_in": 86400,
        "refresh_expires_at": "9999-12-31T23:59:59.999Z",
        "account_id": CurrentAccountName,
        "client_id": "sigmaclientidlol",
        "application_id": "sigmaapplicationidlol",
        "selected_account_id": CurrentAccountName,
        "id_token": "sigmatokenlol"
    })
})

app.get("/account/api/public/account/*/externalAuths", async (req, res) => {
    res.json([])
})

app.delete("/account/api/oauth/sessions/kill", async (req, res) => {
    res.status(204);
    res.end();
})

app.delete("/account/api/oauth/sessions/kill/*", async (req, res) => {
    res.status(204);
    res.end();
})

app.get("/account/api/oauth/verify", async (req, res) => {
    res.json({
        "token": "sigmatokenlol",
        "session_id": "3c3662bcb661d6de679c636744c66b62",
        "token_type": "bearer",
        "client_id": "sigmaclientidlol",
        "internal_client": true,
        "client_service": "fortnite",
        "account_id": CurrentAccountName,
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "auth_method": "exchange_code",
        "display_name": CurrentAccountName,
        "app": "fortnite",
        "in_app_id": CurrentAccountName,
        "device_id": "sigmadeviceidlol"
    })
})

app.post("/account/api/oauth/token", async (req, res) => {
    if (process.env.UseEmailForUserName == "false") {
        CurrentAccountName = req.body.username || "Dome_Player"
    }

    if (CurrentAccountName.includes("@")) CurrentAccountName = CurrentAccountName.split("@")[0];

    res.json({
        "access_token": "sigmatokenlol",
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "token_type": "bearer",
        "refresh_token": "sigmatokenlol",
        "refresh_expires": 86400,
        "refresh_expires_at": "9999-12-02T01:12:01.100Z",
        "account_id": CurrentAccountName,
        "client_id": "sigmaclientidlol",
        "internal_client": true,
        "client_service": "fortnite",
        "displayName": CurrentAccountName,
        "app": "fortnite",
        "in_app_id": CurrentAccountName,
        "device_id": "sigmadeviceidlol"
    })
})

app.post("/account/api/oauth/exchange", async (req, res) => {
    res.json({})
})

app.get("/account/api/epicdomains/ssodomains", async (req, res) => {
    res.json([
        "unrealengine.com",
        "unrealtournament.com",
        "fortnite.com",
        "epicgames.com"
    ])
})

app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/*", async (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(true);
})

module.exports = app;