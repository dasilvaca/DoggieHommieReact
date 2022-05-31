import React from 'react'

const AddBankAccounts = () => {
  return (
    <div className='row row-cols-2'>
        <div className='col col-rows-3'>
            <div className='row'>
                <strong><h1>Cuentas asociadas</h1></strong>
            </div>
            <div className='row row-cols-3'>
                <div className='col col-rows-3'>
                    <div className='row'>
                        <strong><p>Nequi</p></strong>
                    </div>
                    <div className='row'>
                        <p>Cuenta de ahorros</p>
                    </div>
                    <div className='row'>
                        <p>389276891</p>
                    </div>
                </div>
                <div className='col col-rows-3'>
                    <div className='row'>
                        <strong><p>Daviplata</p></strong>
                    </div>
                    <div className='row'>
                        <p>Cuenta de ahorros</p>
                    </div>
                    <div className='row'>
                        <p>337862987</p>
                    </div>
                </div>
                <div className='col col-rows-3'></div>

            </div>
            <div className='row row-cols-3'>
                <div className='col col-rows-3'>
                    <div className='row'>
                        <strong><p>Paypal</p></strong>
                    </div>
                    <div className='row'>
                        <p>Cuenta de ahorros</p>
                    </div>
                    <div className='row'>
                        <p>98729909</p>
                    </div>
                </div>
                <div className='col col-rows-3'></div>
                <div className='col col-rows-3'></div>
            </div>
        </div>
        <div className='col col-rows-5'>
            <div className='row'>
                <h1><strong>Añadir cuenta</strong></h1>
            </div>
            <div className='row'>
                <input
                    type="text"
                    className="form-control mb-3"
                    id="bank"
                    placeholder="Banco"
                    style={{width:"60%"}}
                />
            </div>
            <div className='row'>
            <input
                    type="text"
                    className="form-control mb-3"
                    id="account-type"
                    placeholder="Tipo de cuenta"
                    style={{width:"60%"}}
                />
            </div>
            <div className='row'>
            <input
                    type="text"
                    className="form-control mb-3"
                    id="account-number"
                    placeholder="Numero de cuenta"
                    style={{width:"60%"}}
                />
            </div>
            <div className='row'>
                <input
                    type="submit"
                    className="btn-primary bton"
                    value="Añadir"
                    style={{width : "50%"}}
                />
            </div>
        </div>
    </div>
  )
}

export default AddBankAccounts;