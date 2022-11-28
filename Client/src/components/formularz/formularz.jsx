import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./formularz.css";

function Formularz(...props) {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [email, setEmail] = useState("");
  const [firma, setFirma] = useState("");
  const [poczta, setPoczta] = useState("");
  const [ulica, setUlica] = useState("");
  const [miasto, setMiasto] = useState("");
  const [tytul, setTytul] = useState("");
  const [krotki, setKrotki] = useState("");
  const [opis, setOpis] = useState("");
  const [usterka, setUsterka] = useState("");

  let formData = {
    imie: imie,
    nazwisko: nazwisko,
    email: email,
    firma: firma,
    poczta: poczta,
    ulica: ulica,
    miasto: miasto,
    tytul: tytul,
    krotki: krotki,
    opis: opis,
    usterka: usterka,
  };
  console.log(formData);
  const sendData = async (data) => {
    console.log(formData);

    await axios.post("http://localhost:6969/form", data);
  };
  const handleSubmit = () => {
    sendData(formData);
  };

  return (
    <div className="formule">
      <center>
        <h1>Uzupełnij dane osobowe, aby kontynuować</h1> <br />
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <label htmlFor="imie">Imię</label>
          <input
            id="imie"
            type="text"
            name="imie"
            onChange={(event) => setImie(event.target.value)}
          />
          <br />
          <label htmlFor="nazwisko">Nazwisko</label>
          <input
            type="text"
            name="nazwisko"
            onChange={(event) => setNazwisko(event.target.value)}
          />
          <br />
          <label htmlFor="E-mail">E-mail</label>
          <input
            type="text"
            name="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="Firma">Nazwa Firmy</label>
          <input
            type="text"
            name="Firma"
            onChange={(event) => setFirma(event.target.value)}
          />
          <br />
          <label htmlFor="poczta">Kod pocztowy</label>
          <input
            type="text"
            name="poczta"
            onChange={(event) => setPoczta(event.target.value)}
          />
          <br />
          <label htmlFor="ulica">Ulica</label>
          <input
            type="text"
            name="Ulica"
            onChange={(event) => setUlica(event.target.value)}
          />
          <br />
          <label htmlFor="Miasto">Miasto</label>
          <input
            type="text"
            name="Miasto"
            onChange={(event) => setMiasto(event.target.value)}
          />
          <br />
          <label htmlFor="Tytuł">Tytuł zgłoszenia</label>
          <input
            type="text"
            name="Tytuł"
            onChange={(event) => setTytul(event.target.value)}
          />
          <br />
          <label htmlFor="Krótki">Krótki opis</label>
          <input
            type="text"
            name="Krótki opis"
            onChange={(event) => setKrotki(event.target.value)}
          />
          <br />
          <label htmlFor="Opis">Opis</label>
          <input
            type="text"
            name="Opis"
            onChange={(event) => setOpis(event.target.value)}
          />
          <br />
          <label htmlFor="wybor">Rodzaj zgłoszenia</label>
          <select
            id="wybor"
            name="usterka"
            onChange={(event) => setUsterka(event.target.value)}
          >
            <option value="uszkodzenie">Uszkodzenie</option>
            <option value="reklamacja">Reklamacja</option>
            <option value="zażalenie">Zażalenie</option>
            <option value="problem">Inny problem</option>
          </select>
          <br />
          <input type="checkbox" /> Zaświadczam, że zapoznałem się z{" "}
          <a href="#">regulaminem</a> strony oraz wyrażam zgodę na przetwarzanie
          moich danych osobowych
          <br />
          <input type="checkbox" />
          Wyrażam zgodę na odbieranie newsletterów oraz powiadomień o akcjach
          organizowanych przez firmę
          <br />
          <input type="submit" value="Prześlij zapytanie" />
        </form>
      </center>
    </div>
  );
}

export default Formularz;
