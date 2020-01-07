const express = require("express");
const app = express();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");

const io = require("socket.io")(http);

const PORT = process.env.PORT | 8080;

app.use(bodyParser.json());

app.use(express.static("public"));

app.post("/webhooks/stripe", (req, res) => {
  const { data } = req.body;
  const { amount, currency, description } = data.object;

  io.emit("money", { amount, currency, description });

  return res.status(200);
});

http.listen(PORT);
