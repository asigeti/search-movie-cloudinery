const express = require("express");
const app = express();
const port = 3001;
const mock = require("./cards");
var cors = require('cors');

app.use(cors())
app.get("/cards", (req, res) => {
  setTimeout(() => {
    res.send(mock.Cards);
  }, 3000);
});

app.listen(port, () =>
  console.log(`mock server app listening on port ${port}!`)
);
