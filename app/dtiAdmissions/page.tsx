"use client"; // Ensures this component runs on the client side

import React from "react";

const programs = [
  {
    title: "Bakalaureuseõpe",
    description: "Omanda eriala või õpi midagi uut. Õpe täiskoormusel 3 aastat.",
    link:"Vaata erialasid"
  },
  {
    title: "Magistriõpe",
    description: "Õpingud spetsialiseerunud teemal. Õpe täiskoormusel 2 aastat. ",
    link:"Vaata erialasid"
  },
  {
    title: "Doktoriõpe",
    description: "Võimalus arendada teaduskarjääri. Õpe täiskoormusel 4 aastat ",
    link:"Vaata erialasid"
  },
  {
    title: "Täiendusõpe",
    description: "Paindlik õpe, uued teadmised, võimalus lõpetada pooleli õpingud.",
    link:"Tutvu võimalustega"
  },
];
const Admissions: React.FC = () => {
  return (
    <div >
      <img
        src="/DTIA.jpeg" 
        alt="Banner Image"
        className="border-green"
      />
      <br></br>
      <br></br>
      <h1 className="justify-center flex text-5xl">Kui Sinu eesmärk on elada targalt, tule Tallinna Ülikooli</h1>
      <br></br>
      <p>Vastuvõtt  magistriõppesse toimub 1. maist 1. juulini ja bakalaureuseõppesse 14. juunist 1. juulini. Tutvu juba varakult digitehnoloogiate instituudi  õppekavadega, et teha sisseastumisel teadlik ja Sinu jaoks parim valik! Uuri täpsemalt, et leida eriala, mis sobitub Sinu huvidega.</p>
      <br></br>
      <li>Digitehnoloogiate instituudis omandatud teadmised tagavad konkurentsivõime tööturul ning hästitasustatud ametid.</li>
      <li>Meie instituudi tudengitel on omamoodi privileeg, kuna õppetöö toimub valdavalt väikestes, arvutiklassi mahtuvates õpperühmades ning see tagab igale üliõpilasele võimaluse saada tunni ajal õppejõult abi ja tagasisidet. Nii õppejõud kui tudengid peavad seda vajalike teadmiste ja oskuste omandamisel väga oluliseks.</li>
      <li>Kaasaegne õppekeskkond: instituut asub ülikooli uues Astra teadushoones, kus on suurepärased tingimused auditoorseks tööks ja suhtlemiseks. Samas majas paikneb raamatukogu ja õpisaal, tudengikohvik ja hubane aatrium. E-õpe hõlmab õppematerjale internetis, videoloenguid, rühmameetodeid, teste ja palju muud.</li>
    <div>
    <section className="container mx-auto my-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div
            key={index}
          >
            <div className="p-4">
              <h3 className="text-2xl text-dtigreen font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-700 dark:text-gray-100 ">{program.description}</p>
              <a href="#" className="boreder text-green-500 ">{program.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div>
    
  );
};

export default Admissions;
