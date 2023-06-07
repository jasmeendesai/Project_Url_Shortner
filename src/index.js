const express = require("express");
const { default: mongoose } = require("mongoose");
const route = require("./route/route");

require('dotenv').config();

const {PORT,MONGODB_CONNECT} = process.env

const app = express();

app.use(express.json());
mongoose.set('strictQuery', true);
mongoose
  .connect(
    MONGODB_CONNECT,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("Error while connecting to the database:", error.message);
  });

app.use("/", route);

app.listen(PORT, () => {
  console.log(`app running on 3000`);
});
