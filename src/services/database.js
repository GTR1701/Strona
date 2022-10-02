let mysql = require('mysql')
let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "logowanie"
});

const insert = (query) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // var sql = "INSERT INTO logowanie (imie, nazwisko) VALUES ('test1', 'test1')";
        con.query(query, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}

class Database {
    databaseInjection = (query) => {
        insert(query)
    } 
}
export default Database;