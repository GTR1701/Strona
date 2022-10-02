let mysql = require('mysql')


console.log(data);

let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "logowanie"
});

const databaseQuery = (query) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // var sql = "INSERT INTO logowanie (imie, nazwisko) VALUES ('test1', 'test1')";
        con.query(query, function (err, result) {
            if (err) throw err;
            console.log(result);
            con.end();
        });
    });
}

databaseQuery("SELECT * FROM users")