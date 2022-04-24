import React , { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
      <div className="container-fluid overflow-auto" style={{ height: '100vh', margin: '0', padding: '3%', background: '#dcdbdb', minHeight: '300px' }}>
        <div
          className="shadow-lg row"
          style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
          <div className="col-6 col-md-6 align-self-center" style={{ padding: '5%' }}>
            <p className="text-center fs-1 "> Registrate </p>
            <form>
              <div className="form-group text-start" >
                  <div className='row row-cols-2'>
                      <div className='col'>
                      <input
                        type="text"
                        className="form-control"
                        id="input_name"
                        placeholder="Nombre completo"
                        name="name"
                      />
                      <input
                        type="email"
                        className="form-control mt-2"
                        id="input_email"
                        placeholder="Correo electronico"
                        name="username"
                        />

                       <input
                        type="password"
                        className="form-control mt-2"
                        id="input_password"
                        placeholder="Contraseña"
                        name="password"
                        />

                        <input
                        type="password"
                        className="form-control mt-2"
                        id="input_passwordagain"
                        placeholder="Verifica tu contraseña"
                        name="password"
                        />
                      </div>
                      <div className='col'>
                        <input
                        type="text"
                        className="form-control"
                        id="input_dni"
                        placeholder="DNI"
                        name="dni"
                        />
                        <input
                        type="text"
                        className="form-control mt-2"
                        id="input_country"
                        placeholder="Pais"
                        name="country"
                        />
                        <input
                        type="text"
                        className="form-control mt-2"
                        id="input_city"
                        placeholder="Ciudad"
                        name="city"
                        />
                        <input
                        type="password"
                        className="form-control mt-2"
                        id="input_phone"
                        placeholder="Telefono"
                        name="phone"
                        />
                      </div>
                  </div>
                  <input
                  type="submit"
                  className="btn-primary bton"
                  value="Registrarme e Ingresar"
                />
              </div>
            </form>
          </div>
          <div
            className="col-6 d-none d-md-block fondo_mitad_derecho"
            id="div_derecho_users"
          >
            <div
              className="row  justify-content-md-center"
              style={{ alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <img
                alt="ProEs Logo"
                src={AppLogo}
                style={{ height: '40%', width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp