import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./component.loginModal.css";

function LoginModal({
  Id,
  Imie,
  Nazwisko,
  Firma,
  Rodzaj_zgloszenia,
  Tytul,
  Opis,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      >
        <Modal.Header closeButton>
          <Modal.Title>Logowanie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
            <table>
              <tr>
                <td className="srodek">Id zgłoszenia: </td>
                <td>{Id}</td>
              </tr>
              <tr>
                <td className="srodek">Rodzaj zgłoszenia: </td>
                <td>{Rodzaj_zgloszenia}</td>
              </tr>
              <tr>
                <td className="srodek">Zgłaszający: </td>
                <td>
                  {Imie} {Nazwisko}
                </td>
              </tr>
              <tr>
                <td className="srodek">Firma: </td>
                <td>{Firma}</td>
              </tr>
              <tr>
                <td colSpan={2} className="srodek">
                  {Tytul}
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="srodek">
                  {Opis}
                </td>
              </tr>
            </table>
          </center>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default LoginModal;
