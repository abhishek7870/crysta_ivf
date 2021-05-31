import React, { useState, createContext } from "react";
import mehulC from "./images/mehulC.webp";

export const CarouselContextGujarati = createContext();

const carouselData = [
  
  {
    id: 1,
    image: mehulC,
    drName: "ડૉક્ટર મેહુલ સુખડિયા",
    professsion: "વંધ્યત્વ નિષ્ણાત",
    about: "આઈવીએફ (IVF) | આઈયુઆઈ | ઈક્સી ",
  },  
];

export const CarouselProvider = (props) => {
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
    <CarouselContextGujarati.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CarouselContextGujarati.Provider>
  );
};
