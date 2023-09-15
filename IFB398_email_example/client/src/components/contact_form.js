import React, { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const [selectedOption, setSelectedOption] = useState("individual"); // Default selection

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
            selectedOption: selectedOption, // Include the selected option in the request
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <div>
                <label>Select Purpose:</label>
                <select id="purpose" value={selectedOption} onChange={handleOptionChange}>
                    <option value="individual">I am an Individual with an enquiry</option>
                    <option value="business">I am emailing on behalf of a business/organization</option>
                    <option value="volunteer">I am interested in volunteering opportunities</option>
                </select>
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default ContactForm;