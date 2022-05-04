import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cors from 'cors'
import LayOut from '../Layout/LayOut'

const NewPost = () => {

    const [state, setstate] = useState(() => ({ username: '', password: '' }));

    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log('estado', state)
        var x = await axios.post('http://localhost:8000/login', state)//, fetch)
        console.log('data', x)
    }

  return (
    <>
        <LayOut>
            <div className="container-fluid overflow-auto" style={{ margin: '0px', padding: '0px' }}>
            <div className="container-fluid overflow-auto" style={{ height: '93vh', margin: '0', padding: '3%', background: 'linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)', minHeight: '300px' }}>
                <div
                className="shadow-lg row"
                style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
                >
                    <div className="col align-self-center" style={{ padding: '5%' }}>
                        Publica Algo
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group text-start" >
                            {/* <p className="alert alert-danger">
                            Your username and password didn't match. Please try again.
                            </p> */}
                            <label for="titulo" class="form-label">Titulo</label>
                            <input
                            type="text"
                            className="form-control"
                            id="post-titulo"
                            aria-describedby="dni_help"
                            placeholder="Resume tu historia"
                            name="post-titulo"
                            // onChange={(e) => setstate({ ...state, username: e.target.value })}
                            />

                            <label for="Descripcion" class="form-label">Descripción</label>
                            <textarea
                            className="form-control"
                            id="post-descripcion"
                            rows= "4"
                            aria-describedby="dni_help"
                            placeholder="Añade tu historia aqui"
                            name="post-descripcion"
                            // onChange={(e) => setstate({ ...state, username: e.target.value })}
                            />

                            <label for="post-foto" class="form-label">Añade una foto</label>
                            <input
                            type="file"
                            className="form-control"
                            id="post-foto"
                            aria-describedby="dni_help"
                            name="post-foto"
                            // onChange={(e) => setstate({ ...state, username: e.target.value })}
                            />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </LayOut>
    </>
  );
}

export default NewPost