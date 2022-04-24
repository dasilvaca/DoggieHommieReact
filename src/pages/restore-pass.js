import React from 'react'
import AppLogo from '../assets/img/4.png'

const RestorePass = () => {
  return (
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
      <div className="container-fluid overflow-auto" style={{ height: '100vh', margin: '0', padding: '3%', background: '#dcdbdb', minHeight: '300px' }}>
        <div
          className="shadow-lg row"
          style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
          <div className="col-6 col-md-6 align-self-center" style={{ padding: '5%' }}>
            <p className="text-center fs-1 "> Olvide mi contraseña </p>
            <form>
              <div className="form-group text-start" >
                <input
                type="email"
                className="form-control mt-2"
                id="input_email"
                placeholder="Correo electronico"
                name="username"
                />
                <input
                type="submit"
                className="btn-primary bton"
                value="Recuperar"
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

export default RestorePass