const express = require("express");
const app = express();
const PORT = 6969;
const cors = require("cors");
const testRouter = require('./API/dbQuery/router')
const formRouter = require('./API/formrouter')
const update = require('./API/dbQuery/testclass')
const recieveRoute = require('./API/recieveRoute')

app.use(cors());
app.use(express.json());
app.use('/test', testRouter)
app.use('/form', formRouter)
app.use('/update', recieveRoute)

app.listen(PORT, () => {
  console.log("Server running");
});