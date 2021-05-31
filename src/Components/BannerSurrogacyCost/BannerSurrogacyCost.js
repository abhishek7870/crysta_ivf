import React, { Component } from "react";

import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/callIconOrange.png";
import CallIconDesktop from "../../images/CallIcon.png";
// import dBanner from "../../images/mainBanner.jpg";
import "../CityBanner/CityBanner.css";
import axios from "axios";
import CustomModal from "../CustomModal/CustomModal";
import faCut from "../../images/closeModal.png";
import faCutMobile from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import { CityBannerContext } from "../../cityBannerContext";
import { Helmet } from "react-helmet";
import '../BannerIvfCost/BannerIvfCost.css';
import "../header.css";
import "react-slideshow-image/dist/styles.css";
import $ from 'jquery';
import { Link } from "react-router-dom";

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
// const properties = {
//   arrows: false,
//   canSwipe: true,
// };

export default class BannerSurrogacyCost extends Component {
  static contextType = CityBannerContext;
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

  // handlePopUp = () => {
  //   this.setState({ showModal: true });
  // };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.listenScrollEvent);
    // setTimeout(this.context.slideLeft, 3000);
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
          <div className="BannerDesktopViewCity BannerDesktopIvfCost" style={{minHeight: '110px'}}>
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
