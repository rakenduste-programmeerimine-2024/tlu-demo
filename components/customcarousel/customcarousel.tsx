"use client"

import React, { useState } from "react"

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
    <div className="relative w-full max-w-[600px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="min-w-full h-auto object-contain"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 hover:bg-opacity-70"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10 hover:bg-opacity-70"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 relative">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 
                ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
