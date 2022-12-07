import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./component.loginModal.css";
import axios from "axios";

function LoginModal({
  Id,
  Imie,
  Nazwisko,
  Firma,
  Rodzaj_zgloszenia,
  Tytul,
  Opis,
  Data_zgl,
  Data_zgl_dok,
  Data_przyj,
  Data_wysyl_do_kli,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickPrzyj = () => {
    if (Data_przyj == null) axios.get(`http://localhost:6969/update/${Id}`);
  };
  const handleClickWys = () => {
    if (Data_przyj != null && Data_wysyl_do_kli == null)
      axios.get(`http://localhost:6969/wys/${Id}`);
  };

  return (
    <>
      <div>
        <button className="login" onClick={handleShow}>
          Podgląd
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="rozmiar-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Szczegóły</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="szczeg-tab">
            <tr>
              <td className="prawo">Id zgłoszenia: </td>
              <td className="wart">{Id}</td>
              <td className="daty">Data zgłoszenia: </td>
              <td>{Data_zgl_dok}</td>
            </tr>
            <tr>
              <td className="prawo">Rodzaj zgłoszenia: </td>
              <td className="wart">{Rodzaj_zgloszenia}</td>
              <td className="daty">Data przyjęcia przez serwis: </td>
              <td>{Data_przyj}</td>
            </tr>
            <tr>
              <td className="prawo">Zgłaszający: </td>
              <td className="wart">
                {Imie} {Nazwisko}
              </td>
              <td className="daty">Data wysyłki do klienta: </td>
              <td>{Data_wysyl_do_kli}</td>
            </tr>
            <tr>
              <td className="prawo">Firma: </td>
              <td className="wart">{Firma}</td>
            </tr>
            <tr>
              <td colSpan={4} className="opis">
                {Tytul}
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="opis">
                {Opis}
              </td>
            </tr>
          </table>
          <div className="przyj-div">
            <button onClick={handleClickPrzyj} className="szczeg-btn login">
              Przyjmij zlecenie
            </button>
            <button onClick={handleClickWys} className="szczeg-btn login">
              Potwierdź wysłanie do klienta
            </button>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default LoginModal;
