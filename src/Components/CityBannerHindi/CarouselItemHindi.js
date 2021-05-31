import React from "react";
import "./CarouselItemHindi.css";

function CarouselItemHindi({ normal, bold, city, cityWrite, index }) {
  return (
    <div
      style={{
        opacity: index === 2 ? 0.5 : 1,
        width: "100%",
        height: "41px",
        display: "flex",
      }}
    >
      <div
        className={index % 2 === 0 ? "orange-seperator" : "blue-seperator"}
        style={{ marginTop: "0", height: "100%" }}
      ></div>
      <h2 style={{ fontSize: "15px", marginTop: 0, lineHeight: "18px", }}>
        {normal}{" "}
        <span style={{ fontWeight: 600 }}>
          {bold}
          {cityWrite ? ` ${city}` : null}
        </span>
      </h2>
    </div>
  );
}

export default CarouselItemHindi;
