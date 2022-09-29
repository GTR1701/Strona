
let mysql = require('mysql')

class database {
    constructor(){
        this.con = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "logowanie"
          });
        
        
    }
    
}
export default database;