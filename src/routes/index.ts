const studySets = require("./studySetsRouter.ts");
const auth = require("./auth.ts");
const profile = require("./profile");

function route(app) {
    app.use("/auth", auth);
    app.use("/StudySets", studySets);
    app.use("/profile", profile);
}

module.exports = route;