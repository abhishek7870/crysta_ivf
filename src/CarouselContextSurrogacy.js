import React, { useState, createContext } from "react";
import ruchi from "./images/ruchiw.webp";
import naresh from "./images/nareshw.webp";
import Deepika from "./images/deepikaw.webp";
import suman from "./images/suman.webp";
import vikram from "./images/vikram.webp";

export const CarouselContextSurrogacy = createContext();

const carouselData = [
  
  {
    id: 1,
    image: ruchi,
    drName: "Dr. Ruchi Malhotra",
    professsion: "Infertility & Surrogacy Specialist ",
    about: "IVF | IUI | Surrogacy",
  },
  {
    id: 2,
    image: naresh,
    drName: "Dr. Naresh Sehgal",
    professsion: "Infertility Specialist",
    about: "IVF | IUI | Surrogacy",
  },
  {
    id: 3,
    image: Deepika,
    drName: "Dr. Deepika Kalo",
    professsion: "Scientist",
    about: "Cancer & Human Genetics",
  },
  {
    id: 4,
    image: vikram,
    drName: "Dr. Vikram Pratap",
    professsion: "Chief Embryologist",
    about: "IVF  |  IUI  |  Embryology",
  },
  {
    id: 5,
    image: suman,
    drName: "Dr. Suman Tanwar",
    professsion: "Fertility Specialist",
    about: "IVF  |  IUI | Surrogacy",
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
    <CarouselContextSurrogacy.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CarouselContextSurrogacy.Provider>
  );
};
