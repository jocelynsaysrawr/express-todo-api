const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
