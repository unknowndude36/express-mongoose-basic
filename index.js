const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/test")
	.then(() => {
		console.log("Mongoose Connected!");
	})
	.catch((err) => {
		console.log("Mongoose Error!");
		console.log(err);
	});

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.send("Express Connected");
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
