import React from 'react';
import FormData from '../Data/FormData';
import Form from '../utils/Form';
import Footer from '../components/Footer'

const Contact = () => {

    function handleSubmit(event) {
        event.preventdefault();
    }

    return ( 
        <>
            <div className="contact-section">
                <div className="contact-heading">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <form onSubmit={handleSubmit} action="submit">
                    <div className="field">
                        <label htmlFor="first_name">First name</label>
                        <input id='first_name' type="text" placeholder='Enter your first name.' />
                    </div>
                    <div className="field">
                        <label htmlFor="last_name">Last name</label>
                        <input id='last_name' type="text" placeholder='Enter your Last name.'/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input id='email' type="text" placeholder='Enter a valid Email.'/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Send me a message and i'll reply as soon as possible..." name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit' id='btn__submit'>Send Message</button>
                </form>
                <Footer />
            </div>
        </>
     );
}
 
export default Contact;
<>
    <h1>Contacts</h1>
</>