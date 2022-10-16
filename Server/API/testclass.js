const {con, queryDatabase} = require('./db')

class Controller {
    async getData(req,res) {
        const rowSlug = req.params
        if(rowSlug){
            const sql = `select * from users`
            const data = await queryDatabase(con, sql, [rowSlug])
            if (data){
                res.json({
                    data: data
                })
            }
        }
        else {
            res.json({
                status: 'error'
            })
        }
    }
}

module.exports = new Controller