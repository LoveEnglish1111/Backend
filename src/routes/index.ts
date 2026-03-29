const studySets = require("./studySetsRouter.ts");
const siteRouter = require("./siteRouter")

function route(app) {
    app.use("/StudySets", studySets);
    app.use("/site",siteRouter);
}

module.exports = route;