import React from 'react'
import Head from '../components/Head'

export default function Home() {
    return (
        <div>
            <Head />
            <div>
                <h1>Welcome to Travel Bliss</h1>
                <p>Your one stop shop for all things travel!</p>
            </div>
            <div className='process-container'>
                <div className='process'>
                    <div className='content'>
                        <img src="../assets/computerTravel.jpg"></img>
                        <div className='text-content'>
                            <h3>Leave the planning to us!</h3>
                            <p>Welcome to Travel Bliss, where planning your dream vacation is as easy as a few clicks away. Simply enter your desired destination, travel dates, and preferences, and let us handle the rest. Our advanced algorithms will craft personalized itineraries tailored to your interests, budget, and timeframe. From flights to accommodations, activities to dining options, we've got you covered. Explore our comprehensive features, including real-time flight tracking, destination guides, and 24/7 customer support, ensuring a stress-free and unforgettable travel experience. Welcome to your journey of blissful adventures with Travel Bliss.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
