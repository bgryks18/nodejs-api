/** @format */

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const products = require("./route/products");

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/products", products);

app.listen(port, () => {
	console.log(`server is running at: http://localhost:${port}`);
});
