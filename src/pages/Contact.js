import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Have a question or feedback? We'd love to hear from you! Reach out to us via email, phone, or social media.</p>
            <div className='contact-container'>
                <div className='contact-info'>
                    <div>
                        <h2>Email</h2>
                        <p>Travelbliss@gmail.com</p>
                    </div>
                    <div>
                        <h2>Phone</h2>
                        <p>1-800-TRAVEL-BL</p>
                    </div>
                    <div>
                        <h2>Address</h2>
                        <p>1234 Blissful Lane, Travel City, TR 12345</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form className='form-submit'>
                        <label for="name">Name:</label><br></br>
                        <input type="text" id="name" name="name"></input><br></br>
                        <label for="email">Email:</label><br></br>
                        <input type="email" id="email" name="email"></input><br></br>
                        <label for="message">Message:</label><br></br>
                        <textarea id="message" name="message"></textarea><br></br>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <div className='space'></div>
        </div>
    )
}
