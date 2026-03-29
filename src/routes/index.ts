const studySets = require("./studySets.ts");
const auth = require("./auth.ts");
const profile = require("./profile");
const vocabulary = require("./vocabulary");

function route(app) {
    app.use("/auth", auth);
    app.use("/StudySets", studySets);
    app.use("/profile", profile);
    app.use("/vocabulary", vocabulary);
}

module.exports = route;