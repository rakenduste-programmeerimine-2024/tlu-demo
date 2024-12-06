"use client"; // Ensures this component runs on the client side

import React from "react";

const Banner: React.FC = () => {
  return (
    <div >
      <img
        src="/admissions.jpg" // Path to the image
        alt="Banner Image"
      />
      <br></br>
      <br></br>
      <h5 className="justify-center flex text-5xl">Mis on sinu eesmärk? Tallinna Ülikooli astumine on oluline verstapost sinu teekonnal. Teadmised jäävad sinuga kogu eluks. Tule õpi Tallinna Ülikoolis!</h5>
      <div>


      </div>

    </div>
  );
};

export default Banner;
