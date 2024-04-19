import { useState } from 'react';
import BlogDetails from '../components/BlogDetails';

export default function Blog() {
    
    const [articleOpen, setArticle] = useState(false)

     /* this function toggles the booking detail component */
     const toggleArticle = (article) => {
        setSelectedArticle(article);
        setArticle(!articleOpen);
    }

    const [selectedArticle, setSelectedArticle] = useState({})

    let data = [
        {
            title: "Indonesia's Waterways",
            description: "Exploring Indonesia's Waterways: Kayaking Adventures in the Archipelago",
            img: './assets/boatOnRiver.jpg',
            body: "Indonesia, with its stunning archipelago comprising over 17,000 islands, is a paradise for outdoor enthusiasts. While its pristine beaches and lush jungles often steal the spotlight, the country's rivers offer another captivating dimension for adventure seekers. Kayaking in Indonesia is not just about navigating through water; it's about immersing yourself in the heart of nature, discovering hidden gems, and experiencing the rich culture that flows along these waterways.",
            id: 1
        },
        {
            title: "Hong Kong's Streets",
            description: "Discovering the Vibrant Tapestry of Hong Kong's Streets",
            img: './assets/girlInAsia.jpg',
            body: "Hong Kong, a bustling metropolis where East meets West, is a city of contrasts and surprises waiting to be uncovered around every corner. From the narrow alleys of its historic neighborhoods to the towering skyscrapers of its modern districts, exploring the streets of Hong Kong is an adventure that promises to captivate all your senses.",
            id: 2
        },
        {
            title: "Bahamas Oceans",
            description: "Dive into Paradise: Snorkeling Adventures in the Bahamas",
            img: './assets/girlFeedFish.jpg',
            body: "Nestled in the crystal-clear waters of the Caribbean, the Bahamas is a snorkeler's paradise, boasting some of the world's most stunning coral reefs and marine life. From vibrant coral gardens teeming with tropical fish to exhilarating encounters with majestic marine creatures, snorkeling in the Bahamas offers an unforgettable underwater experience for adventurers of all ages.",
            id: 3
        },
        {
            title: "Morocco's Deserts",
            description: "Journey into the Heart of Morocco's Deserts: A Camel Trekking Adventure",
            img: './assets/girlOverCanyon.jpg',
            body: "Morocco, a land of ancient traditions and breathtaking landscapes, is home to some of the world's most captivating deserts. From the rolling dunes of the Sahara to the rugged canyons of the Atlas Mountains, the country's desert regions offer a unique opportunity to experience the magic of the desert and the rich Berber culture that thrives in these harsh environments.",
            id: 4
        },
        {
            title: "Japan's Mountains",
            description: "Hiking the Sacred Trails of Japan's Mountains",
            img: './assets/japanMountain.jpg',
            body: "Japan, a country renowned for its natural beauty and spiritual heritage, is a hiker's paradise, with a network of ancient pilgrimage trails crisscrossing its rugged mountains and verdant valleys. From the snow-capped peaks of the Japan Alps to the lush forests of Yakushima Island, hiking in Japan offers a unique opportunity to explore the country's diverse landscapes and immerse yourself in its rich cultural traditions.",
            id: 5
        },
        {
            title: "Hot Air Ballooning in Cappadocia",
            description: "Soaring Over Fairy Chimneys: Hot Air Ballooning in Cappadocia",
            img: './assets/hotAirBalloons.jpg',
            body: "Cappadocia, a region in central Turkey known for its otherworldly landscapes and ancient cave dwellings, is one of the world's premier destinations for hot air ballooning. Drifting high above the surreal rock formations and fairy chimneys that dot the landscape, a hot air balloon ride in Cappadocia offers a bird's-eye view of this enchanting region and an unforgettable experience that will stay with you long after you touch down.",
            id: 6
        }
    ]
    return (
        <div>
            {articleOpen && ( 
                <>
                    <div className="article-close" onClick={() => toggleArticle({})}>Close</div>
                    <BlogDetails selectedArticle={selectedArticle} />
                </>
            )}
            <div>
                <h1>Where to Next?</h1>
                <div className='article-container'>
                {data.map((article) => {
                    return (
                        <div className='article' onClick={() => toggleArticle(article)}>
                            <img className='article-img' src={article.img} alt='article' />
                            <p className='article-title'>{article.title}</p>
                            <p className='article-description'>{article.description}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}