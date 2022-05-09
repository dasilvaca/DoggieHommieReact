import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    // var name = state.user.first_name.split(" ");
    // state.user.first_name = name[0] // TODO Modify Djangho uset model to have only first name and last name or just name
    // state.user.last_name = name[1]

    if (state.user.password !== state.user.password_confirmation) {
      alert("Las contraseñas no coinciden")
      console.log('data', state)
      return
    }
<<<<<<< HEAD
    else{
      // delete state.user.password_confirmation;
=======
    else {
      delete state.user.password_confirmation;
>>>>>>> 78a466d8e82ecdcb32893b6b11d2f13e9d652238
      var x = await axios.post('http://localhost:8000/users', state);
      console.log('data', x)
      console.log('data', state)
      if (x.status === 200) {
        localStorage.setItem('token', x.data.token)
        localStorage.setItem('user', JSON.stringify(x.data.user))
        window.location.href = '/login'
      }
    }

  }
  const [state, setstate] = useState(() => (
    {
      user: {
        first_name: null,
        last_name: "",
        username: null, //email
        password: null,
        password_confirmation: null
      },
      telefono: null,
      numero_documento: null,
      pais: null,
      ciudad: null
    }

  )


  );
  return (
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
      <div className="container-fluid overflow-auto" style={{ height: '100vh', margin: '0', padding: '3%', background: '#dcdbdb', minHeight: '300px' }}>
        <div
          className="shadow-lg row"
          style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
          <div className="col-6 col-md-6 align-self-center" style={{ padding: '5%' }}>
            <p className="text-center fs-1 "> Registrate </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-start" >
                <div className='row row-cols-2'>
                  <div className='col'>
                    <input
                      type="text"
                      className="form-control"
                      id="input_name"
                      placeholder="Nombre completo"
                      name="name"
                      onChange={(e) => { setstate({ ...state, user: { ...state.user, first_name: e.target.value } }) }}
                    />
                    <input
                      type="email"
                      className="form-control mt-2"
                      id="input_email"
                      placeholder="Correo electronico"
                      name="username"
                      onChange={(e) => setstate({ ...state, user: { ...state.user, username: e.target.value } })}
                    />

                    <input
                      type="password"
                      className="form-control mt-2"
                      id="input_password"
                      placeholder="Contraseña"
                      name="password"
                      onChange={(e) => setstate({ ...state, user: { ...state.user, password: e.target.value } })}
                    />

                    <input
                      type="password"
                      className="form-control mt-2"
                      id="input_passwordagain"
                      placeholder="Verifica tu contraseña"
                      name="password"
                      onChange={(e) => setstate({ ...state, user: { ...state.user, password_confirmation: e.target.value } })}
                    />
                  </div>
                  <div className='col'>
                    <input
                      type="text"
                      className="form-control"
                      id="input_dni"
                      placeholder="DNI"
                      name="dni"
                      onChange={(e) => setstate({ ...state, numero_documento: e.target.value })}
                    />
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="input_country"
                      placeholder="Pais"
                      name="country"
                      onChange={(e) => setstate({ ...state, pais: e.target.value })}
                    />
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="input_city"
                      placeholder="Ciudad"
                      name="city"
                      onChange={(e) => setstate({ ...state, ciudad: e.target.value })}
                    />
                    <input
                      type="phone"
                      className="form-control mt-2"
                      id="input_phone"
                      placeholder="Telefono"
                      name="phone"
                      onChange={(e) => setstate({ ...state, telefono: e.target.value })}
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
              <Link to="/">
                <img
                  alt="DH logo"
                  src={AppLogo}
<<<<<<< HEAD
                  style={{ height: '40%', width: "auto"/*, maxWidth: "300px"*/ }}
                  className="img-fluid"
                  />
                </Link>
=======
                  style={{ height: '40%', width: "auto" }}
                />
              </Link>
>>>>>>> 78a466d8e82ecdcb32893b6b11d2f13e9d652238
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp