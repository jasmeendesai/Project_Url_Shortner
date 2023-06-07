const express = require("express");
const Router = express.Router();
const urlController = require("../controller/urlController");

Router.post("/url/shorten", urlController.shortUrl);
Router.get("/:urlCode", urlController.getUrl);
Router.use("*", (req, res) => {
  return res.status(404).send("invalid urls");
});
module.exports = Router;
