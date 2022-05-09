// import React from 'react'
import React, { useState } from 'react'
import LayOut from '../Layout/LayOut'
import ProfilePic from '../assets/img/4.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Profile = () => {
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
        else {
          delete state.user.password_confirmation;
          var x = await axios.post('http://localhost:8000/users', state);
          console.log('data', x)
          console.log('data', state)
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
    <LayOut>
    <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px'}}>
    <div className="container-fluid overflow-auto" style={{ height: '86vh', margin: '0', padding: '3%', background: 'linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)', minHeight: '300px' }}>
        <div
        className="shadow-lg row d-block"
        style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
        >
            <div className='col col-rows-2'>
                <div className='row row-cols-2'>
                    <div className='col-3'>
                        <img src={ProfilePic} className="ProfilePic" style={{size:"50%"}}/>
                        <h2 className='p-3'> Nombre de Usuario</h2>
                        <h3 className='p-3'> Ciudad</h3>
                    </div>
                    <div className='col-9 p-4' >
                      <p className='fs-1 fw-bold p-5'> Edita tu perfil</p>


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
                            </div>
                            <div className='col'>
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
                            value="Actualizar mis datos"
                            />
                        </div>
                      </form>


                    </div>
                </div>
                <div className='row'></div>
            </div>
        </div>
    </div>
    </div>
</LayOut>
  )
}
