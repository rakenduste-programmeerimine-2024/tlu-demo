"use client"; // Ensure this component runs on the client side
import React, { useState } from "react";

const App: React.FC = () => {
  // State to track the active accordion section
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the active state for each section
  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h5 className="justify-center flex text-6xl">Instituut</h5>
      <br />
      <p>Digitehnoloogiate instituudi ajalugu algas 1. septembril 2015, mil ühinesid informaatika instituut, infoteaduste instituut ning matemaatika-loodusteaduste instituudi matemaatika osakond. Direktorina asus tööle Peeter Normak. Õppe- ja teadustegevus korraldati viie akadeemilise suuna alla: haridustehnoloogia (suuna juht haridustehnoloogia keskuse juhataja Linda Helene Sillat), infoteadused (suuna juht prof Sirje Virkus), inimese ja arvuti interaktsioon (suuna juht prof David Lamas), matemaatika ja matemaatika didaktika (suuna juht dots Mart Abel) ja rakendusinformaatika (suuna juht prof Peeter Normak). Instituudi nõukogu esimeheks valiti Andrus Rinde.</p>
      <br />
      <p>Alates 2016. aasta sügisest võeti üle digitaalsete õpimängude magistriõppekava koordineerimine, mis arendati välja koos Balti filmi, meedia, kunstide ja kommunikatsiooni instituudiga.</p>
      <br />
      <p>2016. aastal asutati Hariduse Infotehnoloogia Sihtasutuse toel tehnoloogialabor ja tarkvaralabor. Instituudil on tihe teadusalane koostöö TLÜ haridusuuenduse tippkeskusega, mida juhib varem meie instituudis töötanud prof Tobias Ley.</p>
      <br />

      <div id="accordion-collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-green-200 rounded-t-xl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 dark:border-green-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-green-800 gap-3"
            onClick={() => handleToggle(1)}
            aria-expanded={activeIndex === 1 ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <span>Informaatika instituudi ajalugu</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transform ${activeIndex === 1 ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 1 ? "max-h-[1000px]" : "max-h-0"}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-green-200 dark:border-green-700 dark:bg-green-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Eesti raamatukoguhoidjate erialakoolitusega hakati regulaarselt tegelema 20. sajandi alguskümnenditel, eeskujuks oli saksa ning anglo-ameerika koolitussüsteem. 1927. aastast oli raamatukogundust võimalik õppida valikainena Tartu Ülikoolis. Tartus koolitati raamatukogutöötajaid mõningate vaheaegadega kuni 1965. aastani. Sellest alates on raamatukoguhoidja ja infospetsialisti koolitus toimunud Tallinna Ülikoolis (tollase nimetusega E. Vilde nim. Tallinna Pedagoogiline Instituut), kultuuriteaduskonna raamatukogunduse ja bibliograafia kateedris. Kateeder reorganiseeriti 1991. aastal raamatukogunduse osakonnaks. 1992/1993 õppeaasta kevadel moodustati osakonnas vastavalt ülikoolis kehtestatud uuele struktuurile õppetoolid ja valiti esimesed professorid: infoteaduse alal Evi Rannap, raamatukogunduse alal Marje Aasmets ja raamatuteaduse alal Mare Lott. Aastatel 1993-2007 tegutses osakond sotsiaalteaduskonna koosseisus, 1994. aastast infoteaduste osakonna nime all. Aasta hiljem alustas osakonna koosseisus tööd infotöö keskus kolme programmiga: kaugkoolituse, täiendkoolituse ning teadus- ja arendusprogrammiga, millest kasvas välja info- ja teadmusjuhtimise keskuslektor Sirje Virkuse juhtimisel.
            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-green-200 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 dark:border-green-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-green-800 gap-3"
            onClick={() => handleToggle(2)}
            aria-expanded={activeIndex === 2 ? "true" : "false"}
            aria-controls="accordion-collapse-body-2"
          >
            <span>Infoteaduste instituudi ajalugu</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transform ${activeIndex === 2 ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 2 ? "max-h-[1000px]" : "max-h-0"}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-green-200 dark:border-green-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Arvutiõpetuse ajalugu Tallinna Ülikoolis ulatub aastasse 1965 kui tollases E.Vilde nimelises Tallinna Pedagoogilises Instituudis taasavatud matemaatika eriala õppekavasse lülitati kursus arvutid ja programmeerimine. Väikeste muudatustega 1978. a ja 1983. a kehtis see õppekava kuni 1986. aastani, mil mindi üle uutele õppekavadele, mille lõpetaja sai keskkooli matemaatika ja informaatika ning põhikooli füüsika õpetaja kutse. Seoses sellega vähendati füüsika ja astronoomia tunde ning informaatika ja arvutusmatemaatika tundide arv kasvas 384 tunnile. Informaatikat ja arvutiõpetust õpetati matemaatika kateedri koosseisus (dots Peeter Normak, õpet Vambola Kase).            </p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-green-200 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 dark:border-green-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-green-800 gap-3"
            onClick={() => handleToggle(3)}
            aria-expanded={activeIndex === 3 ? "true" : "false"}
            aria-controls="accordion-collapse-body-3"
          >
            <span>Matemaatika osakonna ajalugu</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transform ${activeIndex === 3 ? "rotate-180" : ""}`}
              aria-hidden="true"

            >
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === 3 ? "max-h-[1000px]" : "max-h-0"}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-green-200 dark:border-green-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            Matemaatika on olnud esindatud Tallinna Ülikoolis selle kõigil arenguetappidel. Tallinna Ülikooli vanim eelkäija oli Tallinna Õpetajate Seminar, mis asutati 1. juulil 1919 ja õppetöö algas 18. oktoobril, mida enne 2006. aastat tähistati ülikooli aastapäevana. Seminari esimene direktor oli matemaatik Villem Nano (1893-1965, mh praeguse Digitehnoloogiate instituudidirektori Peeter Normaku (s 1952) vanaisa). Seminar nimetati sügisel 1929 ümber Tallinna Pedagoogiumiks, kuid endine nimi taastati 1937 ja selle nime all töötati kuni 1947. aastani. Sel perioodil olid seal Nano kõrval tuntud matemaatikaõpetajad ja kooliõpikute autorid Viktor Päss (1892-1956), August Perli (1871-1935), Arnold Vihman (1899-1975), Elmar Etverk (1899-1977) jt. Inspektorina töötas seal mehaanik Oskar Silde (1900-1996).            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
