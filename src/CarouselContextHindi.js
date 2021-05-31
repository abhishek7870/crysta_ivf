import React, { useState, createContext } from "react";
import ruchi from "./images/ruchiw.webp";
import naresh from "./images/nareshw.webp";
import Deepika from "./images/deepikaw.webp";
import suman from "./images/suman.webp";
import vikram from "./images/vikram.webp";

export const CarouselContextHindi = createContext();

const carouselData = [
  
  {
    id: 1,
    image: ruchi,
    drName: "डॉ. रूचि मल्होत्रा",
    professsion: "इनफर्टिलिटी विशेषज्ञ",
    about: "आईवीएफ (IVF) | आईयूआई | इकसी ",
  },
  {
    id: 2,
    image: naresh,
    drName: "डॉ. नरेश  सहगल",
    professsion: "इनफर्टिलिटी विशेषज्ञ",
    about: "इनफर्टिलिटी विशेषज्ञ",
  },
  
  {
    id: 3,
    image: Deepika,
    drName: "डॉ. दीपिका कालो",
    professsion: "साइंटिस्ट",
    about: "कैंसर, एंड ह्यूमन जेनेटिक्स",
  },
  {
    id: 4,
    image: vikram,
    drName: "डॉ विक्रम प्रताप",
    professsion: "चीफ  एम्ब्र्योलॉजिस्ट",
    about: "आईवीएफ (IVF) | आईयूआई | एम्ब्र्योलोजी ",
  },
  {
    id: 5,
    image: suman,
    drName: "डॉ सुमन तंवर",
    professsion: "प्रजनन विशेषज्ञ",
    about: "आईवीएफ (IVF) | आईयूआई",
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
    <CarouselContextHindi.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CarouselContextHindi.Provider>
  );
};
