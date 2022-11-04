const { con, queryDatabase } = require('./db')

class Controller {
    async getData(req, res) {
        const row = req.params
        if (row) {
            const sql = `select * from zgloszenia`
            const data = await queryDatabase(con, sql, [row])
            if (data) {
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

    // async checkLogin(req, res) {
    //     const query = req.params
    //     console.log(query)
    //     if (row) {
    //         const sql = `SELECT Username, Password FROM users
    //         WHERE Username LIKE(${query}) AND Password LIKE(${password})`
    //         const data = await queryDatabase(con, sql, [row])
    //         if (data) {
    //             res.json({
    //                 data: data
    //             })
    //         }
    //     }
    //     else {
    //         res.json({
    //             status: 'error'
    //         })
    //     }
    // }
}

module.exports = new Controller