const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const buzzwords = [];
let score = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/buzzwords", (req, res) => {
  res.json({ buzzWords: buzzwords });
});

app.post("/buzzword", (req, res) => {
  console.log("body: ", req.body);
  if (buzzwords.length < 4) {
    buzzwords.push(req.body);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.use((req, res, next) => {
  if (buzzwords.length === 0) {
    res.json({ success: false });
    next();
  } else {
    next();
  }
});

app.put("/buzzword", (req, res) => {
  const word = buzzwords.filter(obj => {
    console.log("obj: ", obj.buzzWord);
    console.log("body word: ", req.body.buzzWord);
    console.log("heard: ", req.body.heard);
    if (obj.buzzWord === req.body.buzzWord && req.body.heard === "true") {
      obj.heard = true;
      score = Number(score) + Number(obj.points);
      console.log(obj);
      res.json({ success: true, newScore: score });
    } else {
      res.json({ success: false });
    }
  });
});

app.delete("/buzzword", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
