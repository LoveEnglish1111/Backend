const studySets = require("./studySetsRouter.ts");

function route(app) {
    app.use("/StudySets", studySets);
}

module.exports = route;