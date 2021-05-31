import React, { useState, createContext } from "react";
import sharma from "./images/sharmaw.webp";
import chopra from "./images/chopraw.webp";
import mehta from "./images/mehtaw.webp";
import kapoor from "./images/kapoorw.webp";
import fig1 from "./images/Group 2369.png";
export const SecondCarouselContext = createContext();

const carouselData = [
  {
    id: 1,
    image: fig1,
    cName: "Mr. & Mrs. Chopra",
    date: "Pune | 23 Jun, 2020",
    feedback:
      "I was almost on the verge of giving up after failing to achieve conception for the 3rd consecutive time. Consulting Crysta IVF was one of the best decisions.",
  },
  {
    id: 2,
    image: fig1,
    cName: "Mrs. Shalini Sharma",
    date: "Delhi | 02 Sep, 2020",
    feedback:
      "Fertility experts at Crysta IVF were always there to attend to our queries right from the beginning of our treatment. We are blessed with a healthy baby boy.",
  },
  {
    id: 3,
    image: fig1,
    cName: "Mrs. Ruchi Mehta",
    date: "Pune | 21 Nov, 2020",
    feedback:
      "I am delighted with the outcome of my fertility treatment guided by Crysta IVF and the team. The fertility experts at Crysta IVF made me feel like a family.",
  },
  {
    id: 4,
    image: fig1,
    cName: "Mrs. Sohi Kapoor",
    date: "Delhi | 05 Jan, 2021",
    feedback:
      "Crysta IVF has been extremely competent, staff throughout the entire process, from meeting with a consultant right through to IVF procedures and aftercare.",
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
    <SecondCarouselContext.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContext.Provider>
  );
};
