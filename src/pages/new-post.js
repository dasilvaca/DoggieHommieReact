import React, { useState } from 'react'
import AppLogo from '../assets/img/4.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cors from 'cors'
import LayOut from '../Layout/LayOut'
import AddBankAccounts from '../components/AddBankAccounts'

const NewPost = () => {
    class bankAccountClass {

        constructor(id, bank_name, account_number, user, bank_type) {
            this.id = id,
                this.bank_name = bank_name,
                this.account_number = account_number,
                this.user = user,
                this.bank_type = bank_type
        }
    }

    const [post_req, setPost] = useState(() => (
        {
            post:
            {
                title: '', 
                description: '',
                date: '', 
                grade: 0, 
                isDonation: false,
                state: null,
                number_banned: null,
                user: parseInt(localStorage.getItem("user"))
                },
                bankAccounts: []
            }))

    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log('estado', state)
        var x = await axios.post('http://localhost:8000/post/', post_req)//, fetch)

    
        if (x.status === 200) {
            window.alert("Post creado exitosamente")
            window.location.href = '/'
          }else{
            window.alert("Error. Verifica los datos")
          }
        console.log('data', x)
    }

    const [receiveDonations, toggleDonations] = useState(() => (false))

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
                                <div style={{ padding: "1%" }}><label form="titulo" className="form-label mb-1">Titulo</label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="post-titulo"
                                        aria-describedby="dni_help"
                                        placeholder="Resume tu historia"
                                        name="post-titulo"
                                        onChange={(e) => setPost({ ...post_req, post: { ...post_req.post, title: e.target.value } })}
                                    />

                                    <label form="Descripcion" className="form-label mb-1">Descripci??n</label>
                                    <textarea
                                        className="form-control mb-3"
                                        id="post-descripcion"
                                        rows="4"
                                        aria-describedby="dni_help"
                                        placeholder="A??ade tu historia aqui"
                                        name="post-descripcion"
                                        onChange={(e) => setPost({ ...post_req, post: { ...post_req.post, description: e.target.value } })}
                                    />

                                    <label form="post-foto" className="form-label mb-1">A??ade una foto</label>
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
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                            // checked={receiveDonations}
                                            onClick = {() => toggleDonations(!receiveDonations) && console.log(receiveDonations)}
                                            onChange={(e) => setPost({ ...post_req, post: { ...post_req.post, isDonation: e.target.checked } })}
                                        />


                                        <label className="form-check-label" form="flexCheckDefault">
                                            Desea recibir donaciones
                                        </label>
                                    </div></div>
                                <div style={{ padding: "2%" }}>
                                    {
                                        receiveDonations ? (<AddBankAccounts></AddBankAccounts>) : (<></>)
                                    }

                                </div>
                                <input
                                    type="submit"
                                    className="btn-primary bton"
                                    value="Publicar"
                                    style={{ marginBottom: "1%" }}
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