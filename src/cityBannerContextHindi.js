import React, { useState, createContext } from "react";

export const CityBannerContextHindi = createContext();

const carouselData = [
  {
    id: 1,
    normal: "उच्च",
    bold: " IVF सफलता दर ",
    cityWrite: false,
  },
  {
    id: 2,
    normal: "भारत में ",
    bold: "अनुभवी आईवीएफ डॉक्टर ",
    cityWrite: false,
  },
  {
    id: 3,
    normal: "उचित ",
    bold: "आई वी एफ उपचार योजना",
    cityWrite: false,
  },
  
];

export const CityBannerProvider = (props) => {
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
    <CityBannerContextHindi.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CityBannerContextHindi.Provider>
  );
};
