"use client"; // Ensure this component runs on the client side

import React from "react";
import YouTube from "react-youtube";

const App: React.FC = () => {
  const videoId = "7x1lXTapzyo"; // Extracted from the YouTube URL

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // no autoplay
      start: 0, // Start at 0 seconds
    },
  };

  const onPlayerReady = (event: any) => {
    console.log("Video is ready");
  };

  return (
    <div>
      <h5 className="justify-center flex text-6xl" >Tallinna Ülikool</h5>
      <br></br>
      <p>Tallinna Ülikool on suuruselt kolmas avalik-õiguslik ülikool Eestis. Meil õpib ligi 7000 üliõpilast ning töötab ligi 400 õppejõudu ja teadlast. Meie õppe- ja teadustöö kõrget taset rahvusvahelises võrdluses kinnitab kindel positsioon maailma ülikoolide tunnustatud edetabelites.</p>
      <br></br>

        <div className="justify-center flex" 


        >
          <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
      
      <br></br>
      <p>Soovides saavutada paremat kooskõla ühiskonna vajadustega, oleme võtnud eesmärgiks saada targa eluviisi eestvedajaks Eestis. Tark eluviis tähendab eelkõige teaduspõhiseid otsuseid nii ühiskonna kui ka kodaniku paremaks toimetulekuks.</p>
      <br></br>
      <p>Tallinna Ülikool on viimase 14 aastaga liitnud endaga hulga õppe- ja teadusasutusi. See on oluliselt laiendanud ülikooli vastutusvaldkondade skaalat, mis täna ulatub õpetajakoolitusest koreograafiani.</p>
      <br></br>
      <p>Ülikooli viis fookusvaldkonda on: haridusuuendus, digi- ja meediakultuur, kultuurilised kompetentsid, terve ja jätkusuutlik eluviis ning ühiskond ja avatud valitsemine.</p>
      <br></br>
      <p>Alates 1. septembrist 2015 esindab igat valdkonda vastav instituut, kuuenda instituudi ülesandeks on kõigi nende instituutide toetamine digitaaltehnoloogiate ja analüütikaga. Lisaks on ülikoolil regionaalne kolledž Haapsalus.</p>
      <br></br>
      <hr></hr>
      <br></br>
      <p>Tallinna Ülikool, Eesti ülikoolina, pakub ja arendab eelkõige eestikeelset ja Eesti vajadustest lähtuvat haridust ja teadust. Arvestades kõrghariduses toimuvat, on oluline roll ka rahvusvahelistumisel. </p>
      <br></br>
      <p>Tallinna Ülikooli teadlased juhivad ja osalevad Euroopa Komisjoni, EU regionaalprogrammi ja Erasmus+ poolt rahastatud projektis. Ülikoolil on lepingud 43 partnerülikooliga 23 riigist ja üle 400 Erasmus+ partnerlepingu, oleme kaheksa rahvusvahelise kõrgharidusasutusi ühendava võrgustiku liige ja meie teadlased ja õppejõud panustavad aktiivselt oma erialaste võrgustike tegemistesse.</p>
      <br></br>
      <p>Tallinna Ülikool, targa eluviisi eestvedajana, väärtustab ka oma liikmete vaba aega: ülikoolil on töötajatele, õppejõududele ning vilistlastele mõeldud kirjandusauhind, Eesti aasta orkestriks valitud sümfooniaorkester, rahvusvaheliselt tunnustatud koorid ja kultuurikollektiivid ning mitu Eesti meistriliiga tasemel spordivõistkonda.</p>

    </div>

  );
};

export default App;
