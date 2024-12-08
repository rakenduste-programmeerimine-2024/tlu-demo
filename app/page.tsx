import React from "react"
import CustomCarousel from "@/components/customcarousel/customcarousel"

export default function App() {

	const images = [
		"/logos/TLU-uldlogo.png",
		"admissions.jpg"
	]
	
	return (
		<div><CustomCarousel images={images} /></div>
	  
  )
}
