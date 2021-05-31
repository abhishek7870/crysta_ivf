import React, { useState, createContext } from "react";
import fig1 from "./images/Group 2369.png";
export const SecondCarouselContextIvfCost = createContext();

const carouselData = [
  {
    id: 1,
    city: "Pune",
    image: fig1,
    cName: "Mr. & Mrs. Koche",
    date: "Pune | 23 feb, 2021 ",
    feedback:
      "My Surrogacy journey with Crysta IVF was a successful one! Right from the selection of our surrogate until the baby delivery of our daughter, the Crysta IVF team was there with us throughout the treatment. We are glad we chose Dr. Ashish Kale for our surrogacy treatmen.",
  },
  {
    id: 2,
    city: "Pune",
    image: fig1,
    cName: "Mrs. Sumitra Patil",
    date: "Bhor | 21 Jan, 2021",
    feedback:
      "After rounds of fertility medications and 3 failed IVF cycles I had never thought that I will ever conceive in my life. I then consulted Crysta IVF where I was told that another round of IUI treatment would be fruitful for me and they were right! Today we are happy parents of our twins!",
  },
  {
    id: 3,
    city: "Pune",
    image: fig1,
    cName: "Mr. Vaibhav Chaware",
    date: "Khed | 06 Jan,2021",
    feedback:
      "Being bedridden because of the sharp endometriosis was fine but when it hindered my pregnancy, it was like I am losing the battle. A grapefruit sized cystic formation was there on my ovary. I then consulted Dr. Ashwini Kale who suggested hysteroscopy procedure for this condition.",
  },
  {
    id: 4,
    city: "Pune",
    image: fig1,

    cName: "Mr. & Mrs. Gaiwand",
    date: "Wardha | 02 Dec, 2020",
    feedback:
      "Dear Crysta IVF team, we would like to extend our heartfelt gratitude for your utmost support and brilliant work in our IVF journey. Without your assistance, the treatment wouldn’t have been possible. We will always recommend Crysta IVF for their exemplary work.",
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
      "Dear Crysta IVF team, we would like to extend our heartfelt gratitude for your utmost support and brilliant work in our IVF journey. Without your assistance, the treatment wouldn’t have been possible. We will always recommend Crysta IVF for their exemplary work.",
  },
  {
    id: 19,
    city: "Delhi",
    image: fig1,
    cName: "Mr. & Mrs. Agrawal",
    date: "Delhi | 18-Jan- 2021",
    feedback:
      "Spending years with infertility was troublesome and mind-boggling but Crysta IVF and the best team of infertility specialists here made the treatment easy and hassle-free for us.",
  },
  {
    id: 20,
    city: "Delhi",
    image: fig1,
    cName: "Mr. Gulshan Pathak",
    date: "Ahmedabad | 08 Sep, 2020",
    feedback:
      "We were fortunate enough to choose Crysta IVF to pursue our surrogacy treatment. Right from the beginning to the end of the treatment, our surrogacy journey went well with this clinic. The center knows how to treat both their IPs and surrogates with care and is brilliant at facilitating the processVF success comes to those who opt Crysta IVF for their infertility treatment. I am spellbound by their level of expertise and compassionate approach towards their patients.",
  },
  {
    id: 21,
    city: "Delhi",
    image: fig1,
    cName: "Mr. & Mrs. Ganesh Das",
    date: "Dhanbad | 26- Nov- 2020",
    feedback:
      "My chances of conception almost diminished after experiencing 2 IVF failures in a rowConsulting, Crysta IVF changed my life as it helped me in a successful conception and a healthy baby delivery after two IVF failures",
  },
  {
    id: 22,
    city: "Delhi",
    image: fig1,
    cName: "Mrs. Simran Tanja",
    date: "Delhi | 23- Oct- 2020",
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
    <SecondCarouselContextIvfCost.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextIvfCost.Provider>
  );
};
