import React, { useState, createContext } from "react";
import seema from "./images/seema.webp";
import manchanda from "./images/manchanda.webp";
import makkad from "./images/makkad.webp";
import kapoor from "./images/kapor.png";
import fig1 from "./images/Group 2369.png"
export const SecondCarouselContextGujarati = createContext();

const carouselData = [
  
  {
    id: 1,
    image: fig1,
    cName: "શ્રીમતી મકર ",
    date: "Pune | 21 Nov, 2020",
    feedback:"વંધ્યત્વ સાથે વર્ષો  નિકકાળવા એ મુશ્કેલીભર્યું અને દિમાગથી તણાવ ભરાયેલું હતું પરંતુ Crysta IVF અને અહીં વંધ્યત્વ નિષ્ણાતોની શ્રેષ્ઠ ટીમે સારવારને સરળ અને અમને મુશ્કેલી માંથી દૂર કર્યા છે." ,
  },
  {
    id: 2,
    image: fig1,
    cName: "શ્રીમતી હર્ષ મનચાંડા ",
    date: "Delhi | 02 Sep, 2020",
    feedback: "આઇવીએફ (IVF) સફળતા તેમના માટે આવે છે જેઓ તેમની વંધ્યત્વની સારવાર માટે ક્રિસ્ટા આઇવીએફ (IVF) પસંદ કરે છે. હું છું તેમની કુશળતા અને તેમના પ્રત્યે કરુણાપૂર્ણ અભિગમના સ્તર દ્વારા જોડાયેલી દર્દિઓમાંની એક." ,
  },
  {
    id: 3,
    image: fig1,
    cName: "શ્રીમતી સીમા તનેજા ",
    date: "Pune | 23 Jun, 2020",
    feedback: "સતત 2 આઇવીએફ (IVF) નિષ્ફળતાઓનો અનુભવ કર્યા પછી મારી આશા લગભગ ઓછી થઈ ગઈ હતી. Crysta IVF ની સલાહ લેવાથી મારું જીવન બદલાઈ ગયું કેમ કે તે મને સફળ થવામાં મદદ કરી અને બે આઇવીએફ (IVF) નિષ્ફળતા પછી તંદુરસ્ત બાળક ની ડિલિવરી થઇ છે. ",
  },
  {
    id: 4,
    image: fig1,
    cName: "શ્રીમતી રચના મોંગા",
    date: "Delhi | 05 Jan, 2021",
    feedback:
      "હું હંમેશાં Crysta IVF ની ભલામણ કરીશ કારણ કે તે વંધ્યત્વની ટોચની ઉપચારો આપે છે ખિસ્સા-મૈત્રીપૂર્ણ દરે તેમની તબીબી લોન સુવિધાથી મારી સારવાર ચાલુ રાખવામાં મદદ મળી ખૂબ જ સગવડ સાથે.",
  },
];

export const SecondCarouselProvider = (props) => {
  const [mainData, setMainData] = useState(carouselData);
  const [leftData, setLeftData] = useState([]);

  const slideLeft = () => {
    if (mainData.length === 2) {
      return null;
    } else {
      let item = mainData.shift();
      setLeftData([...leftData, item]);
      setMainData(mainData);
    }
  };

  const slideRight = () => {
    if (leftData.length < 1) {
      return null;
    } else {
      let item = leftData.pop();
      mainData.unshift(item);
      setLeftData([...leftData]);
      setMainData(mainData);

      //console.log(mainData);
    }
  };

  const state = {
    mainData,
    leftData,
  };

  return (
    <SecondCarouselContextGujarati.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextGujarati.Provider>
  );
};
