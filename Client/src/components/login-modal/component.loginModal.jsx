import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './component.loginModal.css'

function LoginModal() {
  const doForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    data.set('username', data.get('username'));
    data.append("login", document.getElementById("login").value);
    data.append("password", document.getElementById("passwd").value);
    console.log(data)
  }
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    doForm();
  }
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
            <form id='login-form' className='login-form' action='../../services/database.js' onSubmit={this.doForm}>
              <label htmlFor="Login">Login</label><br></br>
              <input type="text" id='login' name='Login' /><br></br>
              <label htmlFor="passwd">Hasło</label><br></br>
              <input type="password" id='passwd' name='Hasło'/><br></br><br></br>
              {/* <Button variant="primary" className='login-btn' onClick={handleClose}>Zaloguj</Button><br></br> */}
              <input type="button" value="Zaloguj" className='btn btn-primary login-btn' onClick={handleClose} />
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