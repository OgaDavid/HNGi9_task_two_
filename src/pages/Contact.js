import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer'

const Contact = () => {

    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [valid, setValid] = useState(true);

    const name = 'David';

    return ( 
        <>
            <div className="contact-section">
                <div className="contact-heading">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <form>
                    <div className="name">
                        <div className="field">
                            <label htmlFor="first_name">First name</label>
                            <input value={fName} required onChange={(e) => setFName(e.target.value)} id='first_name' type="text" placeholder='Enter your first name.' />
                            <span>Invalid First name.</span>
                        </div>
                        <div className="field l-name">
                            <label htmlFor="last_name">Last name</label>
                            <input value={lName} required onChange={(e) => setLName(e.target.value)} id='last_name' type="text" placeholder='Enter your Last name.'/>
                            <span>Invalid Last name.</span>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input value={email} required onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder='Enter a valid Email.'/>
                    </div>
                    <div className="field message">
                        <label htmlFor="message">Message</label>
                        <textarea value={message} required onChange={(e) => setMessage(e.target.value)} placeholder="Send me a message and i'll reply as soon as possible..." name="message" id="message"></textarea>
                    </div>
                    <div className="field radio">
                        <input required type="radio" />
                        <label htmlFor="checkbox">You agree to providing your data to {name} who may contact you.</label>
                    </div>
                    <button className='form-btn' id='btn__submit'>Send Message</button>
                </form>
                <Footer />
            </div>
        </>
     );
}
 
export default Contact;