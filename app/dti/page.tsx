import React from "react"
import CustomCarousel from "@/components/customcarousel/customcarousel"

export default function App() {
  const images = [
    "/logos/Digitehnoloogiate instituut-logo-eng.png",
    "IMG_2977.JPG",
  ]

  return (
    <div>
      <CustomCarousel images={images} />
    </div>
  )
}
