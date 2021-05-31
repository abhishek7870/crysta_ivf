import React, { useState, createContext } from "react";
import ruchi from "./images/ruchiw.webp";
import naresh from "./images/nareshw.webp";
import Yashodhara from "./images/yashodraw.webp";
import Deepika from "./images/deepikaw.webp";
import Neha from "./images/nehaw.webp";
import suman from "./images/suman.webp";
import vikram from "./images/vikram.webp";
import mehulC from "./images/mehulC.webp";
import sangitaP from "./images/sangitaPng.png";
import kishore from "./images/kishore.webp";

export const CarouselContext = createContext();

const carouselData = [
  // {
  //   id: 1,
  //   image: medicalPanel1,
  //   drName: "Dr. Sarah Bailur",
  //   professsion: "Clinical Geneticist",
  //   about: "Genetic disorders",
  // },
  // {
  //   id: 2,
  //   image: sarabpreet,
  //   drName: "Dr. Sarabpreet Singh",
  //   professsion: "Chief Embryologist",
  //   about: "IVF | Andrology | Embryology",
  // },
  {
    id: 1,
    city:"Delhi",
    image: ruchi,
    drName: "Dr. Ruchi Malhotra",
    professsion: "Infertility Specialist ",
    about: "IVF | IUI | ICSI",
   
  },
  {
    id: 2,
    city:"Delhi",
    image: naresh,
    drName: "Dr. Naresh Sehgal",
    professsion: "Infertility Specialist",
    about: "IVF | IUI | ICSI",
    
  },

  {
    id: 3,
    city:"Delhi",
    image: Deepika,
    drName: "Dr. Deepika Kalo",
    professsion: "Scientist",
    about: "Cancer & Human Genetics",
 
  },

  {
    id: 4,
    city:"Delhi",
    image: vikram,
    drName: "Dr. Vikram Pratap",
    professsion: "Chief Embryologist",
    about: "IVF  |  IUI  |  Embryology",

  },
  {
    id: 5,
    city:"Delhi",
    image: suman,
    drName: "Dr. Suman Tanwar",
    professsion: "Fertility Specialist",
    about: "IVF  |  IUI | Surrogacy",
   
  },
  {
    id: 6,
    city:"Ahmedabad",
    image: mehulC,
    drName: "Dr. Mehul Sukhadia",
    professsion: "Infertility Specialist",
    about: "IVF | IUI | Surrogacy",
    
  },
  {
    id: 7,
    city:"Kanpur",
    image: sangitaP,
    drName: "Dr. Sangeeta Ahuja",
    professsion: "Infertility Specialist",
    about: " IVF | IUI | Surrogacy",
    
  },
  {
    id: 8,
    city:"Pune",
    image: kishore,
    drName: "Dr. Kishore Pandit",
    professsion: "Infertility Doctor & Specialist",
    about: "IVF | IUI | Surrogacy | Embryo Donation",
    
  },
  {
    id: 9,
    city:"Delhi",
    image: Neha,
    drName: "Neha Mehan",
    professsion: "Genetic Counselor",
    about: " Pediatric | Neonatal",
 
  },
  {
    id: 10,
    city:"Delhi",
    image: Yashodhara,
    drName: "Yashodhra Bhattacharya",
    professsion: "Clinical Genetic Counselor",
    about: " Pediatrics | Infertility",

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
    }
  };

  const state = {
    mainData,
    leftData,
  };

  return (
    <CarouselContext.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CarouselContext.Provider>
  );
};
