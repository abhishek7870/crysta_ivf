import React, { Component } from "react";
import { useState } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/CallIcon.png";
import "./Navbar.css";
import axios from "axios";

const SmoothScroll = () => {
  const [fname, seFname] = useState("");
  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    let val = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (val === "" || (regex.test(val) && val.length < 12)) {
      setPhone(val);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      phoneNumber: fname,
      fullName: phone,
      city: "blank",
      treatmentType: "blank",
      currenturl:window.location.href
    };
    axios
      .post(`${process.env.REACT_APP_API_PATH}`, userObject)
      .then((res) => {
        //console.log(res);
        let successMessage = document.querySelector(".success-message");
        // here clear the state,
        seFname("");
        setPhone("");
        successMessage.innerHTML = "Submitted";
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <section>
      <div className=" transparent no-shadows">
        <nav className=" transparent no-shadows">
          <div className="nav-wrapper">
            <AnchorLink href="#home" className="brand-logo">
              <img
                className="responsive-img"
                alt="crystaLogo"
                src={CrystaLogo}
              ></img>
            </AnchorLink>
            <AnchorLink
              href="!#"
              data-target="mobile-demo"
              className="sidenav-trigger"
            >
              <i className="material-icons purple-text">menu</i>
            </AnchorLink>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="CallNumber"
                  href="tel:+918938935353"
                  data-rel="external"
                >
                  <span>
                    <img id="call" alt="callIcon" src={CallIcon}></img>
                  </span>{" "}
                  893 893 5353
                </a>
              </li>
              <li>
                <AnchorLink
                  href="#modal1"
                  className="bookFreeButton btn modal-trigger"
                >
                  Book Free Consultation
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav sidenav-close" id="mobile-demo">
        {/* <li>
            <div className="user-view">
              <div className="background">
                  <img src={Imgbackground} alt="ocean" />
              </div>
              <AnchorLink href="#user"><img className="circle" src={Imgperson} alt="person" /></AnchorLink>
              <AnchorLink href="#name"><span className="white-text name">John Doe</span></AnchorLink>
              <AnchorLink href="#email"><span className="white-text email">jdandturk@gmail.com</span></AnchorLink>
            </div>
          </li> */}
        {/* <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#search">Search</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#explore">Explore</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#adventure">Adventures</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#gallery">Gallery</AnchorLink>
        </li> */}
        <li>
          <a
            className="CallNumber1"
            href="tel:+918938935353"
            data-rel="external"
          >
            <span>
              <img id="call" alt="callIcon" src={CallIcon}></img>
            </span>{" "}
            893 893 5353
          </a>
        </li>
        <li>
          <AnchorLink
            href="#modal1"
            className="bookFreeButton1 btn modal-trigger"
          >
            Book Free Consultation
          </AnchorLink>
        </li>
      </ul>
      <div id="modal1" className="modal">
        <div className="container">
          <div className="modal-content">
            <h5 className="">Let's Schedule Your Appointment</h5>

            <form onSubmit={onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  id="fname"
                  required
                  value={fname}
                  onChange={(e) => seFname(e.target.value)}
                />
                <label className="purple-text">Name</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  id="phone"
                  required
                  value={phone}
                  onChange={handleChange}
                />
                <label className="purple-text">Mobile</label>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn submitButton"
              />
              <p className="success-message"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

class Navbar extends Component {
  render() {
    return (
      <section>
        <SmoothScroll />
      </section>
    );
  }
}

export default Navbar;
