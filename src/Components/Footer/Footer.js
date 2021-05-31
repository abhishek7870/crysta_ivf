import React, { Component } from "react";
//import { useState } from 'react';
import callIcon from "../../images/Group 141.png";
import whatsappIcon from "../../images/Group 98.svg";
import "../../../node_modules/jquery/dist/jquery";
import "../../../node_modules/materialize-css/dist/js/materialize";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import linkedinMobile from "../../images/linkedinMobile.png";
import insta from "../../images/Insta.png";
import twitter from "../../images/tweet.png";
import footerImage from "../../images/footerImage.png";
import fbicn from "../../images/fb-icn.png";
import instaicn from "../../images/instagram.png";
import twittericn from "../../images/twitter.png";
import SimpleForm from "../Chatbots/SimpleForm";
import faCut from "../../images/closeModal.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import faCutMobile from "../../images/faCut.png";
import CustomModal from "../CustomModal/CustomModal";
import axios from "axios";
import { SiWhatsapp } from "react-icons/si";
import Slidingpanel from "../slidingPanel/slidingpanel";

const initialState = {
  phone: "",
  fname: "",
  messageStatus: false,
  numberError: "",
  nameError: "",
  width: window.innerWidth,
  showThankYou: false,
  showThankYouMobile: false,
  showModal: false,
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleCloseModal = () => {
    this.setState({ showThankYou: false });
  };
  handleCloseModalMobile = () => {
    this.setState({ showThankYouMobile: false });
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (val === "" || (regex.test(val) && val.length < 12)) {
      this.setState({ [nam]: val });
    }
  };
  myChangeHandlerOne = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    this.validateName();
  };
  validate = () => {
    let numberError = "";
    if (this.state.phone.length < 10) {
      numberError = "Incomplete Number";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "Invalid Number";
    }

    if (numberError) {
      this.setState({ numberError });
      return false;
    }
    this.setState({ numberError: "" });
    return true;
  };
  // finalvalidate = () => {
  //   let numberError = "";

  //   if (this.state.phone.length !== 10) {
  //     numberError = "Number must be 10 digit";
  //   }
  //   if (numberError) {
  //     this.setState({ numberError });
  //     return false;
  //   }
  //   this.setState({ numberError: "" });
  //   return true;
  // };
  validateName = () => {
    let nameError = "";
    var pattern1 = new RegExp(/^[a-zA-Z\s]+$/g);
    if (!this.state.fname.match(pattern1)) {
      nameError = "Name is invalid";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    this.setState({ nameError: "" });
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const validate = this.validate();
    const validatename = this.validateName();
    // const finalvalidate = this.finalvalidate();
    if (validate && validatename) {
      const userObject = {
        phoneNumber: this.state.phone,
        mobileNumber: this.state.fname,
        fullName: "blank",
        city: "blank",
        treatmentType: "blank",
        currenturl: window.location.href,
      };
      axios
        .post(`${process.env.REACT_APP_API_PATH}`, userObject)
        .then((res) => {
          //console.log(res);
          let successMessage = document.querySelector("#footerSubmit");
          // here clear the state,
          this.setState(initialState);
          successMessage.innerHTML = "Get Started";
          setTimeout(() => {
            if (this.state.width <= 500) {
              this.setState({ showThankYouMobile: true });
              successMessage.innerHTML = "Get Started";
            } else {
              this.setState({ showThankYou: true });
              successMessage.innerHTML = "Get Started";
            }
          }, 1000);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const styleFooterLeftTitle = {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      paddingTop: 5,
      paddingBottom: 5,
      display: "flex",
      alignItems: "center",
      margin: "10px",
      color: "#924A91",
    };
    const styleFooterRightTitle = {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",

      display: "flex",
      alignItems: "center",
      marginLeft: "10px",
      color: "#4CAF50",
      margin: "10px",
    };
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section>
          <div
            className="fixed-action-btn"
            style={{ width: "98%" , right:5 , bottom:0}}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "100%",

                height: "51px",
              }}
            >
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  width: "48.50%",
                  cursor: "pointer",
                  height: "51px",
                  border: "1px solid #924A91",
                  borderRadius: "30px",
                  boxSizing: "border-box",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  paddingLeft: 10,
                }}
                href="tel:+918938935353"
              >
                <img src={callIcon} style={{ width: 30, marginLeft: "5%" }} />{" "}
                <p style={styleFooterLeftTitle}>Talk With Fertility Expert</p>
              </a>

              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  width: "48.50%",
                  cursor: "pointer",
                  height: "51px",
                  border: "1px solid #4CAF50",
                  borderRadius: "30px",
                  boxSizing: "border-box",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  paddingLeft: 10,
                }}
                href="https://wa.me/+918938935353?text=Hi%2C%20I%20am%20looking%20for%20fertility%20treatment.%20Please%20let%20me%20know%20more%20about%20IVF%2C%20IUI%2C%20Surrogacy%2C%20Egg%20Donor%20treatments"
              >
                <img
                  src={whatsappIcon}
                  style={{ width: 30, marginLeft: "5%" }}
                />{" "}
                <p style={styleFooterRightTitle}>Message Fertility Expert</p>
              </a>
            </div>
          </div>
          <div className="section section-footer">
            <div className="FooterMobileView">
              <div className="row">
                <div className="wrapMobileShape">
                  <div className="orangeShapeFooter"></div>
                </div>
                <div className="col s12 aboutCrysta">
                  <h4>About Crysta IVF</h4>
                  <p>
                    Crysta IVF provides access to world class Fertility
                    treatments at an affordable cost. Crysta IVF is the most
                    trusted fertility chain with more than 30 centres across 18+
                    cities in India. Our highly experienced team of fertility
                    specialists and embryologists provide Holistic &
                    Individualised Fertility Care with high IVF success rates.
                  </p>
                </div>
                <div className="col s12 hearFromUs">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "26px",
                      lineHeight: "39px",
                      width: "100%",
                      color: "#999299",
                    }}
                  >
                    Book Free IVF Consultation
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Name"
                        id="fname"
                        name="fname"
                        required
                        value={this.state.fname}
                        onChange={this.myChangeHandlerOne}
                        onKeyUp={this.myChangeHandlerOne}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.nameError}</div>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        name="phone"
                        id="phone"
                        required
                        value={this.state.phone}
                        onChange={this.myChangeHandler}
                        onKeyUp={this.myChangeHandler}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.numberError}</div>
                    {/* <input id="footerSubmit" type="submit" value="Submit" className="btn submitButton" /> */}
                    <button id="footerSubmit" className="btn submitButton">
                      Get Started
                    </button>
                    <p className="success-message"></p>
                  </form>
                </div>

                {/* <img className="footerLogo" alt="crystaLogo" src={FooterLogo}></img> */}

                <div className="col s12 SocialIconsDiv">
                  <div>
                    <Link
                      to={{ pathname: "https://www.facebook.com/crystacare" }}
                      target="_blank"
                    >
                      <img src={fb} alt="Best IVF Centre" className="fbImage" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/company/crystacare/",
                      }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={linkedinMobile} alt="Best IVF Centre" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://www.instagram.com/crystacare/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={insta} alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://twitter.com/CrystaCare" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={twitter} alt="Best IVF Centre" />
                    </Link>
                  </div>
                </div>

                <div className="col s12 disclaimer">
                  <span>
                    Disclaimer: As per "Pre-Conception & Pre-Natal Diagnostic
                    Techniques (Regulation and prevention of Misuse) Act, 1994",
                    Gender Selection and Determination is strictly prohibited
                    and is a criminal offence.
                  </span>
                </div>
                <div className="col s12 m12 copyright center">
                  <h4 className="">
                    &#169;<span> 2021 Crysta IVF All Rights Reserved.</span>
                  </h4>
                </div>
              </div>
              <div
                className="valign-wrapper mobileTcp"
                style={{ paddingBottom: 50 }}
              >
                <div>
                  <Link className="tcP" to="/termsandconditions">
                    T&C
                  </Link>
                </div>
                <div>
                  <Link className="tcP" to="/PrivacyPolicy">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <Modal
                open={this.state.showThankYouMobile}
                className="ThankYouMpbile"
              >
                <img
                  alt="Best IVF Centre"
                  src={faCutMobile}
                  onClick={this.handleCloseModalMobile}
                  className="faCutMobile"
                />
                <h4>Thank You!</h4>
                <p>
                  We have received your enquiry, you will get a call from our
                  patient support team shortly
                </p>
                <h6>For urgent queries, you can call us on</h6>
                <div className="callingNumberModal valign-wrapper">
                  <a href="tel:+918938935353" data-rel="external">
                    <h5>
                      <img src={callIcon} alt="Best IVF Centre" /> 893 893 5353
                    </h5>
                  </a>
                </div>
              </Modal>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section>
          {this.state.showModal && (
            <CustomModal
              onCloseModal={this.showModal}
              left={"30%"}
              right={"30%"}
              top={"20%"}
            />
          )}
          <div className="fixed-action-btn">
            <SimpleForm />
          </div>
          <div className="section section-footer">
            <div className="FooterDesktopView">
              <div className="row footerFirstRow">
                <div className="col m6">
                  <h4>Book Free IVF Consultation</h4>

                  <form onSubmit={this.onSubmit}>
                    <div className="input-field nameInput">
                      <input
                        id="name"
                        type="text"
                        name="fname"
                        className="validate name"
                        placeholder="Name"
                        required
                        value={this.state.fname}
                        onChange={this.myChangeHandlerOne}
                        onKeyUp={this.myChangeHandlerOne}
                      />
                    </div>
                    <div style={{ color: "red" }}>{this.state.nameError}</div>
                    <div className="input-field">
                      <input
                        id="mobileNumber"
                        type="text"
                        name="phone"
                        className="validate mobileNumber"
                        placeholder="Mobile Number"
                        required
                        value={this.state.phone}
                        onChange={this.myChangeHandler}
                        onKeyUp={this.myChangeHandler}
                      />
                    </div>
                    {this.state.numberError ? (
                      <div style={{ color: "red" }}>
                        {this.state.numberError}
                      </div>
                    ) : null}
                    <button id="footerSubmit" className="btn getStartedButton">
                      Get Started
                    </button>
                  </form>
                </div>
                <div className="col m6">
                  <img
                    src={footerImage}
                    alt="Best IVF Centre"
                    className="footerImage"
                  />
                </div>
                <div className="col m9">
                  <h5>About Crysta IVF</h5>
                  <p>
                    Crysta IVF provides access to world class Fertility
                    treatments at an affordable cost. Crysta IVF is the most
                    trusted fertility chain with more than 30 centres across 18+
                    cities in India. Our highly experienced team of fertility
                    specialists and embryologists provide Holistic &
                    Individualised Fertility Care with high IVF success rates.
                  </p>
                </div>
                <div className="col m3 desktopSocialIcon">
                  <div>
                    <Link
                      to={{ pathname: "https://www.facebook.com/crystacare" }}
                      target="_blank"
                    >
                      <img
                        src={fbicn}
                        alt="Best IVF Centre"
                        className="fbIconDesktop"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/company/crystacare/",
                      }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={linkedin} alt="Best IVF Centre" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://www.instagram.com/crystacare/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={instaicn} alt="Best IVF Centre" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://twitter.com/CrystaCare" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={twittericn} alt="Best IVF Centre" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row footerThirdRow">
                <div className="col m9 valign-wrapper">
                  <h6>
                    Disclaimer: As per "Pre-Conception & Pre-Natal Diagnostic
                    Techniques (Regulation and prevention of Misuse) Act, 1994",
                    Gender Selection and Determination is strictly prohibited
                    and is a criminal offence.
                  </h6>
                </div>
                <div className="col m3">
                  <h5>
                    <span>&#169; </span> 2021 Crysta IVF All Rights Reserved.
                  </h5>
                </div>
              </div>
              <div className="row" style={{ paddingBottom: 50 }}>
                <div className="col m9"></div>
                <div className="valign-wrapper">
                  <div style={{ paddingLeft: "83px" }}>
                    <Link className="tcP" to="/termsandconditions">
                      T&C
                    </Link>
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <Link className="tcP" to="/PrivacyPolicy">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
              <Modal
                open={this.state.showThankYou}
                className="ThankyouModalNew"
              >
                <div className="wrap">
                  {" "}
                  <div className="YellowBorderShape"></div>
                </div>
                <img
                  alt="Best IVF Centre"
                  src={faCut}
                  onClick={this.handleCloseModal}
                  className="CutIconModal"
                />
                <img
                  alt="Best IVF Centre"
                  src={thankModalImage}
                  className="thankModalImage"
                />
                <h4>Thank You!</h4>
                <h5>
                  We have received your enquiry, you will get a call from our
                  patient support team shortly
                </h5>
                <h6>For urgent queries, you can call us on</h6>
                <h3>
                  <img alt="Best IVF Centre" src={callIcon} />
                  <span>893 893 5353</span>
                </h3>
              </Modal>
            </div>
          </div>
        </section>
      );
    }
  }
}
