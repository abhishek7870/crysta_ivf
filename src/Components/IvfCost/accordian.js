import React, { useState } from "react";
import arrowdown from "../../images/Component 2.png";
import arrowup from "../../images/Component 3.png";
const Accordian = () => {
  const [showAccord1, setshowAccord1] = useState(false);
  const [showAccord2, setshowAccord2] = useState(false);
  const [showAccord3, setshowAccord3] = useState(false);
  const [showAccord4, setshowAccord4] = useState(false);
  const openAcord1 = () => {
    setshowAccord1(!showAccord1);
  };
  const openAcord2 = () => {
    setshowAccord2(!showAccord2);
  };
  const openAcord3 = () => {
    setshowAccord3(!showAccord3);
  };
  const openAcord4 = () => {
    setshowAccord4(!showAccord4);
  };

  const stylehide = {
    background: "#f5f5f5",
    borderRradius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    alignSelf: "center",

    height: 63,
    flexDirection: "column",
    marginBottom: 10,
  };
  const styleShow = {
    background: "#f5f5f5",
    borderRradius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 10,
    height: 100,
    flexDirection: "column",
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" , marginTop:20}}
    >
      <div style={showAccord1 ? styleShow : stylehide}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: 50,
            cursor: "pointer",
          }}
          onClick={() => openAcord1()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 200,

              justifyContent: "flex-start",
            }}
          >
            <img
              src={showAccord1 ? arrowup : arrowdown}
              style={{ marginRight: 10 }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,

                display: "flex",
                alignItems: "center",
              }}
            >
              Treatment Name
            </p>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 14,
              width: 200,
            }}
          >
            IVF with Self Egg + ICSI
          </p>
        </div>
        {showAccord1 ? (
          <div
            style={{
              display: "flex",
              width: "80%",

              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
                width: 250,
              }}
            >
              IVF Cost Range (in Rs)
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                width: 200,
              }}
            >
              80,000 - 1,80,000
            </p>
          </div>
        ) : null}
      </div>

      <div style={showAccord2 ? styleShow : stylehide}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: 50,
            cursor: "pointer",
          }}
          onClick={() => openAcord2()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 200,

              justifyContent: "flex-start",
            }}
          >
            <img
              src={showAccord2 ? arrowup : arrowdown}
              style={{ marginRight: 10 }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
              }}
            >
              Treatment Name
            </p>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 14,
              width: 200,
            }}
          >
            IVF with Donor Egg
          </p>
        </div>
        {showAccord2 ? (
          <div
            style={{
              display: "flex",
              width: "80%",

              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
                width: 250,
              }}
            >
              IVF Cost Range (in Rs)
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                width: 200,
              }}
            >
              1,20,000 - 2,20,000
            </p>
          </div>
        ) : null}
      </div>
      <div style={showAccord3 ? styleShow : stylehide}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: 50,
            cursor: "pointer",
          }}
          onClick={() => openAcord3()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 200,

              justifyContent: "flex-start",
            }}
          >
            <img
              src={showAccord3 ? arrowup : arrowdown}
              style={{ marginRight: 10 }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
              }}
            >
              Treatment Name
            </p>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 14,
              width: 200,
            }}
          >
            Frozen Embryo Transfer (FET)
          </p>
        </div>
        {showAccord3 ? (
          <div
            style={{
              display: "flex",
              width: "80%",

              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
                width: 250,
              }}
            >
              IVF Cost Range (in Rs)
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                width: 200,
              }}
            >
              50,000- 70,000
            </p>
          </div>
        ) : null}
      </div>
      <div style={showAccord4 ? styleShow : stylehide}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            height: 50,
            cursor: "pointer",
          }}
          onClick={() => openAcord4()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: 200,

              justifyContent: "flex-start",
            }}
          >
            <img
              src={showAccord4 ? arrowup : arrowdown}
              style={{ marginRight: 10 }}
            />
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,
              }}
            >
              Treatment Name
            </p>
          </div>
          <p
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 14,
              width: 200,
            }}
          >
            Natural Cycle IVF
          </p>
        </div>
        {showAccord4 ? (
          <div
            style={{
              display: "flex",
              width: "80%",

              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 14,

                width: 250,
              }}
            >
              IVF Cost Range (in Rs)
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 14,
                width: 200,
              }}
            >
              80,000
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Accordian;
