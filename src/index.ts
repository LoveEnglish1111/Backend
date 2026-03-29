import express from "express";
import config from "./config";
import cors from "cors";
const route = require("./routes");
const db = require("./config/db");

const app = express();

// Routes init
app.use(cors());
db.connect();
route(app);

app.listen(config.port, () => {
	console.log(`Example app listening on port ${config.port}`);
});