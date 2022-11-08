const { con, queryDatabase } = require('./db')

class Controller {
    async getData(req, res) {
        const row = req.params.query
        console.log(row)
        if (row) {
            if (row == "*") {
                const sql = `SELECT * FROM zgloszenia`
                const data = await queryDatabase(con, sql, [row])
                if (data) {
                    res.json({
                        data: data
                    })
                }
            } else if (row != "*") {
                const sql = `SELECT * FROM zgloszenia
                WHERE (((((Id = "${row}" OR Imie = "${row}") OR Nazwisko = "${row}") OR Firma = "${row}") OR Rodzaj_zgloszenia = "${row}") OR Tytul = "${row}") OR Krotki_opis = "${row}"`
                const data = await queryDatabase(con, sql, [row])
                if (data) {
                    res.json({
                        data: data
                    })
                }
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