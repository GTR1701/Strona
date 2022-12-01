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

  const handleClick = () => {
    let response = axios.get(`http://localhost:6969/update/${Id}`);
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
            </tr>
            <tr>
              <td className="prawo">Firma: </td>
              <td className="wart">{Firma}</td>
            </tr>
            <tr>
              <td colSpan={2} className="opis">
                {Tytul}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="opis">
                {Opis}
              </td>
            </tr>
          </table>
          <center>
            <button onClick={handleClick} className="szczeg-btn">
              Przyjmij zlecenie
            </button>
          </center>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default LoginModal;
