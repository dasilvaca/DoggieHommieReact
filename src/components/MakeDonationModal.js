import React, { useState, useEffect } from "react"
import axios from "axios"

const DonationModal = ({
    title,
    description,
    username_str,
    post_config_id,
    user_post_id
}) => {

    const [bankAccounts, setBankAccounts] = useState([]);


    const getBankAccounts = async () => {
        // actualArray = []
        const { data } = await axios.get(
            'http://127.0.0.1:8000/bankAccount/' +  /*String(user_post_id)*/ localStorage.getItem("user") + '?limit=100'
        )

        setBankAccounts(data.results);
    };

    useEffect(() => {
        getBankAccounts();
    }, []);


    return (
        <>

            {/* {user_post_id} */}

            <div className="modal fade" id={"exampleModal" + post_config_id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{"Donation for " + title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p> You will make a donation to {username_str}, at the post: </p>
                            <p> {description} </p>
                            <div style={{ display: "flex", verticalAlign: "center" }}>
                                <p> Seleccione un banco: </p>

                                <select
                                    className='form-control'
                                    style={{
                                        width: "60%",
                                        margin: "0 0 16px 0"
                                    }}
                                // onChange={(e) => {setNewBankAccounts({...newBankAccount, bank_name: e.target.value})}}
                                >
                                    <option defaultValue value=""> --Seleccione un banco-- </option>
                                    {bankAccounts.map((bankAccount) => (
                                        <option key={bankAccount.id} value={bankAccount.bank_name}> {bankAccount.bank_name} </option>
                                    ))}
                                    {/* <option >Nequi</option>
                        <option >Daviplata</option>
                        <option >Paypal</option> */}
                                </select>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href={"https://paypal.me/DSDonations"}>

                                <button type="button" className="btn btn-primary"


                                >Donate</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonationModal