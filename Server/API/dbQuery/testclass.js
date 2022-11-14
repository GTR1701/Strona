const { con, queryDatabase } = require('./db')

class Controller {
    async getData(req, res) {
        const row = req.params.query
        if (row) {
            if (row == "*" || row == "") {
                const sql = `SELECT * FROM zgloszenia`
                const data = await queryDatabase(con, sql, [row])
                if (data) {
                    res.json({
                        data: data
                    })
                }
            } else if (row != "*") {
                let zapyt = `${row}`
                let sql = `SELECT * FROM zgloszenia
                WHERE (((((Id LIKE "${zapyt}%" OR Imie LIKE "${zapyt}%") OR Nazwisko LIKE "${zapyt}%") OR Firma LIKE "${zapyt}%") OR Rodzaj_zgloszenia LIKE "${zapyt}%") OR Tytul LIKE "${zapyt}%") OR Krotki_opis LIKE "${zapyt}*"`
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