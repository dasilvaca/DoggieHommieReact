import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cors from 'cors'
import LayOut from '../Layout/LayOut'
import AddBankAccounts from '../components/AddBankAccounts'

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
            <div className="container-fluid overflow-auto" style={{ height: 'auto', margin: '0', padding: '3%', background: 'linear-gradient(180deg, #44CCCC 0%, rgba(76, 44, 206, 0.93) 100%)', minHeight: '300px' }}>
                <div
                className="shadow-lg row d-block"
                style={{ height: 'auto', minHeight: '100%', borderRadius: '20px', backgroundColor: 'white' }}
                >
                    <p className='text-center fs-1 fw-bold p-5'> 
                        Publica Algo
                    </p>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div style={{padding:"1%"}}><label for="titulo" class="form-label mb-1">Titulo</label>
                        <input
                        type="text"
                        className="form-control mb-3"
                        id="post-titulo"
                        aria-describedby="dni_help"
                        placeholder="Resume tu historia"
                        name="post-titulo"
                        // onChange={(e) => setstate({ ...state, username: e.target.value })}
                        />

                        <label for="Descripcion" class="form-label mb-1">Descripción</label>
                        <textarea
                        className="form-control mb-3"
                        id="post-descripcion"
                        rows= "4"
                        aria-describedby="dni_help"
                        placeholder="Añade tu historia aqui"
                        name="post-descripcion"
                        // onChange={(e) => setstate({ ...state, username: e.target.value })}
                        />

                        <label for="post-foto" class="form-label mb-1">Añade una foto</label>
                        <input
                        type="file"
                        accept='image/*'
                        className="form-control mb-3"
                        id="post-foto"
                        aria-describedby="dni_help"
                        name="post-foto"
                        // onChange={(e) => setstate({ ...state, username: e.target.value })}
                        />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            
                                
                            <label className="form-check-label" for="flexCheckDefault">
                                Desea recibir donaciones
                            </label>
                        </div></div>
                        <div style={{padding : "2%"}}><AddBankAccounts></AddBankAccounts></div>
                        <input
                            type="submit"
                            className="btn-primary bton"
                            value="Publicar"
                            style={{marginBottom : "1%"}}
                        />
                    </form>
                </div>
            </div>
            </div>
        </LayOut>
    </>
  );
}

export default NewPost