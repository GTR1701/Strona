const express = require("express");
const app = express();
const PORT = 6969;
const cors = require("cors");
const testRouter = require('./API/router')

app.use(cors());
app.use(express.json());
app.use('/test', testRouter)

app.listen(PORT, () => {
  console.log("Server running");
});