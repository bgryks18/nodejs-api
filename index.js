/** @format */

const express = require("express");

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
	console.log(`server is running at: http://localhost:${port}`);
});
