import React from "react"
import { useState } from "react"
import BankAccount from "../components/bankAccountDescription"

const BanksAccounts = ({ bankAccounts }) => {

    return (
        <div className='col col-rows-3'>
            {bankAccounts.length > 0 ? (
                bankAccounts.map((bankAccount) => (

                    <BankAccount 
                    bank_name={bankAccount.bank_name}
                    account_number={bankAccount.account_number} 
                    bank_type={bankAccount.bank_type} 
                    key={bankAccount.id}
                    />
                ))
            ) : (
                <>
                <p>Por el momento no cuenta con cuentas bancarias registradas</p>
                </>

            )}

        </div>
    )
}

export default BanksAccounts