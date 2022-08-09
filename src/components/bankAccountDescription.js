import React from "react"
import { useState } from "react"
import axios from "axios"


const BankAccount = ({ bank_name, account_number, bank_type}) => {

    return (
        <div className='row row-cols-3'>
            <div className='row'>
                <strong><p>{bank_name}</p></strong>
            </div>
            <div className='row'>
                <p>{bank_type}</p>
            </div>
            <div className='row'>
                <p>{account_number}</p>
            </div>
        </div>
    )
}

export default BankAccount
