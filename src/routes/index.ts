const studySets = require("./studySetsRouter.ts");
const auth = require("./auth.ts")

function route(app) {
    app.use("/auth", auth);
    app.use("/StudySets", studySets);
}

module.exports = route;