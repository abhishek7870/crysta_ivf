import React, { useState, createContext } from "react";

export const CityBannerContext = createContext();

const carouselData = [
  {
    id: 1,
    normal: "High",
    bold: "IVF Success Rate",
    cityWrite: false,
  },
  {
    id: 2,
    normal: "Experienced",
    bold: "IVF Doctors in",
    cityWrite: true,
  },
  {
    id: 3,
    normal: "Affordable",
    bold: "IVF Treatment Plans",
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
    <CityBannerContext.Provider
      value={{
        mainData: state.mainData,
        leftData: state.leftData,

        slideLeft,
        slideRight,
      }}
    >
      {props.children}
    </CityBannerContext.Provider>
  );
};
