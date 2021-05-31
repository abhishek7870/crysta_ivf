import React, { useState } from "react";
import "./secureIvfCost.css";
import $ from "jquery";
import axios from "axios";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import fig1 from "../../images/background.jpg";
import fig2 from "../../images/banner-bg.png";
import Accordian from "./accordian";
import LockSecure from "../../images/locksecure.png";
import ArrowRight from "../../images/right.svg";
const SecureIvfCost = ({buton}) => {
  const [name, setname] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [nameError, setnameError] = useState("");
  const [numberError, setnumberError] = useState("");
  const [messageStatus, setmessageStatus] = useState(false);
  const [error, seterror] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const [hidebutton, sethidebutton] = useState(false);
  const validateName = () => {
    let nameError = "";

    var pattern1 = new RegExp(/^[a-zA-Z\s]+$/g);
    if (!name.match(pattern1)) {
      nameError = "Name is invalid !";
    }
    if (nameError) {
      setnameError(nameError);
      return false;
    }

    setnameError("");
    return true;
  };

  const validateNumber = () => {
    let numberError = "";

    if (mobileNumber.length < 10 || mobileNumber.length > 16) {
      numberError = "Incomplete Number !";
    }
    var pattern = new RegExp(/^[+0-9\b]+$/);
    if (!mobileNumber.match(pattern)) {
      numberError = "Invalid Number !";
    }

    if (numberError) {
      setnumberError(numberError);
      return false;
    }
    setnumberError("");

    return true;
  };

  const submitForm = () => {
    let namevalidate = validateName();
    let numbervalidate = validateNumber();
    if (namevalidate && numbervalidate) {
      const userObject = {
        phoneNumber: mobileNumber,
        fullName: name,
        city: "blank",
        treatmentType: "blank",
        currenturl: window.location.href,
      };
      axios
        .post(`${process.env.REACT_APP_API_PATH}`, userObject)
        .then((res) => {
          //console.log(res);
          //let successMessage = document.querySelector('#modal2');
          // here clear the state,

          setname("");
          setmobileNumber("");
          setmessageStatus(true);
          setnameError("");
          setnumberError("");
          sethidebutton(true);
          buton(hidebutton)

          // successMessage.innerHTML = JSON.stringify('Message Sent Successfully');
        })
        .catch(function(error) {
          seterror(true);
        });
    }
  };

  



  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <div>
        {messageStatus ? (
          <div>
            <div className="secureDatashowM">
              <Accordian />
            </div>
            <div
              style={{
                fontFamily: "Poppins",
                fontStyle: "italic",
                fontWeight: "300",
                fontSize: "16px",
                lineHeight: "28px",
                marginLeft: "5%",
              }}
            >
              *Note: The cost may vary from one patient to another depending on
              the uniqueness of the case
            </div>
          </div>
        ) : (
          <div id = "mobileScroolingId">
            <div className="secureData">
              <img src={fig2} />
            </div>
            <div className="secureServiceCostM">
              <div className="lockclassM">
                <div className="lockclass1M">
                  <LockOpenIcon style={{ fontSize: 50, color: "#924A91" }} />
                  <div className="secureTagM">
                    To unlock this feature Freely fill this <br /> information.
                  </div>
                </div>

                <KeyboardArrowDownIcon
                  style={{ fontSize: 50, color: "#924A91", fontWeight: "100" }}
                />
              </div>
              <div className="lockformM">
                <div className="lockformheadingM">
                  Book Free IVF Consultation
                </div>
                <div className="secureivf_data_input">
                  <input
                    type="text"
                    placeholder="Name"
                    className="browser-default"
                    value={name}
                    required
                    onChange={(e) => setname(e.target.value)}
              
                  />
                </div>
                {nameError ? (
                  <div style={{ color: "red" }}> {nameError}</div>
                ) : null}
                <div className="secureivf_data_input">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="browser-default"
                    value={mobileNumber}
                    required
                    onChange={(e) => setmobileNumber(e.target.value)}
                  />
                </div>
                {numberError ? (
                  <div style={{ color: "red" }}> {numberError}</div>
                ) : null}

                <div className="secureivf_buttonM" onClick={() => submitForm()}>
                  Get Started
                </div>
                {error ? (
                  <div style={{ color: "red" }}>
                    Please Check Your Network !
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {messageStatus ? (
          <div style = {{width:"100%"}}>
            <div className="secureDatashow">
              <div className="secureDatatab1">
                <div className="on">
                  <p>Treatment</p>
                  <p>IVF Cost Range (in Rs)</p>
                </div>
                <div className="tw">
                  <p>IVF with Self Egg + ICSI</p>
                  <p>80,000 - 1,80,000</p>
                </div>
                <div className="th">
                  <p>IVF with Donor Egg</p>
                  <p>1,20,000 - 2,20,000</p>
                </div>
              </div>
              <div className="secureDatatab1">
                <div className="on">
                  <p>Treatment</p>
                  <p>IVF Cost Range (in Rs)</p>
                </div>
                <div className="tw">
                  <p> Frozen Embryo Transfer (FET)</p>
                  <p> 50,000 - 70,000</p>
                </div>
                <div className="th">
                  <p>Natural Cycle IVF</p>
                  <p>80,000</p>
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: "Poppins",
                fontStyle: "italic",
                fontWeight: "300",
                fontSize: "16px",
                lineHeight: "28px",
                marginLeft: "5%",
              }}
            >
              *Note: The cost may vary from one patient to another depending on
              the uniqueness of the case
            </div>
          </div>
        ) : (
          <div id = "scrollingId">
            <div className="secureData">
              <img src={fig1} className="backgroundImgSecure" />
            </div>
            <div className="secureServiceCost">
              <div className="lockclass">
                <div className="lockclass1">
                  <img src={LockSecure} />
                  <div className="secureTag">
                    To unlock this feature <br /> Freely fill this information.
                  </div>
                </div>

                <img src={ArrowRight} className="ArrowRight" />
              </div>
              <div className="lockform">
                <div className="lockformheading">
                  Book Free IVF Consultation
                </div>
                <div className="secureivf_data_input">
                  <input
                    type="text"
                    placeholder="Name"
                    className="browser-default"
                    value={name}
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                {nameError ? (
                  <div style={{ color: "red" }}> {nameError}</div>
                ) : null}
                <div className="secureivf_data_input">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="browser-default"
                    value={mobileNumber}
                    required
                    onChange={(e) => setmobileNumber(e.target.value)}
                  />
                </div>
                {numberError ? (
                  <div style={{ color: "red" }}> {numberError}</div>
                ) : null}

                <div className="secureivf_button" onClick={() => submitForm()}>
                  Get Started
                </div>
                {error ? (
                  <div style={{ color: "red" }}>
                    Please Check Your Network !
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default SecureIvfCost;
