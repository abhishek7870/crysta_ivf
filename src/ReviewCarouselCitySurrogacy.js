import React, { useState, createContext } from "react";
import seema from "./images/seema.webp";
import manchanda from "./images/manchanda.webp";
import makkad from "./images/makkad.webp";
import kapoor from "./images/kapor.png";
import fig1 from "./images/Group 2369.png"
export const SecondCarouselContextCity = createContext();

const carouselData = [
  {
    id: 1,
    image: fig1,
    cName: "Mrs. Seema Taneja ",
    date: "Jammu | 9-Oct-20",
    feedback:
   "My chances of conception almost diminished after experiencing 2 IVF failures in a row. Consulting Crysta IVF changed my life as it helped me in a successful conception and a healthy baby delivery after two IVF failures.",
},
  {
    id: 2,
    image: fig1,
    cName: "Mrs. Harsha Manchanda",
    date: "Etawah | 1-Oct-20",
    feedback:
      "IVF success comes to those who opt Crysta IVF for their infertility treatment. I am spellbound by their level of expertise and compassionate approach towards their patients.",
  },
  {
    id: 3,
    image: fig1,
    cName: "Mr. & Mrs. Makker",
    date: "Indore | 18-Aug-20",
    feedback:
      "Spending years with infertility was troublesome and mind-boggling but Crysta IVF and the best team of infertility specialists here made the treatment easy and hassle-free for us.",
  },
  {
    id: 4,
    image: fig1,
    cName: "Mrs. Rachna Monga ",
    date: "Delhi | 05 Jan, 2021",
    feedback:
      "I would always recommend Crysta IVF because it offers top-notch infertility treatments at pocket-friendly rates. Their medical loan facility helped me to continue my treatment with utmost convenience.",
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
    <SecondCarouselContextCity.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextCity.Provider>
  );
};
