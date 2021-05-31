import React, { Component } from "react";
//import { useState } from 'react';
import callIcon from "../../images/Group 141.png";
import whatsappIcon from "../../images/Group 98.svg";
import "../../../node_modules/jquery/dist/jquery";
import "../../../node_modules/materialize-css/dist/js/materialize";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";
import "../FooterHindi/FooterHindi.css";
import fb from "../../images/facebook.png";
import print from "../../images/Pintrest.png";
import insta from "../../images/Insta.png";
import twitter from "../../images/tweet.png";
import footerImage from "../../images/footerImage.png";
import fbicn from "../../images/fb-icn.png";
import printicn from "../../images/pinterest.png";
import instaicn from "../../images/instagram.png";
import twittericn from "../../images/twitter.png";
import SimpleForm from "../Chatbots/SimpleForm";
import faCut from "../../images/closeModal.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import faCutMobile from "../../images/faCut.png";

import axios from "axios";
import "./FooterMarathi.css";

const initialState = {
  phone: "",
  fname: "",
  messageStatus: false,
  numberError: "",
  nameError: "",
  width: window.innerWidth,
  showThankYou: false,
  showThankYouMobile: false,
};

export default class FooterHindi extends Component {
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
      numberError = "अपूर्ण मोबाइल नंबर";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "अमान्य मोबाइल नंबर";
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
      nameError = "नाम अमान्य है";
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
          successMessage.innerHTML = "बुक करे";
          setTimeout(() => {
            if (this.state.width <= 500) {
              this.setState({ showThankYouMobile: true });
              successMessage.innerHTML = "बुक करे ";
            } else {
              this.setState({ showThankYou: true });
              successMessage.innerHTML = "बुक करे ";
            }
          }, 1000);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const styleFooterLeftTitle = {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",

      display: "flex",
      alignItems: "center",
      marginLeft: "10px",
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
    };
    if (isMobile) {
      return (
        <section>
          <div
            className="fixed-action-btn"
            style={{ width: "100%", bottom: 0, right: 0, left: 0 }}
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
                  width: "49.50%",
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
              <div
                style={{
                  backgroundColor: "white",
                  width: "1%",
                  height: "51px",
                }}
              ></div>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  width: "49.50%",
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
            <div className="FooterMobileViewHindi">
              <div className="row">
                {/* <div className="orangeShapeFooter"></div> */}
                <div className="col s12 aboutCrystaHindi">
                  <h4>Crysta IVF बद्दल </h4>
                  <p>
                    Crysta IVF परवडणार्‍या किंमतीवर जागतिक स्तरावरील वंधत्व
                    उपचार प्रदान करते. क्रिस्टा आयव्हीएफ ही सर्वात विश्वासार्ह
                    वंध्यत्व श्रृंखला आहे जी भारतातील 18+ शहरांमध्ये 30 हून अधिक
                    केंद्रे आहेत. आमची वंध्यत्व क्षमता तज्ञ आणि
                    भ्रूणशास्त्रज्ञांची अत्यंत अनुभवी कार्यसंघ उच्च आयव्हीएफ
                    यशाचे दर सह होलिस्टिक आणि वैयक्तिक वंध्यत्व क्षमता प्रदान
                    करते.
                  </p>
                </div>
                <div className="col s12 hearFromUs">
                  <h4 className="">
                    विनामूल्य आयव्हीएफ (IVF) सल्लामसलती साठी नोंद करा{" "}
                  </h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="नाव "
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
                        placeholder="मोबाइल नंबर "
                        name="phone"
                        id="phone"
                        required
                        value={this.state.phone}
                        onChange={this.myChangeHandler}
                        onKeyUp={this.myChangeHandler}
                      />
                    </div>
                    <div style={{ color: "red", marginBottom: "5px" }}>
                      {this.state.numberError}
                    </div>
                    {/* <input id="footerSubmit" type="submit" value="Submit" className="btn submitButton" /> */}
                    <button id="footerSubmit" className="btn submitButton">
                      बुक करे
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
                      <img
                        src={fb}
                        alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                        className="fbImage"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://in.pinterest.com/crystaivf/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={print} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://www.instagram.com/crystacare/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={insta} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://twitter.com/CrystaCare" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img src={twitter} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                    </Link>
                  </div>
                </div>

                <div className="col s12 disclaimer">
                  <span>
                    अस्वीकरणः "प्री-कॉन्सेप्टेशन & प्री-नेटल डायग्नोस्टिक
                    टेक्निक्ज (गैरवापराचे नियमन आणि प्रतिबंध) अधिनियम, १ 199
                    199" "नुसार लिंग निवड आणि निर्धारण कठोरपणे प्रतिबंधित आहे
                    आणि गुन्हेगारी गुन्हा आहे
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
                style={{ paddingBottom: 40 }}
              >
                <div>
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

              <Modal
                open={this.state.showThankYouMobile}
                className="ThankYouMpbile"
              >
                <img
                  alt="भारत में बेस्ट आई वी एफ सेंटर"
                  src={faCutMobile}
                  onClick={this.handleCloseModalMobile}
                  className="faCutMobile"
                />
                <h4>शुक्रिया!</h4>
                <p>
                  हमने आपका सवाल प्राप्त कर लिया है, आपको जल्द ही हमारी
                  फर्टिलिटी सहायता टीम संपर्क करेगी{" "}
                </p>
                <h6>तत्काल प्रश्नों के लिए, आप हमें कॉल कर सकते हैं</h6>
                <div className="callingNumberModal valign-wrapper">
                  <a href="tel:+918938935353" data-rel="external">
                    <h5>
                      <img src={callIcon} alt="भारत में बेस्ट आई वी एफ सेंटर" />{" "}
                      893 893 5353
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
          <div className="fixed-action-btn">
            <SimpleForm />
          </div>
          <div className="section section-footer">
            <div className="FooterDesktopViewHindi">
              <div className="row footerFirstRow">
                <div className="col m6">
                  <h4 className="FooHeadMarathi">
                    फ्विनामूल्य IVF सल्लामसलती साठी नोंद करा{" "}
                  </h4>

                  <form onSubmit={this.onSubmit}>
                    <div className="input-field nameFieldFooter">
                      <input
                        id="name"
                        type="text"
                        name="fname"
                        className="validate name"
                        placeholder="नाव "
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
                        placeholder="मोबाइल नंबर"
                        required
                        value={this.state.phone}
                        onChange={this.myChangeHandler}
                        onKeyUp={this.myChangeHandler}
                      />
                    </div>
                    {this.state.numberError ? (
                      <div style={{ color: "red", marginBottom: "5px" }}>
                        {this.state.numberError}
                      </div>
                    ) : null}
                    <button id="footerSubmit" className="btn getStartedButton">
                      सुरु करूया
                    </button>
                  </form>
                </div>
                <div className="col m6">
                  <img
                    src={footerImage}
                    alt=" भारत में बेस्ट आईवीएफ (IVF) डॉक्टर"
                    className="footerImage"
                  />
                </div>
                <div className="col m9">
                  <h5>क्रिस्टा आयव्हीएफ बद्दल</h5>
                  <p>
                    Crysta IVF परवडणार्‍या किंमतीवर जागतिक स्तरावरील वंधत्व
                    उपचार प्रदान करते. क्रिस्टा आयव्हीएफ ही सर्वात विश्वासार्ह
                    वंध्यत्व श्रृंखला आहे जी भारतातील 18+ शहरांमध्ये 30 हून अधिक
                    केंद्रे आहेत. आमची वंध्यत्व क्षमता तज्ञ आणि
                    भ्रूणशास्त्रज्ञांची अत्यंत अनुभवी कार्यसंघ उच्च आयव्हीएफ
                    यशाचे दर सह होलिस्टिक आणि वैयक्तिक वंध्यत्व क्षमता प्रदान
                    करते.
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
                        alt=" भारत में बेस्ट आईवीएफ (IVF) डॉक्टर"
                        className="fbIconDesktop"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://in.pinterest.com/crystaivf/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img
                        src={printicn}
                        alt="भारत में आईवीएफ (IVF) का खर्चा"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://www.instagram.com/crystacare/" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img
                        src={instaicn}
                        alt="भारत में आईवीएफ (IVF) का खर्चा"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={{ pathname: "https://twitter.com/CrystaCare" }}
                      className="socialIcon"
                      target="_blank"
                    >
                      <img
                        src={twittericn}
                        alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row footerThirdRow">
                <div className="col m9 valign-wrapper">
                  <h6>
                    अस्वीकरणः "प्री-कॉन्सेप्टेशन & प्री-नेटल डायग्नोस्टिक
                    टेक्निक्ज (गैरवापराचे नियमन आणि प्रतिबंध) अधिनियम, १ 199
                    199" "नुसार लिंग निवड आणि निर्धारण कठोरपणे प्रतिबंधित आहे
                    आणि गुन्हेगारी गुन्हा आहे
                  </h6>
                </div>
                <div className="col m3">
                  <h5>
                    <span>&#169; </span> 2021 Crysta IVF All Rights Reserved.
                  </h5>
                </div>
              </div>
              <div className="valign-wrapper mobileTcp">
                <div>
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
              <Modal
                open={this.state.showThankYou}
                className="ThankyouModalNew"
              >
                <div className="wrap">
                  {" "}
                  <div className="YellowBorderShape"></div>
                </div>
                <img
                  alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                  src={faCut}
                  onClick={this.handleCloseModal}
                  className="CutIconModal"
                />
                <img
                  alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                  src={thankModalImage}
                  className="thankModalImage"
                />
                <h4>शुक्रिया!</h4>
                <h5>
                  हमने आपका सवाल प्राप्त कर लिया है, आपको जल्द ही हमारी
                  फर्टिलिटी सहायता टीम संपर्क करेगी
                </h5>
                <h6>तत्काल प्रश्नों के लिए, आप हमें कॉल कर सकते हैं</h6>
                <h3>
                  <img alt=" भारत में बेस्ट आई वी एफ सेंटर" src={callIcon} />
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
