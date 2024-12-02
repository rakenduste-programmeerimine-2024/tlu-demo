"use client"; // Ensure this component runs on the client side

import React, { useState } from "react";

const App: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <h5 className="justify-center flex text-6xl">Instituut</h5>
      <br />
      <p>
      Digitehnoloogiate instituudi ajalugu algas 1. septembril 2015, mil ühinesid informaatika instituut, infoteaduste instituut ning matemaatika-loodusteaduste instituudi matemaatika osakond. Direktorina asus tööle Peeter Normak. Õppe- ja teadustegevus korraldati viie akadeemilise suuna alla: haridustehnoloogia (suuna juht haridustehnoloogia keskuse juhataja Linda Helene Sillat), infoteadused (suuna juht prof Sirje Virkus), inimese ja arvuti interaktsioon (suuna juht prof David Lamas), matemaatika ja matemaatika didaktika (suuna juht dots Mart Abel) ja rakendusinformaatika (suuna juht prof Peeter Normak). Instituudi nõukogu esimeheks valiti Andrus Rinde.
      </p>
      <br />
      <p>Alates 2016. aasta sügisest võeti üle digitaalsete õpimängude magistriõppekava koordineerimine, mis arendati välja koos Balti filmi, meedia, kunstide ja kommunikatsiooni instituudiga.</p>
      <br></br>
      <p>2016. aastal asutati Hariduse Infotehnoloogia Sihtasutuse toel tehnoloogialabor ja tarkvaralabor. Instituudil on tihe teadusalane koostöö TLÜ haridusuuenduse tippkeskusega, mida juhib varem meie instituudis töötanud prof Tobias Ley.</p>
      <br></br>
      <div id="accordion">
        <h2>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border ${
              openAccordion === 1 ? "border-b-0" : "border-gray-200"
            }`}
            onClick={() => toggleAccordion(1)}
            aria-expanded={openAccordion === 1}
            aria-controls="accordion-body-1"
          >
            <span>Informaatika instituudi ajalugu</span>
          </button>
        </h2>
        <div
          id="accordion-body-1"
          className={`${openAccordion === 1 ? "block" : "hidden"} p-5 border border-gray-200`}
        >
          <p>
          Arvutiõpetuse ajalugu Tallinna Ülikoolis ulatub aastasse 1965 kui tollases E.Vilde nimelises Tallinna Pedagoogilises Instituudis taasavatud matemaatika eriala õppekavasse lülitati kursus arvutid ja programmeerimine. Väikeste muudatustega 1978. a ja 1983. a kehtis see õppekava kuni 1986. aastani, mil mindi üle uutele õppekavadele, mille lõpetaja sai keskkooli matemaatika ja informaatika ning põhikooli füüsika õpetaja kutse. Seoses sellega vähendati füüsika ja astronoomia tunde ning informaatika ja arvutusmatemaatika tundide arv kasvas 384 tunnile. Informaatikat ja arvutiõpetust õpetati matemaatika kateedri koosseisus (dots Peeter Normak, õpet Vambola Kase).
          </p>
          <br></br>
          <p>1989. aastal asutati iseseisev informaatika kateeder; juhatama asus seda dots Peeter Normak.</p>
        </div>

        <h2>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border ${
              openAccordion === 2 ? "border-b-0" : "border-gray-200"
            }`}
            onClick={() => toggleAccordion(2)}
            aria-expanded={openAccordion === 2}
            aria-controls="accordion-body-2"
          >
            <span>Infoteaduste instituudi ajalugu</span>
          </button>
        </h2>
        <div
          id="accordion-body-2"
          className={`${openAccordion === 2 ? "block" : "hidden"} p-5 border border-gray-200`}
        >
          <p>
          Eesti raamatukoguhoidjate erialakoolitusega hakati regulaarselt tegelema 20. sajandi alguskümnenditel, eeskujuks oli saksa ning anglo-ameerika koolitussüsteem. 1927. aastast oli raamatukogundust võimalik õppida valikainena Tartu Ülikoolis. Tartus koolitati raamatukogutöötajaid mõningate vaheaegadega kuni 1965. aastani. Sellest alates on raamatukoguhoidja ja infospetsialisti koolitus toimunud Tallinna Ülikoolis (tollase nimetusega E. Vilde nim. Tallinna Pedagoogiline Instituut), kultuuriteaduskonna raamatukogunduse ja bibliograafia kateedris. Kateeder reorganiseeriti 1991. aastal raamatukogunduse osakonnaks. 1992/1993 õppeaasta kevadel moodustati osakonnas vastavalt ülikoolis kehtestatud uuele struktuurile õppetoolid ja valiti esimesed professorid: infoteaduse alal Evi Rannap, raamatukogunduse alal Marje Aasmets ja raamatuteaduse alal Mare Lott. Aastatel 1993-2007 tegutses osakond sotsiaalteaduskonna koosseisus, 1994. aastast infoteaduste osakonna nime all. Aasta hiljem alustas osakonna koosseisus tööd infotöö keskus kolme programmiga: kaugkoolituse, täiendkoolituse ning teadus- ja arendusprogrammiga, millest kasvas välja info- ja teadmusjuhtimise keskuslektor Sirje Virkuse juhtimisel.
          </p>
          <br></br>
          <p>2007.a. viidi Tallinna Ülikoolis läbi struktuurireform ja 2008. aasta 1. jaanuarist kuni 1.septembrini 2015 tegutses infoteaduste osakonna baasil moodustatud infoteaduste instituut professor Tiiu Reimo juhtimisel.</p>
        </div>

        <h2>
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border ${
              openAccordion === 3 ? "border-b-0" : "border-gray-200"
            }`}
            onClick={() => toggleAccordion(3)}
            aria-expanded={openAccordion === 3}
            aria-controls="accordion-body-3"
          >
            <span>Matemaatika osakonna ajalugu</span>
          </button>
        </h2>
        <div
          id="accordion-body-3"
          className={`${openAccordion === 3 ? "block" : "hidden"} p-5 border border-gray-200`}
        >
          <p>
          Matemaatika on olnud esindatud Tallinna Ülikoolis selle kõigil arenguetappidel. Tallinna Ülikooli vanim eelkäija oli Tallinna Õpetajate Seminar, mis asutati 1. juulil 1919 ja õppetöö algas 18. oktoobril, mida enne 2006. aastat tähistati ülikooli aastapäevana. Seminari esimene direktor oli matemaatik Villem Nano (1893-1965, mh praeguse Digitehnoloogiate instituudidirektori Peeter Normaku (s 1952) vanaisa). Seminar nimetati sügisel 1929 ümber Tallinna Pedagoogiumiks, kuid endine nimi taastati 1937 ja selle nime all töötati kuni 1947. aastani. Sel perioodil olid seal Nano kõrval tuntud matemaatikaõpetajad ja kooliõpikute autorid Viktor Päss (1892-1956), August Perli (1871-1935), Arnold Vihman (1899-1975), Elmar Etverk (1899-1977) jt. Inspektorina töötas seal mehaanik Oskar Silde (1900-1996).
          </p>
          <br></br>
          <p>Seminar korraldati ümber Tallinna õpetajate instituudiks, mis tegutses aastail 1947 -1952. See ei olnud ülikooli tasemel asutus, matemaatika-füüsika osakonna, hiljem matemaatika kateedri juhataja oli Albert Borkvell (1890-1963). Kateeder oli kuueliikmeline – Vihmani kõrval olid tuntumad Mihkel Usai (1901-1991) ja Mihkel Haavamäe (1915-1997).</p>
        </div>
      </div>
    </div>
  );
};

export default App;
