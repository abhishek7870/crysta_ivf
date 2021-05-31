import React from "react";
function carouselItemCity({ img, name, about, profession, index }) {
  return (
    <div className="ivfCostDoctor" style={{ opacity: index === 2 ? 0.5 : 1 }}>
      <div className="ivfCostDoctorImage">
        <img
          src={img}
          alt={name}
          style={{ width: "207.34px", height: "207.34px" }}
        />
      </div>
      <div className="ivfCostDoctorTitle">
        <span className="ivfDoctorName">{name}</span>
        <h6
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",

            /* black */

            color: "#333333",
          }}
        >
          {profession}
        </h6>
        <p style={{ color: "#333333" }}>
          Specialisation:{" "}
          <span style={{ color: "#333333" }}>
            <b>{about}</b>
          </span>
        </p>
      </div>
    </div>
  );
}

export default carouselItemCity;
