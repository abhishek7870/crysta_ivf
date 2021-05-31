import React, { Component } from "react";

import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/callIconOrange.png";
import CallIconDesktop from "../../images/CallIcon.png";
//import dBanner from "../../images/mainBanner.jpg";
import "./BannerNew.css";
//import thankYouModal from '../../images/thankModalImage.png';
import axios from "axios";
import CustomModal from "../CustomModal/CustomModal";
import faCut from "../../images/closeModal.png";
import faCutMobile from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import kareenaVideo from "../../video/Kareena-Kapoor-Khan-endorses-Crysta-IVF.mp4";
import $ from 'jquery';
import {Link} from "react-router-dom"

const initialState = {
  phone: "",
  showModal: false,
  phoneError: "",
  width: window.innerWidth,
  showThankYou: false,
  showThankYouMobile: false,
  background: "transparent",
};

export default class BannerNew extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    $(document).ready(() => {
      window.$("video").bind("contextmenu",function(){
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

  handlePopUp = () => {
    this.setState({ showModal: true });
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.listenScrollEvent);
    setTimeout(this.context.slideLeft, 3000);
    setTimeout(this.handlePopUp, 30000);
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

  numberValidate = () => {
    let numberError = "";
    if (this.state.phone.length < 10) {
      numberError = "Incomplete Number";
    }

    var pattern = new RegExp(/^[0-9]+$/);
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
    const isValid = this.numberValidate();
    // const finalvalidate = this.finalValidate();
    if (isValid) {
      const userObject = {
        phoneNumber: this.state.phone,
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
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-BannerNew">
          <div className="BannerMobileView">
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
              <div className="row paddingDivtwo">
                <h1>World Class Fertility Treatment</h1>
                <div className="video-container">
                  {/* <iframe src="https://www.youtube.com/embed/ruOxU8TDcrk?rel=0" title="Crysta IVF" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                  <video className="landingMobVideo" width="100%" height="240" controls disablePictureInPicture controlsList="nodownload">
                    <source src={kareenaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col s12 sucessDiv">
                  <div className="row">
                    <div className="col s4 center vline">
                      <h5>85%</h5>
                      <h6>Treatment Success Rate</h6>
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
                </div>
              </div>
            </div>
            <div className="banner-image">
              {/* <img className="responsive-img" src={banner} alt="" /> */}

              <div className="row banner-div">
                <h4>Get Free IVF Appointment</h4>
                {/* <form onSubmit={this.onSubmit}>
                                    <div className="input-field">
                                        <input type="text" name="phone1" required value={this.state.phone} onChange={this.numberValidate} onKeyUp={this.numberValidate} placeholder="Enter Mobile Number" />
                                    </div>
                                    <div style={{ color: 'red', paddingLeft: '10px' }}>{this.state.numberError}</div>
                                    <button className="btn buttona" id="numbersubmit" type="submit" name="action">Submit</button>
                                </form> */}
                <form onSubmit={this.onSubmit}>
                  <div className="input-field bannerMobileNumber">
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
                        marginBottom: "5px",
                        marginTop: "-25px",
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
          <div className="BannerDesktopView">
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
                            alt="callIcon"
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
                <h5>Best IVF Centre in India</h5>
                <h6>Your Fertility Healthcare is Our PRIORITY</h6>
                <div className="bannerNumbers row">
                  <div className="valign-wrapper col m4 numbersLanding">
                    <div className="orangeSeparators"></div>
                    <h1 style={{ marginLeft: "10px" }}>85%</h1>
                    <h2>Treatment Success Rate</h2>
                  </div>
                  <div className="valign-wrapper col m4 numbersLanding">
                    <h1>18+</h1>
                    <h2>Cities all over India</h2>
                  </div>
                  <div className="valign-wrapper col m4 numbersLanding">
                    <h1>20+</h1>
                    <h2>Years of experience</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="greyDiv">
                    <div className="row"></div>
                    <p>Get Free IVF Appointment</p>
                    <form onSubmit={this.onSubmit}>
                      <div className="input-field">
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
                        <div style={{ color: "red", paddingLeft: "90px" }}>
                          {this.state.numberError}
                        </div>
                      ) : null}
                      <button id="numbersubmit" className="btn btnSubmit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col m6">
                {/* <img src={dBanner} alt="Best IVF Centre" className="desktopBannerImage" /> */}
                <div className="video-container">
                  {/* <iframe src="https://www.youtube.com/embed/ruOxU8TDcrk?rel=0" title="Crysta IVF" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                  <video width="100%" height="300" controls disablePictureInPicture controlsList="nodownload">
                    <source src={kareenaVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
