import React, { Component } from "react";
import { Link } from "react-router-dom";
import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/callIconOrange.png";
import CallIconDesktop from "../../images/CallIcon.png";

import "./CityBanner.css";
import axios from "axios";
import CustomModal from "../CustomModal/CustomModal";
import faCut from "../../images/closeModal.png";
import faCutMobile from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import chainOne from "../../images/chainOne.png";
import chainTwo from "../../images/chainTwo.png";
import chainThree from "../../images/chainThree.png";
import { CityBannerContext } from "../../cityBannerContext";
import { Helmet } from "react-helmet";
import "../header.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import kareenaVideo from "../../video/Kareena-Kapoor-Khan-endorses-Crysta-IVF.mp4";
import $ from "jquery";

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
const properties = {
  arrows: false,
  canSwipe: true,
};

export default class CityBanner extends Component {
  static contextType = CityBannerContext;
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    $(document).ready(() => {
      window.$("video").bind("contextmenu", function() {
        return false;
      });
    });
  }

  handleCloseModal = () => {
    this.setState({ showThankYou: false });
  };
  handleCloseModalMobile = () => {
    this.setState({ showThankYouMobile: false });
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 80) {
      this.setState({ background: "white" });
    } else {
      this.setState({ background: "transparent" });
    }
  };

  // handlePopUp = () => {
  //   this.setState({ showModal: true });
  // };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.listenScrollEvent);
    setTimeout(this.context.slideLeft, 3000);
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
            successMessage.innerHTML = "Submitted";
            this.setState({ showThankYouMobile: true });
          } else {
            successMessage.innerHTML = "Sent";
            this.setState({ showThankYou: true });
          }
          setTimeout(() => {
            successMessage.innerHTML = "Submit";
          }, 3000);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    const { width } = this.state;
    //   const { mainData, slideLeft, slideRight } = this.context;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-BannerNew">
          <Helmet>
            <title>{`Best Fertility & IVF Centre in ${this.props.cityname} | Infertility treatment`}</title>
            <meta
              name="description"
              content={`Get IVF treatment at best IVF centre in ${this.props.cityname} at affordable cost. Crysta IVF clinic is one of the pioneer chains of fertility clinics in ${this.props.cityname} that strives to provide high-standard treatments for male and female infertility with high success rates. `}
            />
            <meta
              name="keywords"
              content={`Best Fertility Centre, IVF Centre in Delhi, Infertility treatment in ${this.props.cityname}, fertility clinic in ${this.props.cityname}, IVF success rates in ${this.props.cityname}, best IVF doctors in ${this.props.cityname}, best IVF clinics in ${this.props.cityname}`}
            />
          </Helmet>
          <div className="BannerMobileViewCity">
            <div className="navbar-fixed">
              <nav>
                <div className="nav-wrapper">
                  <div className=" flex valign-wrapper">
                    <div className="">
                      <Link to="/" className="brand-logo left">
                        <img
                          className=""
                          alt="Best IVF Centre"
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
                            <img alt="Best IVF Centre" src={CallIcon}></img>
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
                <h1 className="cityHeadingMobile">
                  Best IVF Centre in {this.props.cityname}
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
                          High{" "}
                          <span>
                            {" "}
                            IVF <br></br> Success Rates
                          </span>
                        </h6>
                      </div>
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "37px" }}
                          className="purpleSeparatorCity"
                        ></div>
                        <h6>
                          Experienced{" "}
                          <span>
                            IVF <br></br> Doctors in {this.props.cityname}
                          </span>
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
                          Affordable{" "}
                          <span>
                            {" "}
                            IVF <br></br> treatment plans
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
                          World class <br></br> <span>Fertility Treatment</span>
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
                      <CarouselItem
                        key={item.name}
                        bold={item.bold}
                        normal={item.normal}
                        cityWrite={item.cityWrite}
                        city={this.props.cityname}
                        index={index}
                      />
                    ))}
                  </div>
                </Swipe> */}
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

            <div className="banner-image">
              {/* <img className="responsive-img" src={banner} alt="" /> */}
              <div className="row"></div>
              <div className="row banner-div">
                <h4>Get Free IVF Consultation</h4>
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
                      placeholder="Name"
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
                      placeholder="Enter Mobile Number"
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
                    className="buttona btn modal-trigger"
                    href="#modal6"
                  >
                    Submit
                  </button>
                </form>
                <p style={{ marginTop: "8px" }}>
                  *We respect your privacy and don’t share your personal
                  information with anyone.
                </p>
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
            <title>{`Best Fertility & IVF Centre in ${this.props.cityname} | Infertility treatment`}</title>
            <meta
              name="description"
              content={`Get IVF treatment at best IVF centre in ${this.props.cityname} at affordable cost. Crysta IVF clinic is one of the pioneer chains of fertility clinics in ${this.props.cityname} that strives to provide high-standard treatments for male and female infertility with high success rates. `}
            />
            <meta
              name="keywords"
              content={`Best Fertility Centre, IVF Centre in Delhi, Infertility treatment in ${this.props.cityname}, fertility clinic in ${this.props.cityname}, IVF success rates in ${this.props.cityname}, best IVF doctors in ${this.props.cityname}, best IVF clinics in ${this.props.cityname}`}
            />
          </Helmet>
          <div className="BannerDesktopViewCity">
            <div className="navbar-fixed">
              <nav
                className="navbar active"
                style={{ background: this.state.background }}
              >
                <div className="nav-wrapper">
                  <Link to="/" className="brand-logo">
                    <img
                      className=""
                      alt="Best IVF Centre"
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
                            alt="Best IVF Centre"
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
                        Book Free Consultation
                      </button>
                    </li>

                    {this.state.showModal && (
                      <CustomModal
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
              <div className="DesktopBannerShape"></div>
              <div className="col m6">
                <h5>Best IVF Centre in {this.props.cityname}</h5>

                <div className="bannerNumbers row">
                  <div className="valign-wrapper col m3 NumbersData">
                    <div
                      style={{ width: "37px" }}
                      className="orangeSeparatorCity"
                    ></div>
                    <h2>
                      High <span> IVF Success Rates</span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m3 NumbersData">
                    <div className="purpleSeparatorCity"></div>
                    <h2>
                      Experienced{" "}
                      <span>IVF Doctors in {this.props.cityname}</span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m3 NumbersData">
                    <div
                      style={{ width: "45px" }}
                      className="orangeSeparatorCity"
                    ></div>
                    <h2>
                      Affordable <span> IVF treatment plans</span>
                    </h2>
                  </div>

                  {/* <div className="valign-wrapper col m3 NumbersData">
                    <div className="purpleSeparator"></div>
                    <h2>
                    World class <span> Fertility Treatment</span>
                    </h2>
                  </div> */}
                </div>
                <div className="row">
                  <div className="greyDiv" style={{ height: "280px" }}>
                    <div className="row"></div>
                    <h2>Book Free IVF Consultation</h2>
                    <form onSubmit={this.onSubmit}>
                      <div className="row">
                        <div className="input-field nameInputField col m6">
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

                        <div className="input-field mobileInputField col m6">
                          <input
                            id="mobile_number"
                            type="text"
                            placeholder="Mobile Number"
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
                      <button id="numbersubmit" className="btn btnSubmit">
                        Submit
                      </button>
                    </form>
                    <h6 style={{ fontSize: "12px" }}>
                      *We respect your privacy and don’t share your personal
                      <br />
                      information with anyone.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col m6">
                {/* <img
                  src={dBanner}
                  alt="Best IVF Centre"
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
              <div className="col m12 bannerLastDiv">
                <h5>India’s most Trusted Fertility Chain </h5>
                <div className="row bannerCards">
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <div>
                          <img src={chainOne} alt="Best IVF Centre" />
                        </div>
                      </div>
                      <div className="card-content">
                        <p>Treatment Success Rates</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img src={chainTwo} alt="Best IVF Centre" />
                      </div>
                      <div className="card-content">
                        <p>Centres in India</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img src={chainThree} alt="Best IVF Centre" />
                      </div>
                      <div className="card-content">
                        <p>Years of experience</p>
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
