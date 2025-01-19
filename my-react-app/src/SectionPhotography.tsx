import { useState } from 'react'
import './SectionPhotography.css'

const SectionPhotography = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
        '/images/photography-portfolio/Daikoku-Toyota-Chaser.jpg',
        '/images/photography-portfolio/Ueteliberg-Kindergarten.jpg',
        '/images/photography-portfolio/MoriArtMuseum-TokyoTower.jpg'
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="slideshow-container">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    alt={`Slide ${index + 1}`}
                />
            ))}
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    )
}

export default SectionPhotography