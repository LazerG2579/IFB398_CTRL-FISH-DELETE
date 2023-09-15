import React from 'react';
import ContactForm from "../components/contact_form";

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <ContactForm /> {ContactForm}
        </div>
    );
};

export default ContactUs;