import React, { useState } from "react";
import axios from 'axios';
import './Index.css';
import Swal from 'sweetalert2'

function Contact() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const submitSMS = () => {
        console.log(name,phone);
        let sms = "Wagwan";
        axios.post('https://fibsms-9518.twil.io/sms', {
            Body: sms,
            to: [phone]
        }).then(message => {
            console.log(message)
            if (message.data.status === "success") {
                Swal.fire(
                    'Message Sent!',
                    'Successfully sent the message!',
                    'success'
                );
            }
        }).catch(err => {
            console.log(err)
            Swal.fire(
                'Error!',
                err,
                'error'
            )
        })
    }

    return (
        <section className="contact-section">
            <h1 style={{color: "red"}} className="title is-3 mb-4">Signup for the Latest Info!</h1>
            <div className="columns">
                <div className="column is-6">
                    <form>
                        <div class="field">
                            <label class="label" style={{marginRight: "245px", fontSize: "18px"}}>Name:</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="name" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                        </div>
                        <br></br>
                        <div class="field">
                            <label class="label" style={{marginRight: "170px", fontSize: "18px"}}>Phone Number:</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="phone number" onChange={(e) => { setPhone(e.target.value) }} />
                            </div>
                        </div>
                        <br></br>
                    </form>
                    <br></br>
                    <button style={{padding: "10px", fontSize: "14px"}} class="button is-link" onClick={submitSMS}>Submit</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;