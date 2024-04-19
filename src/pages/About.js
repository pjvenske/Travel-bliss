import React from 'react'

export default function About() {
    return (
        <div class="about-container">
        <h2>Our Story</h2>
        <p>At Travel Bliss, we believe that travel has the power to transform lives. Our journey began with a simple idea - to make the world more accessible, one adventure at a time.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to inspire and empower travelers to explore the world with confidence. We strive to provide unforgettable experiences that foster cultural understanding, environmental awareness, and personal growth.</p>

        <h2>Why Choose Us?</h2>
        <p>With Travel Bliss, you're not just booking a trip; you're embarking on a journey of discovery. Here's why travelers trust us:</p>
        <ul className='reasons'>
            <li>Expertise: Our team of travel enthusiasts has firsthand knowledge of destinations around the globe.</li>
            <li>Personalized Service: We tailor each itinerary to suit your preferences, ensuring a truly unique experience.</li>
            <li>Sustainability: We are committed to responsible travel practices that minimize our environmental impact and support local communities.</li>
            <li>24/7 Support: From the moment you book until you return home, our dedicated support team is here to assist you every step of the way.</li>
        </ul>
        <div className='team'>
            <h2>Meet Our Team</h2>
            <p>Get to know the passionate individuals behind Travel Bliss:</p>
            <ul className='members'>
                <li>
                    <div className='member-info'>
                        <img src="../assets/emily.jpg" alt="Emily Johnson"></img>
                        <p>Emily Johnson - Founder & CEO</p>
                    </div>
                </li>
                <li>
                    <div className='member-info'>
                        <img src="../assets/micheal.jpg" alt="Michael Rodriguez"></img>
                        <p>Michael Rodriguez - Head of Operations</p>
                    </div>
                </li>
                <li>
                    <div className='member-info'>
                        <img src="../assets/sarah.jpg" alt="Sarah Thompson"></img>
                        <p>Sarah Thompson - Customer Experience Manager</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    )
}

