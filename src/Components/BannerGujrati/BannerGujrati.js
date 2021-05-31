import React, { Component } from "react";

import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/callIconOrange.png";
import CallIconDesktop from "../../images/CallIcon.png";
//import dBanner from "../../images/mainBanner.jpg";
import "../../Components/CityBannerHindi/CityBannerHindi.css";
import "./BannerGujarati.css";
import axios from "axios";
import CustomModalHindi from "../CustomModalGujarati/CustomModalGujarati";
import faCut from "../../images/closeModal.png";
import faCutMobile from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import chainOne from "../../images/chainOne.png";
import chainTwo from "../../images/chainTwo.png";
import chainThree from "../../images/chainThree.png";
import { CityBannerContextHindi } from "../../cityBannerContextHindi";
import { Helmet } from "react-helmet";
import { Slide } from "react-slideshow-image";
import kareenaVideo from "../../video/Kareena-Kapoor-Khan-endorses-Crysta-IVF.mp4";
import { Link } from "react-router-dom";
const properties = {
  arrows: false,
  canSwipe: true,
};

const initialState = {
  phone: "",
  fname: "",
  showModal: false,
  phoneError: "",
  width: window.innerWidth,
  showThankYou: false,
  showThankYouMobile: false,
  background: "transparent",
};

export default class BannerGujrati extends Component {
  static contextType = CityBannerContextHindi;
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 80) {
      this.setState({ background: "white" });
    } else {
      this.setState({ background: "transparent" });
    }
  };

  handleCloseModal = () => {
    this.setState({ showThankYou: false });
  };
  handleCloseModalMobile = () => {
    this.setState({ showThankYouMobile: false });
  };
  // handlePopUp = () => {
  //   this.setState({ showModal: true });
  // };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.listenScrollEvent);
    //setTimeout(this.handlePopUp, 30000);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
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
      numberError = "અધૂરો મોબાઇલ નંબર";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "અધૂરો મોબાઇલ નંબર";
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
      nameError = "નામ અમાન્ય છે";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    this.setState({ nameError: "" });
    return true;
  };

  // finalValidate = () => {
  //   let numberError = "";
  //   if (this.state.phone.length < 10) {
  //     numberError = "Number must be 10 digit";
  //   }

  //   if (numberError) {
  //     this.setState({ numberError });
  //     return false;
  //   }
  //   this.setState({ numberError: "" });
  //   return true;
  // };

  onSubmit = (e) => {
    e.preventDefault();
    const validate = this.validate();
    const validatename = this.validateName();
    // const finalvalidate = this.finalValidate();
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
          let successMessage = document.querySelector("#numbersubmit");
          this.setState(initialState);

          if (this.state.width <= 500) {
            successMessage.innerHTML = " સબમિટ કરો";
            this.setState({ showThankYouMobile: true });
          } else {
            successMessage.innerHTML = " સબમિટ કરો";
            this.setState({ showThankYou: true });
          }
          setTimeout(() => {
            successMessage.innerHTML = " સબમિટ કરો";
          }, 3000);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    const { width } = this.state;
    //  const { mainData, slideLeft, slideRight } = this.context;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-BannerNew">
          <Helmet>
            <title>{`ગુજરાત માં શ્રેષ્ઠ પ્રજનન અને આઈવીએફ (IVF) કેન્દ્ર | વંધ્યત્વ સારવાર `}</title>
            <meta
              name="description"
              content={`મેટા વર્ણન: પોષણક્ષમ કિંમતે ગુજરાતના શ્રેષ્ઠ ક્રિસ્ટા આઇવીએફ (IVF) કેન્દ્ર પર આઇવીએફ (IVF) સારવાર મેળવો.  આઈવીએફ (IVF) ક્લિનિક એ ગુજરાતના પ્રજનન ક્લિનિક્સની એક અગ્રણી સાંકળો છે જે પ્રદાન કરવા માટે પ્રયત્નશીલ છે ઉચ્ચ સફળતા દર સાથે પુરુષ અને સ્ત્રી વંધ્યત્વ માટે ઉચ્ચ-ધોરણની સારવાર. `}
            />
            <meta
              name="keywords"
              content={`મેટા કીવર્ડ્સ: બેસ્ટ ફર્ટિલિટી સેન્ટર, ગુજરાતનું આઈવીએફ (IVF) સેન્ટર,ગુજરાત માં વંધ્યત્વ સારવાર,ગુજરાતમાં ફર્ટિલિટી ક્લિનિક, ગુજરાતમાં આઈવીએફ (IVF) ના સફળતા દર, ગુજરાતમાં શ્રેષ્ઠ આઇવીએફ (IVF) ડોકટરો, શ્રેષ્ઠ આઈવીએફ (IVF) ગુજરાતમાં ક્લિનિક્સ ગુજરાત નું શ્રેષ્ઠ  કેન્દ્ર આઈવીએફ (IVF) પસંદ કરો `}
            />
          </Helmet>
          <div className="BannerMobileViewHindi">
            <div className="navbar-fixed">
              <nav>
                <div className="nav-wrapper">
                  <div className=" flex valign-wrapper">
                    <div className="">
                      <Link to="/" className="brand-logo left">
                        <img
                          className=""
                          alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                          src={CrystaLogo}
                        ></img>
                      </Link>
                    </div>
                    <div className="">
                      <div className="roundedCallingDiv center valign-wrapper">
                        <a
                          className="numberMobileView"
                          href="tel:+918938935353"
                          data-rel="external"
                        >
                          <span>
                            <img
                              alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                              src={CallIcon}
                            ></img>
                          </span>{" "}
                          893 893 5353
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="paddingDiv">
              <div className="row ">
                <h1 className="HeadingMobileHindi">
                  ગુજરાતનું બેસ્ટ આઈવીએફ (IVF) સેન્ટર{" "}
                </h1>
                <div className="slide-container">
                  <Slide {...properties}>
                    <div className="each-slide valign-wrapper">
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "37px" }}
                          className="orangeSeparatorCity"
                        ></div>
                        <h6>
                          ઉચ્ચ <span>આઈવીએફ (IVF) સફળતા દરો </span>
                        </h6>
                      </div>
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "37px" }}
                          className="purpleSeparatorCity"
                        ></div>
                        <h6>
                          ગુજરાતમાં અનુભવી <span> આઈવીએફ (IVF) ડૉક્ટર્સ</span>
                        </h6>
                      </div>
                    </div>
                    <div className="each-slide valign-wrapper">
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "37px" }}
                          className="orangeSeparatorCity"
                        ></div>
                        <h6>
                          સસ્તું આઈવીએફ (IVF){" "}
                          <span>
                            {" "}
                            <br></br> સારવાર યોજનાઓ{" "}
                          </span>
                        </h6>
                      </div>
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "45px" }}
                          className="purpleSeparatorCity"
                        ></div>

                        <h6>
                          {" "}
                          વર્લ્ડ ક્લાસ<br></br>{" "}
                          <span>ફર્ટિલિટી ટ્રીટમેન્ટ</span>
                        </h6>
                      </div>
                    </div>
                  </Slide>
                </div>
                {/* <Swipe onSwipeLeft={slideLeft} onSwipeRight={slideRight}>
                  <div
                    className="slides"
                    style={{
                      paddingLeft: "0",
                      paddingRight: "0",
                      gridTemplateColumns: "repeat(4,140px)",
                      gridTemplateRows: "60px",
                      
                    }}
                  >
                    {mainData.map((item, index) => (
                      <CarouselItemHindi
                        key={item.name}
                        bold={item.bold}
                        normal={item.normal}
                        cityWrite={item.cityWrite}
                        city={this.props.cityname}
                        index={index}
                      />
                    ))}
                  </div>
                </Swipe>  */}
                {/* <div className="col s12 sucessDiv">
                  <div className="row">
                    <div className="col s4 center vline">
                      <h5>85%</h5>
                      <h6>IVF Success Rate</h6>
                    </div>
                    <div className="col s4 center vline">
                      <h5>18+</h5>
                      <h6>Cities all over India</h6>
                    </div>
                    <div className="col s4 center">
                      <h5>20+</h5>
                      <h6>Years of experience</h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="banner-imageHindi">
              {/* <img className="responsive-img" src={banner} alt="" /> */}
              <div className="row"></div>
              <div className="row banner-divHindi">
                <h4>બુક ફ્રી આઈવીએફ (IVF) કન્સલ્ટેશન </h4>
                {/* <form onSubmit={this.onSubmit}>
                                    <div className="input-field">
                                        <input type="text" name="phone1" required value={this.state.phone} onChange={this.numberValidate} onKeyUp={this.numberValidate} placeholder="Enter Mobile Number" />
                                    </div>
                                    <div style={{ color: 'red', paddingLeft: '10px' }}>{this.state.numberError}</div>
                                    <button className="btn buttona" id="numbersubmit" type="submit" name="action">Submit</button>
                                </form> */}
                <form onSubmit={this.onSubmit}>
                  <div className="input-field mobileNameField">
                    <input
                      id="name"
                      type="text"
                      name="fname"
                      className="validate name"
                      placeholder="નામ"
                      required
                      value={this.state.fname}
                      onChange={this.myChangeHandlerOne}
                      onKeyUp={this.myChangeHandlerOne}
                    />
                  </div>
                  <div
                    style={{
                      color: "red",
                      marginTop: "-20px",
                      paddingLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.nameError}
                  </div>
                  <div className="input-field mobilePhoneField">
                    <input
                      id="mobile_number"
                      type="text"
                      placeholder="નંબર"
                      name="phone"
                      required
                      value={this.state.phone}
                      onChange={this.myChangeHandler}
                      onKeyUp={this.myChangeHandler}
                    />
                  </div>
                  {this.state.numberError ? (
                    <div
                      style={{
                        color: "red",
                        marginTop: "-20px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {this.state.numberError}
                    </div>
                  ) : null}
                  <button
                    id="numbersubmit"
                    className="buttona btn modal-trigger bannerSubmitGujarati"
                    href="#modal6"
                  >
                    સબમિટ કરો
                  </button>
                </form>
                <p>
                  *અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ અને તમારી વ્યક્તિગત માહિતી
                  કોઈની સાથે શેર કરતા નથી.
                </p>
              </div>
            </div>
            <Modal
              open={this.state.showThankYouMobile}
              className="ThankYouMpbile"
            >
              <img
                alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                src={faCutMobile}
                onClick={this.handleCloseModalMobile}
                className="faCutMobile"
              />
              <h4>આભાર!</h4>
              <p>
                અમને તમારી ઇન્કવાયરી મળી છે, તમને ટૂંક સમયમાં અમારી સપોર્ટ ટીમ
                સંપર્ક કરશે
              </p>
              <h6>તાત્કાલિક પ્રશ્નો માટે, તમે અમને સંપર્ક કરી શકો છો.</h6>
              <div className="callingNumberModal valign-wrapper">
                <a href="tel:+918938935353" data-rel="external">
                  <h5>
                    <img
                      src={callIcon}
                      alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                    />{" "}
                    893 893 5353
                  </h5>
                </a>
              </div>
            </Modal>
          </div>
          {/* <div id="modal6" className="modal ThankYouMpbile">
            <div className="modal-content">
              <img alt="" src={faCut} className="faCutMobile" />
              <h4>Thank You!</h4>
              <p>We have received your enquiry, you will get a call from our patient support team shortly</p>
              <h6>For urgent queries, you can call us on</h6>
              <div className="callingNumberModal valign-wrapper">
                <a href="tel:+918938935353" data-rel="external">
                  <h5>
                    <img src={callIcon} alt="" /> 893 893 5353
                </h5>
                </a>
              </div>
            </div>
          </div> */}
        </section>
      );
    } else {
      return (
        <section className="section-BannerNew">
          <Helmet>
            <title>{`ગુજરાત માં શ્રેષ્ઠ પ્રજનન અને આઈવીએફ (IVF) કેન્દ્ર | વંધ્યત્વ સારવાર `}</title>
            <meta
              name="description"
              content={`મેટા વર્ણન: પોષણક્ષમ કિંમતે ગુજરાતના શ્રેષ્ઠ ક્રિસ્ટા આઇવીએફ (IVF) કેન્દ્ર પર આઇવીએફ (IVF) સારવાર મેળવો.  આઈવીએફ (IVF) ક્લિનિક એ ગુજરાતના પ્રજનન ક્લિનિક્સની એક અગ્રણી સાંકળો છે જે પ્રદાન કરવા માટે પ્રયત્નશીલ છે ઉચ્ચ સફળતા દર સાથે પુરુષ અને સ્ત્રી વંધ્યત્વ માટે ઉચ્ચ-ધોરણની સારવાર. `}
            />
            <meta
              name="keywords"
              content={`મેટા કીવર્ડ્સ: બેસ્ટ ફર્ટિલિટી સેન્ટર, ગુજરાતનું આઈવીએફ (IVF) સેન્ટર,ગુજરાત માં વંધ્યત્વ સારવાર,ગુજરાતમાં ફર્ટિલિટી ક્લિનિક, ગુજરાતમાં આઈવીએફ (IVF) ના સફળતા દર, ગુજરાતમાં શ્રેષ્ઠ આઇવીએફ (IVF) ડોકટરો, શ્રેષ્ઠ આઈવીએફ (IVF) ગુજરાતમાં ક્લિનિક્સ ગુજરાત નું શ્રેષ્ઠ  કેન્દ્ર આઈવીએફ (IVF) પસંદ કરો `}
            />
          </Helmet>
          <div className="BannerDesktopViewHindi">
            <div className="DesktopBannerShape"></div>
            <div className="navbar-fixed">
              <nav
                className="navbar active"
                style={{ background: this.state.background }}
              >
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo">
                    <img
                      className=""
                      alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                      src={CrystaLogo}
                    ></img>
                  </Link>

                  <ul className="right rightNavbar">
                    <li>
                      <a
                        className="CallNumber"
                        href="tel:+918938935353"
                        data-rel="external"
                      >
                        <span>
                          <img
                            id="call"
                            alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના"
                            src={CallIconDesktop}
                          ></img>
                        </span>{" "}
                        893 893 5353
                      </a>
                    </li>

                    {/* <li><AnchorLink href="#modal1" className="bookFreeButton btn modal-trigger">Book Free Consultation</AnchorLink></li> */}
                    <li>
                      <button
                        className="bookFreeButton btn"
                        onClick={this.showModal}
                      >
                        બુક ફ્રી IVF કન્સલ્ટેશન
                      </button>
                    </li>

                    {this.state.showModal && (
                      <CustomModalHindi
                        onCloseModal={this.showModal}
                        left={"30%"}
                        right={"30%"}
                        top={"20%"}
                      />
                    )}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="row bannerContent">
              <div className="col m6">
                <h5>ગુજરાતનું બેસ્ટ આઈવીએફ (IVF) સેન્ટર </h5>

                <div className="bannerNumbersHindi row">
                  <div className="valign-wrapper col m4">
                    <div className="orangeSeparatorHindi"></div>
                    <h2>
                      ઉચ્ચ{" "}
                      <span>
                        {" "}
                        આઈવીએફ (IVF) <br></br> સફળતા દરો{" "}
                      </span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m4">
                    <div className="purpleSeparatorHindi"></div>
                    <h2>
                      ગુજરાતમાં અનુભવી
                      <span> આઈવીએફ (IVF) ડૉક્ટર્સ </span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m4">
                    <div className="orangeSeparatorHindi"></div>
                    <h2>
                      સસ્તું
                      <span>
                        {" "}
                        આઈવીએફ (IVF) <br></br> સારવાર યોજનાઓ
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="greyDiv">
                    <div className="row"></div>
                    <p>બુક ફ્રી આઈવીએફ (IVF) કન્સલ્ટેશન </p>
                    <form onSubmit={this.onSubmit}>
                      <div className="row">
                        <div className="input-field nameInputField col m6">
                          <input
                            id="name"
                            type="text"
                            name="fname"
                            className="validate name"
                            placeholder="નામ "
                            required
                            value={this.state.fname}
                            onChange={this.myChangeHandlerOne}
                            onKeyUp={this.myChangeHandlerOne}
                          />
                        </div>

                        <div className="input-field mobileInputField col m6">
                          <input
                            id="mobile_number"
                            type="text"
                            placeholder="નંબર "
                            name="phone"
                            required
                            value={this.state.phone}
                            onChange={this.myChangeHandler}
                            onKeyUp={this.myChangeHandler}
                          />
                        </div>
                        <div className="error-wrapper">
                          <div
                            className=""
                            style={{
                              color: "red",
                              paddingLeft: "80px",
                              marginTop: "-20px",
                              marginBottom: "5px",
                              flexBasis: "50%",
                            }}
                          >
                            {this.state.nameError}
                          </div>
                          {this.state.numberError ? (
                            <div
                              className=""
                              style={{
                                color: "red",
                                paddingLeft: "0px",
                                marginTop: "-20px",
                                marginBottom: "5px",
                                flexBasis: "50%",
                              }}
                            >
                              {this.state.numberError}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <button
                        id="numbersubmit"
                        className="btn btnSubmit bannerSubmitGujarati"
                      >
                        સબમિટ કરો
                      </button>
                    </form>
                    <h6>
                      અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ અને તમારી વ્યક્તિગત
                      માહિતી કોઈની સાથે શેર કરતા નથી.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col m6">
                {/* <img
                  src={dBanner}
                  alt="Mother holding baby"
                  className="desktopBannerImage"
                /> */}
                <div className="video-container">
                  {/* <iframe src="https://www.youtube.com/embed/ruOxU8TDcrk?rel=0" title="Crysta IVF" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                  <video
                    width="100%"
                    height="300"
                    controls
                    disablePictureInPicture
                    controlsList="nodownload"
                  >
                    <source src={kareenaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="col m12 bannerLastDivHindi">
                <h5 className="bannerLastDivHeading">
                  ભારતની સૌથી વિશ્વસનીય ઇંફેરનીલીટી ની સાંકળ
                </h5>
                <div className="row bannerCardsHindi">
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img src={chainOne} alt="નવીનતમ આઇવીએફ તકનીક" />
                      </div>
                      <div className="card-content">
                        <p>આઈવીએફ (IVF) સફળતા દરો</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img src={chainTwo} alt="નવીનતમ આઇવીએફ તકનીક" />
                      </div>
                      <div className="card-content">
                        <p>ભારતમાં કેન્દ્રો</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img src={chainThree} alt="નવીનતમ આઇવીએફ તકનીક" />
                      </div>
                      <div className="card-content">
                        <p>વર્ષો નો અનુભવ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal open={this.state.showThankYou} className="ThankyouModalNew">
              <div className="wrap">
                {" "}
                <div className="YellowBorderShape"></div>
              </div>
              <img
                alt="નવીનતમ આઇવીએફ તકનીક"
                src={faCut}
                onClick={this.handleCloseModal}
                className="CutIconModal"
              />
              <img
                alt="નવીનતમ આઇવીએફ તકનીક"
                src={thankModalImage}
                className="thankModalImage"
              />
              <h4>આભાર!</h4>
              <h5>
                અમને તમારી ઇન્કવાયરી મળી છે, તમને ટૂંક સમયમાં અમારી સપોર્ટ ટીમ
                સંપર્ક કરશે
              </h5>
              <h6>તાત્કાલિક પ્રશ્નો માટે, તમે અમને સંપર્ક કરી શકો છો.</h6>
              <h3>
                <img alt="નવીનતમ આઇવીએફ તકનીક" src={callIcon} />
                <span>893 893 5353</span>
              </h3>
            </Modal>
          </div>
          {/* <div id="modal5" className="modal ThankyouModalNew">
            <div className="modal-content">
              <img alt="" src={faCut} className="CutIconModal modal-close" onClick={() => this.setState({ showThankYou: false })} />
              <img alt="" src={thankModalImage} className="thankModalImage" />
              <h4>Thank You!</h4>
              <h5>We have received your enquiry, you will get a call from our patient support team shortly</h5>
              <h6>For urgent queries, you can call us on</h6>
              <h3><img alt="" src={callIcon} /><span>893 893 5353</span></h3>
            </div>
          </div> */}
        </section>
      );
    }
  }
}
