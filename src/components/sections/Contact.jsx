import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch('https://formspree.io/f/your-form-id', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        } else {
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="row">
                <h2>Get in Touch</h2>
                <p className="little-description">
                    1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111
                </p>
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col span_1_of_2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name *"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col span_1_of_2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email *"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message here..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="row">
                        <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-submit"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

