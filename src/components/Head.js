import { useState, useEffect } from "react";

export default function Head() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ["../assets/birdEyeOcean.jpg", "../assets/familyInAirport.jpg", "../assets/girlLookAtMap.jpg"];
    
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(timer); // Clear interval on component unmount
    }, [currentSlide]);

    return (
        <div className="slideshow-container">
            <div className="slide fade">
                <img src={images[currentSlide]}></img>
            </div>
            <button className="next" onClick={nextSlide}>&#10095;</button>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
        </div>
    );
}