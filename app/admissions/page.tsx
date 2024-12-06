"use client"; // Ensures this component runs on the client side

import React from "react";

const programs = [
  {
    title: "Bakalaureuseõpe",
    description: "Omanda eriala või õpi midagi uut. Õpe täiskoormusel 3 aastat.",

  },
  {
    title: "Magistriõpe",
    description: "Õpingud spetsialiseerunud teemal. Õpe täiskoormusel 2 aastat. ",

  },
  {
    title: "Doktoriõpe",
    description: "Võimalus arendada teaduskarjääri. Õpe täiskoormusel 4 aastat ",

  },
];
const Admissions: React.FC = () => {
  return (
    <div >
      <img
        src="/admissions.jpg" 
        alt="Banner Image"
      />
      <br></br>
      <br></br>
      <h1 className="justify-center flex text-5xl">Mis on sinu eesmärk? Tallinna Ülikooli astumine on oluline verstapost sinu teekonnal. Teadmised jäävad sinuga kogu eluks. Tule õpi Tallinna Ülikoolis!</h1>
    <div>
    <section className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
          >
            <div className="p-4">
              <h3 className="text-2xl text-red-700 font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
              <a href="#" className="boreder text-red-500 ">Vaata erialasid</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
        <hr></hr>
        <br></br>
        <br></br>
        <h5 className="justify-center flex text-2xl">Tutvu Tallinna Ülikooli õppekavadega, et teha teadlik ja sinu jaoks parim valik!</h5>
        <br></br>
        <br></br>
        <li>Siin omandad rahvusvaheliselt tunnustatud hariduse. Oleme akrediteeritud ja kõik meie õppekavad läbivad regulaarselt kvaliteedihindamisi.</li>
        <li>Saad hariduse ülikoolis, mis kuulub 5% maailma parimate ülikoolide hulka. Üks juhtivamaid kõrgkoolide edetabelite koostajaid QS World Ranking hindab meie haridust konkurentsivõimeliseks. </li>
        <li>Siin on sul võimalus jätkata sajandipikkust haridusinnovatsiooni ja õppida uue ajastu õpetajaks.</li>
        <li>Siit saad vajalikud teadmised ja kasulikud oskused. Meil on ainulaadsed erialad ja tänapäevane õppekeskkond.</li>
    </div>
    
  );
};

export default Admissions;
