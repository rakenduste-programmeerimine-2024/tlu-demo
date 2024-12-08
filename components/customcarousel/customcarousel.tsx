"use client"

import React, { useState } from "react"
import styles from "./Carousel.module.css"

interface CarouselProps {
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.carousel}>
      {/* Image Wrapper */}
      <div
        className={styles.carouselImages}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={styles.image}
          />
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            className={styles.arrowLeft}
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <button
            className={styles.arrowRight}
            onClick={handleNext}
          >
            &#8594;
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border border-gray-300 dark:border-white cursor-pointer transition-all duration-300 
            ${index === currentIndex
                  ? "bg-black dark:black"
                  : "bg-gray-300 dark:bg-white"
                }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
