import axios from "axios";
import React from "react";
import { useState } from "react";
import "./formularz.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const sendData = async (data) => {
    await axios.post("http://localhost:6969/form", data);
  };
  const handleSubmit = () => {
    sendData(formData);
  };

  return (
    <div className="formule">
      <center>
        <h1>Uzupełnij dane osobowe, aby kontynuować</h1> <br />
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="imie">
            Imię
          </label>
          <input
            required="true"
            className="input"
            id="imie"
            type="text"
            name="imie"
            onChange={(event) => setImie(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="nazwisko">
            Nazwisko
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="nazwisko"
            onChange={(event) => setNazwisko(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="E-mail">
            E-mail
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="Firma">
            Nazwa Firmy
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="Firma"
            onChange={(event) => setFirma(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="poczta">
            Kod pocztowy
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="poczta"
            onChange={(event) => setPoczta(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="ulica">
            Ulica
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="Ulica"
            onChange={(event) => setUlica(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="Miasto">
            Miasto
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="Miasto"
            onChange={(event) => setMiasto(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="Tytuł">
            Tytuł zgłoszenia
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="Tytuł"
            onChange={(event) => setTytul(event.target.value)}
          />
          <br />
          <label className="label" htmlFor="Krótki">
            Krótki opis
          </label>
          <input
            required="true"
            className="input"
            type="text"
            name="Krótki opis"
            onChange={(event) => setKrotki(event.target.value)}
          />
          <br />
          <label className="label label-opis" htmlFor="Opis">
            Opis
          </label>
          <textarea
            className="input opis"
            cols={1}
            rows={10}
            name="Opis"
            onChange={(event) => setOpis(event.target.value)}
          />
          <br />
          <label className="move" htmlFor="wybor">
            Rodzaj zgłoszenia:
          </label>
          <select
            required="true"
            id="wybor"
            name="usterka"
            onChange={(event) => setUsterka(event.target.value)}
          >
            <option disabled selected value>
              -- Wybierz typ --
            </option>
            <option value="uszkodzenie">Uszkodzenie</option>
            <option value="reklamacja">Reklamacja</option>
            <option value="zażalenie">Zażalenie</option>
            <option value="problem">Inny problem</option>
          </select>
          <br />
          <input required="true" type="checkbox" /> Zaświadczam, że zapoznałem
          się z{" "}
          <a className="regulamin" onClick={handleShow}>
            regulaminem
          </a>{" "}
          strony oraz wyrażam zgodę na przetwarzanie moich danych osobowych
          <br />
          <input required="true" type="checkbox" />
          Wyrażam zgodę na odbieranie newsletterów oraz powiadomień o akcjach
          organizowanych przez firmę
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Prześlij zapytanie"
          />
        </form>
      </center>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="rozmiar-modal"
      >
        <Modal.Header>
          <Modal.Title>
            <b>
              Klauzula informacyjna RODO w zakresie przetwarzania danych
              osobowych
            </b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="klauzula">
          <p>
            1. Administratorem danych osobowych jest Dawid Kowal oraz Patryk
            Olszak
          </p>
          <p>
            2. Przekazane dane osobowe przetwarzane będą w celu realizacji
            usług, obsługi zgłoszeń i udzielania odpowiedzi na zgłoszenia;
          </p>
          <p>
            3. Kategorie danych osobowych obejmują m.in. imię i nazwisko, numer
            telefonu, adres e-mail, adres, dane dedykowane do
            procesu/usługi/projektu;
          </p>
          <p>
            4. Pani / Pana dane osobowe mogą być przekazywane podmiotom
            przetwarzającym dane osobowe na zlecenie administratora: Twórcy
            witryny, serwisanci;
          </p>
          <p>
            5. Państwa dane osobowe będą przechowywane przez okres istnienia
            prawnie uzasadnionego interesu administratora, chyba że Pani / Pan
            wyrazi sprzeciw wobec przetwarzania danych;
          </p>
          <p>
            6. Państwa dane nie będą przekazywane do państwa trzeciego ani
            organizacji międzynarodowej;
          </p>
          <p>
            7. Posiadają Państwo prawo dostępu do treści swoich danych oraz
            prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo
            do przenoszenia danych, prawo wniesienia sprzeciwu, prawo do
            cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem
            przetwarzania, którego dokonano na podstawie zgody przed jej
            cofnięciem;
          </p>
          <p>
            8. Mają Państwo prawo wniesienia skargi do organu nadzorczego
            zajmującego się ochroną danych osobowych, którym jest Prezes Urzędu
            Ochrony Danych Osobowych, gdy uznają Państwo, iż przetwarzanie
            Państwa danych osobowych narusza przepisy ustawy z dnia 10 maja 2018
            r. o ochronie danych osobowych (tekst jednolity Dz. U. z 2018 r.,
            poz. 1000) lub przepisy Rozporządzenia Parlamentu Europejskiego i
            Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych) z dnia 27 kwietnia 2016 r.
            (Dz.Urz.UE.L Nr 119, str. 1);
          </p>
          <p>
            9. Dane udostępnione przez Panią/Pana nie będą podlegały
            zautomatyzowanemu podejmowaniu decyzji oraz profilowaniu;
          </p>
          <p>10. Dane pochodzą od osób, których dane dotyczą;</p>
          <p>11. Podanie przez Państwa danych osobowych jest dobrowolne;</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="regul-przyc" onClick={handleClose}>
            Akceptuję regulamin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Formularz;
