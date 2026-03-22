import express from "express";

const app = express();
const PORT = 1111;
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})