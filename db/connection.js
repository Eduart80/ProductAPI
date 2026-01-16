const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.MONGO_URL

mongoose
  .connect(uri)
  .then(() => console.log("Successfully connection created"))
  .catch((err) => console.error("Connection error", err));