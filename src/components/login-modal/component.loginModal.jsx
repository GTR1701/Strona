import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './component.loginModal.css'
import Database from "../../services/database"


const database = new Database();

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='login'>
        <button className='login' onClick={handleShow}>
          Zaloguj
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
            <form className='login-form'>
              <label htmlFor="Login">Login</label><br></br>
              <input type="text" id='login' name='Login' /><br></br>
              <label htmlFor="passwd">Hasło</label><br></br>
              <input type="password" id='passwd' name='Hasło'/><br></br><br></br>
              <Button variant="primary" className='login-btn' onClick={handleClose}>Zaloguj</Button><br></br>
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