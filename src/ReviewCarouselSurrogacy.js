import React, { useState, createContext } from "react";

import fig1 from "./images/Group 2369.png";
export const SecondCarouselContextSurrogacy = createContext();

const carouselData = [
  {
    id: 1,
    city: "Pune",
    image: fig1,
    cName: "Mr. & Mrs. Koche",
    date: "Pune | 23 feb, 2021 ",
    feedback:
      "After 15 years of marriage and experiencing several IVF failure attempts at reputed fertility hospitals in Delhi, we decided to go for surrogacy treatments with Crysta IVF. The medical and paramedical staff at Crysta IVF is competent and courteous. They provided us with a healthy and compassionate surrogate mother.  We will always be thankful to this fertility facility. The team took special care of our routine meetings and appointments with the surrogate.",
  },
  {
    id: 2,
    city: "Pune",
    image: fig1,
    cName: "Mrs. Sumitra Patil",
    date: "Bhor | 21 Jan, 2021",
    feedback:
      "We are pleased and glad that God blessed us with an adorable baby boy. He is healthy, and the entire surrogacy treatment went well with the help of Crysta IVF. Thanks to the caring team & proficient team of surrogacy doctors who stood by us throughout the procedure.",
  },
  {
    id: 3,
    city: "Pune",
    image: fig1,
    cName: "Mr. Vaibhav Chaware",
    date: "Khed | 06 Jan,2021",
    feedback:
      "After seven years of trying to conceive, I learned about Crysta IVF for the best surrogacy treatments in Delhi. I had no idea what surrogacy is, but the professional team of fertility experts at the center helped us and guided us at each step of the procedure. We met a friendly and caring surrogate mother, and we are blessed with a cute baby girl after years’ painful wait.",
  },
  {
    id: 4,
    city: "Pune",
    image: fig1,

    cName: "Mr. & Mrs. Gaiwand",
    date: "Wardha | 02 Dec, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 5,
    city: "Pune",
    image: fig1,

    cName: "Mr. Suraj Wasnik",
    date: "Pune | 06 Nov, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 6,
    city: "Pune",
    image: fig1,

    cName: "Mr. & Mrs. More",
    date: "Pune | 21 Sep, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 7,
    city: "Kanpur",
    image: fig1,
    cName: "Mr. & Mrs. Gupta",
    date: "Satna | 24 feb, 2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 8,
    city: "Kanpur",
    image: fig1,
    cName: "Mr.  Rahul Srivastava",
    date: "Jhanja | 29 Jan,2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 9,
    city: "Kanpur",
    image: fig1,
    cName: "Mrs. Ragni Tiwari",
    date: "Kanpur | 16 Jan, 2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 10,
    city: "Kanpur",
    image: fig1,
    cName: "Mr. & Mrs. Sharma",
    date: "Kanpur | 09 Dec, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 11,
    city: "Kanpur",
    image: fig1,
    cName: "Mr. & Mrs. singh",
    date: "Bareli | 07 Nov, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 12,
    city: "Kanpur",
    image: fig1,
    cName: "Mr. Deepak Mishra",
    date: "Armapur | 27 Sep, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 13,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mr. & Mrs. Joshi",
    date: "Ahmedabad | 18 feb, 2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 14,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mr. Rajeev Banerjee",
    date: "Ahmedabad | 16 Jan,2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 15,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mrs. kishor Patel",
    date: "Ahmedabad | 06 Jan, 2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 16,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mr. & Mrs. Gupta",
    date: "Sitapur | 06 Dec, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 17,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mr. & Mrs. Maharana",
    date: "Ahmedabad | 04 Nov, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 18,
    city: "Ahmedabad",
    image: fig1,
    cName: "Mrs. Gupta",
    date: "Ranchi | 08-Feb-2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 19,
    city: "Delhi",
    image: fig1,
    cName: "Mr. & Mrs. Agrawal",
    date: "Delhi | 18-Jan- 2021",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 20,
    city: "Delhi",
    image: fig1,
    cName: "Mr. Gulshan Pathak",
    date: "Ahmedabad | 08 Sep, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 21,
    city: "Delhi",
    image: fig1,
    cName: "Mr. & Mrs. Ganesh Das",
    date: "Dhanbad | 26- Nov- 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
  },
  {
    id: 22,
    city: "Delhi",
    image: fig1,
    cName: "Mrs. Simran Tanja",
    date: "Delhi | 23- Oct- 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the process.",
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
    <SecondCarouselContextSurrogacy.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextSurrogacy.Provider>
  );
};
