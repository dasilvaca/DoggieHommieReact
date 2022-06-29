import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react'
import BanksAccounts from './bankAccountDescriptions';
import axios from 'axios'


const AddBankAccounts = () => {



    const [bankAccounts, setBankAccounts] = useState([]);

    const getBankAccounts = async () => {
        // actualArray = []
        const { data } = await axios.get(
            // 'http://127.0.0.1:8000/bankAccount/' + localStorage.getItem("user") + '?limit=100'
            'https://backdoggiehommie.herokuapp.com/bankAccount/' + localStorage.getItem("user") + '?limit=100'
        )

        setBankAccounts(data.results);
    };

    useEffect(() => {
        getBankAccounts();
    }, []);

    const [newBankAccount, setNewBankAccounts] = useState(() => (
        {
            "bank_name": null,
            "account_number": "",
            "bank_type": "",
            "user": parseInt(localStorage.getItem("user"))
        }

    )
    );
    return (
        <div className='row row-cols-2'>
            <div className='col col-rows-3'>
                <div className='row'>
                    <strong><h1>Cuentas asociadas</h1></strong>
                </div>

                <BanksAccounts bankAccounts={bankAccounts} />

            </div>
            <div className='col col-rows-5'>
                <div className='row'>
                    <h1><strong>Añadir cuenta</strong></h1>
                </div>
                <div className='row'>
                    {/* Deploy a dropdown list*/}

                    <select
                        className='form-control'
                        style={{
                            width: "60%",
                            margin: "0 0 16px 0"
                        }}
                        onChange={(e) => { setNewBankAccounts({ ...newBankAccount, bank_name: e.target.value }) }}
                    >
                        <option defaultValue value=""> --Seleccione un banco-- </option>
                        <option >Nequi</option>
                        <option >Daviplata</option>
                        <option >Paypal</option>
                    </select>
                </div>

                <div className='row'>
                    {/* Deploy a dropdown list*/}
                    <select
                        className='form-control'
                        style={{
                            width: "60%",
                            margin: "0 0 16px 0"
                        }}
                        onChange={(e) => { setNewBankAccounts({ ...newBankAccount, bank_type: e.target.value }) }}
                    >
                        <option defaultValue="" value=""> --Tipo de cuenta-- </option>
                        <option value="Ahorros">Ahorros</option>
                        <option value="Corriente">Corriente</option>
                        <option value="No Aplica">No Aplica</option>
                    </select>

                </div>
                <div className='row'>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="account-number"
                        placeholder="Numero de cuenta"
                        style={{ width: "60%" }}
                        onChange={(e) => { setNewBankAccounts({ ...newBankAccount, account_number: e.target.value }) }}
                    />
                </div>
                <div className='row'>
                    <input
                        type="button"
                        className="btn-primary bton"
                        value="Añadir"
                        style={{ width: "60%" }}
                        onClick={(e) => {
                            if (!(newBankAccount.bank_name && newBankAccount.account_number && newBankAccount.bank_type)) {
                                window.alert("Todos los campos en el formulario son obligatorios")
                            }
                            else {
                                // axios.post('http://127.0.0.1:8000/bankAccount/' + localStorage.getItem("user"), newBankAccount)
                                axios.post('https://backdoggiehommie.herokuapp.com/bankAccount/' + localStorage.getItem("user"), newBankAccount)
                                // window.location.reload(false);
                                getBankAccounts();
                            }

                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AddBankAccounts;