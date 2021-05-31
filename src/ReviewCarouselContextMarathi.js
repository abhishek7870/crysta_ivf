import React, { useState, createContext } from "react";
import seema from "./images/seema.webp";
import manchanda from "./images/manchanda.webp";
import makkad from "./images/makkad.webp";
import kapoor from "./images/kapor.png";
import fig1 from "./images/Group 2369.png"
export const SecondCarouselContextMarathi = createContext();

const carouselData = [
  
  {
    id: 1,
    image: fig1,
    cName: "श्री आणि श्रीमती मकर    ",
    date: "Pune | 21 Nov, 2020",
    feedback:"वंध्यत्वासह वर्षे व्यतीत करणे त्रासदायक आणि मनाला त्रास देणारे होते परंतु क्रिस्टा आयव्हीएफ आणि येथील वंध्यत्व विशेषज्ञांच्या सर्वोत्कृष्ट कार्यसंघाने आमच्यासाठी उपचार सोपे आणि त्रास-मुक्त केले." ,
  },
  {
    id: 2,
    image: fig1,
    cName: "सौ हर्षा मनचंदा",
    date: "Delhi | 02 Sep, 2020",
    feedback: "आयव्हीएफ चे यश त्यांनाच येते जे वंध्यत्व उपचारासाठी  क्रिस्टा आयव्हीएफ निवडतात . त्यांच्या रुग्णांबद्दलच्या द्रुष्टीकोन, आणि कौशल्याचा योग्य वापर जसा जादूच  करतो." ,
  },
  {
    id: 3,
    image: fig1,
    cName: "सौ सीमा तनेजा    ",
    date: "Pune | 23 Jun, 2020",
    feedback: "सलग 2 आयव्हीएफ अपयश अनुभवल्यानंतर माझ्या संकल्पनेची शक्यता जवळजवळ कमी झाली आहे. क्रिस्टा आयव्हीएफशी सल्लामसलत केल्याने माझे आयुष्य बदलले कारण मला यशस्वी संकल्पना आणि दोन आयव्हीएफ अयशस्वी झाल्यानंतर निरोगी बाळ प्रसूती करण्यात मदत झाली. ",
  },
  {
    id: 4,
    image: fig1,
    cName: "सौ. रचना मोंगा    ",
    date: "Delhi | 05 Jan, 2021",
    feedback:
      "मी नेहमीच क्रिस्टा आयव्हीएफची शिफारस करेन कारण ते पॉकेट-अनुकूल दरावर उच्च-दर्जाची वंध्यत्व उपचार देते. त्यांच्या वैद्यकीय कर्जाच्या सुविधेमुळे माझे उपचार अत्यंत सोयीस्करपणे सुरू ठेवण्यास मला मदत केली.",
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
    <SecondCarouselContextMarathi.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextMarathi.Provider>
  );
};
