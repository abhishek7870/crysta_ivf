import React from "react";
function carouselItemHindi({ img, name, date, feedback, index }) {
  return (
    <div className="item" style={{ opacity: index === 2 ? 0.5 : 1 }}>
      <img src={img} alt={name} />
      <div className="data">
        <span className="title">{name}</span>
        <h6>{date}</h6>
        <p style={{ color: "#333333" }}>{feedback}</p>
      </div>
    </div>
  );
}

export default carouselItemHindi;
