import React from "react";
import fig1 from "../../images/Group 2369.png";
function CarouselItem({ img, name, date, feedback, index }) {
  return (
    <div className="item" style={{ opacity: index === 2 ? 0.5 : 1 }}>
      <div className="carsphoto">
        <img src={img} alt={name} className = "imageMain" />
      </div>

      <div className="data">
        <span className="title">{name}</span>
        <h6>{date}</h6>
        <p style={{ color: "#333333" }}>{feedback}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
