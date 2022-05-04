import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cors from 'cors'
import Navbar from '../Layout/navbar'

const LogIn = () => {
  const [state, setstate] = useState(() => ({ username: '', password: '' }));

  // console.log('estado', state)
  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log('estado', state)
    var x = await axios.post('http://localhost:8000/login', state)//, fetch)
    console.log('data', x)

    if (x.status === 200) {
      localStorage.setItem('token', x.data.token)
      localStorage.setItem('user', JSON.stringify(x.data.user))
      Navbar.logged_in = true
      window.location.href = '/'
      
    }
    else {
      alert('Usuario o contraseña incorrectos')
    }

  }
  return (
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
      <div className="container-fluid overflow-auto" style={{ height: '100vh', margin: '0', padding: '3%', background: '#dcdbdb', minHeight: '300px' }}>
        <div
          className="shadow-lg row"
          style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
          <div className="col-6 col-md-6 align-self-center" style={{ padding: '5%' }}>
            <p className="text-center fs-1 "> Inicia Sesión </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-start" >
                {/* <p className="alert alert-danger">
                  Your username and password didn't match. Please try again.
                </p> */}
                <input
                  type="email"
                  className="form-control"
                  id="email_login"
                  aria-describedby="dni_help"
                  placeholder="Correo electronico"
                  name="user-email"
                  onChange={(e) => setstate({ ...state, username: e.target.value })}
                />

                <input
                  type="password"
                  className="form-control mt-2"
                  id="user_password"
                  aria-describedby="dni_help"
                  placeholder="Contraseña"
                  name="password"
                  onChange={(e) => setstate({ ...state, password: e.target.value })}
                />
                <input
                  type="submit"
                  className="btn-primary bton"
                  value="Ingresar"
                />
              </div>
            </form>
            <div className="text-center" style={{ marginTop: "15px" }}>
              <Link to='/restorepass'>
                <p className="users-redirect-link">
                  ¿Olvidaste tu contraseña?
                </p>
              </Link>

            </div>
          </div>
          <div
            className="col-6 d-none d-md-block fondo_mitad_derecho"
            id="div_derecho_users"
          >
            <div
              className="row  justify-content-md-center"
              style={{ alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <Link to="/">
                <img
                  alt="DH Logo"
                  src={AppLogo}
                  style={{ height: '40%', width: "auto"/*, maxWidth: "300px"*/ }}
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn