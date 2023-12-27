const express = require("express");
var bodyParser = require("body-parser");

const app = express();
var jsonParser = bodyParser.json();

app.post("/s-ok-uns-ok", jsonParser, (req, res, next) => {
  const { body } = req;

  res.status(200).json(body);
});

app.post("/s-ok-uns-no", jsonParser, (req, res, next) => {
  const { body } = req;
  const { action } = body;

  if (action === "new") res.status(200).json(body);
  else
    res.status(500).json({
      error: {
        statusCode: 500,
        name: "ServiceError",
        message: "this feature not handle yet",
      },
    });
});

app.post("/s-no-uns-ok", jsonParser, (req, res, next) => {
  const { body } = req;
  const { action } = body;

  if (action === "new")
    res.status(500).json({
      error: {
        statusCode: 500,
        name: "ServiceError",
        message: "this feature not handle yet",
      },
    });
  else res.status(200).json(body);
});

app.post("/s-no-uns-no", jsonParser, (req, res, next) => {
  const { body } = req;
  const { action } = body;

  res.status(500).json({
    error: {
      statusCode: 500,
      name: "ServiceError",
      message: "this feature not handle yet",
    },
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
