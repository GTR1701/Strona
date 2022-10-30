import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./component.loginModal.css";
import { useAuth0 } from "@auth0/auth0-react";

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="nav-bar-right">
        <a className="login" onClick={handleShow}>
          Zaloguj
        </a>
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
            <form id="login-form" className="login-form">
              <label htmlFor="Login">Login</label>
              <br></br>
              <input type="text" id="login" name="Login" />
              <br></br>
              <label htmlFor="passwd">Hasło</label>
              <br></br>
              <input type="password" id="passwd" name="Hasło" />
              <br></br>
              <br></br>
              {/* <Button variant="primary" className='login-btn' onClick={handleClose}>Zaloguj</Button><br></br> */}
              <button
                className="btn btn-primary login-btn"
                onClick={() => loginWithRedirect()}
              >
                Zaloguj
              </button>
            </form>
          </center>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default LoginModal;
