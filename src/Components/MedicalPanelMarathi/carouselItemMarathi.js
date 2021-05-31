import React from "react";
function carouselItemHindi({ img, name, about, profession, index }) {
  return (
    <div className="item" style={{ opacity: index === 2 ? 0.5 : 1 }}>
        <div className="imageContainer">
      <img src={img} alt={name} />
      </div>
      <div className="data">
        <span className="title">{name}</span>
        <h6>{profession}</h6>
        <p style={{ color: "#333333" }}>
        विशेषज्ञता:{" "}
          <span style={{ color: "#333333" }}>
            <b>{about}</b>
          </span>
        </p>
      </div>
    </div>
  );
}

export default carouselItemHindi;