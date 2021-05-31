import React, { useState, createContext } from "react";
import seema from "./images/seema.webp";
import manchanda from "./images/manchanda.webp";
import makkad from "./images/makkad.webp";
import kapoor from "./images/kapor.png";
import fig1 from "./images/Group 2369.png"
export const SecondCarouselContextHindi = createContext();

const carouselData = [
  
  {
    id: 1,
    image: fig1,
    cName: "मिस्टर एंड मिसेज मक्क्ड़ ",
    date: "Pune | 21 Nov, 2020",
    feedback:"इनफर्टिलिटी के साथ सालो बिताना परेशानी भरा और दर्दनाक था लेकिन Crysta IVF और इनफर्टिलिटी विशेषज्ञों की सर्वश्रेष्ठ टीम ने हमारे लिए इलाज को बेहद आसान और परेशानी रहित बना दिया।" ,
  },
  {
    id: 2,
    image: fig1,
    cName: "मिसेज हर्षा मनचंदा",
    date: "Delhi | 02 Sep, 2020",
    feedback: "बेस्ट आईवीएफ (IVF) ट्रीटमेंट के अलावा मैं सर्वश्रेष्ठ आईवीएफ (IVF) डॉक्टर और उनकी विशेषज्ञता और उनका  अपने पेशेंट्स के प्रति दया भावना से बोहोत खुश हूँ | यही कुछ विशेषग्यताये Crysta IVF को बेस्ट आईवीएफ (IVF) बनाती हैं| " ,
  },
  {
    id: 3,
    image: fig1,
    cName: "मिसेज सीमा तनेजा ",
    date: "Pune | 23 Jun, 2020",
    feedback: "लगातार दो बार आईवीएफ (IVF) फेलियर के बाद मेरी गर्भाधान की संभावना काफी कम थी। Crysta IVF ने मेरे जीवन को बदल दिया क्योंकि यहाँ मुझे सफल गर्भाधान और एक स्वस्थ बच्चे की डिलीवरी में मदद मिली।    ",
  },
  {
    id: 4,
    image: fig1,
    cName: "मिसेज रचना मोंगा ",
    date: "Delhi | 05 Jan, 2021",
    feedback:
      "मैं हमेशा इनफर्टिलिटी से जूझ रहे कपल्स को Crysta IVF की सलाह दूंगी क्योंकि यह पॉकेट-फ्रेंडली दरों पर उच्च स्तर के इनफर्टिलिटी उपचार प्रदान करता है। उनकी मेडिकल लोन की सुविधा ने मुझे अपना इलाज पूरी तरह से जारी रखने में मदद की।",
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
    <SecondCarouselContextHindi.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </SecondCarouselContextHindi.Provider>
  );
};
