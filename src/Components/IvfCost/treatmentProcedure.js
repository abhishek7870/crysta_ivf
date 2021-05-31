import React , {useState} from "react";
import "./treatment.css";
const TreatmentProcedure = ({ cityname }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <div className="treatmentM">
        <h2 className="treatmentheadM">
          IVF Treatment Procedure in {cityname}
        </h2>
        <div className="treatmentgridviewM">
          <li>
            {" "}
            <div className="bulletssM"></div> Consultation with IVF specialist
          </li>
          <li>
            {" "}
            <div className="bulletssM"></div>Egg collection
          </li>
          <li>
            {" "}
            <div className="bulletssM"></div>Ultrasound and blood work
          </li>
          <li>
            {" "}
            <div className="bulletssM"></div>Supressing the natural menstrual
            cycle
          </li>
          <li>
            {" "}
            <div className="bulletssM"></div>Fertilization{" "}
          </li>
          <li>
            {" "}
            <div className="bulletssM"></div>Improving the egg supply
          </li>
          <li>
            <div className="bulletssM"></div>Embryo transfer
          </li>
        </div>
      </div>
    );
  } else {
    return (
      <div className="treatment">
        <h2 className="treatmenthead">IVF Treatment Procedure in {cityname}</h2>
        <div className="treatmentgridview">
          <li>
            {" "}
            <div className="bulletss"></div> Consultation with IVF specialist
          </li>
          <li>
            {" "}
            <div className="bulletss"></div>Egg collection
          </li>
          <li>
            {" "}
            <div className="bulletss"></div>Ultrasound and blood work
          </li>
          <li>
            {" "}
            <div className="bulletss"></div>Supressing the natural menstrual
            cycle
          </li>
          <li>
            {" "}
            <div className="bulletss"></div>Fertilization{" "}
          </li>
          <li>
            {" "}
            <div className="bulletss"></div>Improving the egg supply
          </li>
          <li>
            <div className="bulletss"></div>Embryo transfer
          </li>
        </div>
      </div>
    );
  }
};

export default TreatmentProcedure;
