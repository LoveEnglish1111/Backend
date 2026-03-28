import express from "express";
const route = require("./routes");

const app = express();
const port = 1111;

// Routes init
route(app);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});