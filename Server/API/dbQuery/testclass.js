const { con, queryDatabase, insertInto } = require('./db')

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

    getFormData = async (req, res) => {
        if (req) {
            console.log(req.body)
            const sql = `INSERT INTO zgloszenia (Data_zgloszenia, Data_zgloszenia_dokl, Imie, Nazwisko, Email, Firma, Ulica, Kod_pocztowy, Miasto, Rodzaj_zgloszenia, Tytul, Krotki_opis, Opis)
            VALUES (NOW(), Current_time(), "${req.body.imie}", "${req.body.nazwisko}", "${req.body.email}", "${req.body.firma}", "${req.body.ulica}", "${req.body.poczta}", "${req.body.miasto}", "${req.body.usterka}", "${req.body.tytul}", "${req.body.krotki}", "${req.body.opis}");`
            const data = await insertInto(sql, con)
            if (data) {
                res.json({
                    data: data
                })
            }
        }
    }
}

module.exports = new Controller