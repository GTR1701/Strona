let mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "serwis"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected")
})

const queryDatabase = async (connect, sql, params) => new Promise(
  (resolve, reject) => {
    const handleFunction = (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    }
    connect.query(sql, params, handleFunction)
  }
)

const insertInto = async (sql, connect) => new Promise(
  (resolve, reject) => {
    const handleFunction = (err, result) => {
      if (err) {
        reject(err)
        return
      }
      console.log("1 record inserted");
      resolve(result)
    }
    connect.query(sql, handleFunction)
  }
)

module.exports = { con, queryDatabase, insertInto }