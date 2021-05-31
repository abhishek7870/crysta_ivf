import React, { Component } from "react";

import CrystaLogo from "../../images/CrystaLogo1.png";
import CallIcon from "../../images/callIconOrange.png";
import CallIconDesktop from "../../images/CallIcon.png";

import "../CityBannerHindi/CityBannerHindi.css";
import axios from "axios";
import CustomModalHindi from "../CustomModalHindi/CustomModalHindi";
import faCut from "../../images/closeModal.png";
import faCutMobile from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import { Modal } from "react-materialize";
import chainOne from "../../images/chainOne.png";
import chainTwo from "../../images/chainTwo.png";
import chainThree from "../../images/chainThree.png";
import { CityBannerContextHindi } from "../../cityBannerContextHindi";
//import CarouselItemHindi from "./CarouselItemHindi";
//import Swipe from "react-easy-swipe";
import { Helmet } from "react-helmet";
import { Slide } from "react-slideshow-image";
import kareenaVideo from "../../video/Kareena-Kapoor-Khan-endorses-Crysta-IVF.mp4";
import "./BannerMarathi.css";
import $ from "jquery";
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
const properties = {
  arrows: false,
  canSwipe: true,
};
export default class CityBannerHindi extends Component {
  static contextType = CityBannerContextHindi;
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

  // handlePopUp = () => {
  //   this.setState({ showModal: true });
  // };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.listenScrollEvent);
    // setTimeout(this.handlePopUp, 30000);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 80) {
      this.setState({ background: "white" });
    } else {
      this.setState({ background: "transparent" });
    }
  };

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
      numberError = "अधूरा मोबाइल नंबर";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "अधूरा मोबाइल नंबर";
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
            successMessage.innerHTML = " बुक करे";
            this.setState({ showThankYouMobile: true });
          } else {
            successMessage.innerHTML = " बुक करे";
            this.setState({ showThankYou: true });
          }
          setTimeout(() => {
            successMessage.innerHTML = " बुक करे";
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
            <title>{`महाराष्ट्रातील सर्वोत्तम वंध्यत्व उपचार, वंध्यत्व व आयव्हीएफ (IVF) केंद्र`}</title>
            <meta
              name="description"
              content={`परवडणार्‍या किंमतीमध्ये  महाराष्ट्रातील सर्वोत्तम आयव्हीएफ (IVF) केंद्रात आयव्हीएफ (IVF) उपचार मिळवा.
Crysta IVF क्लिनिक हे महाराष्ट्रातील वंध्यत्व क्लिनिकच्या अग्रगण्य साखळींपैकी एक आहे जे पुरुष व महिलांच्या वंध्यत्वासाठी उच्च दर्जाचे उपचार देण्यासाठी यशस्वी आहे.
`}
            />
            <meta
              name="keywords"
              content={`Best Fertility Centre, IVF Centre in Maharashtra, Infertility treatment in Maharashtra, fertility clinic in Maharashtra, IVF success rates in Maharashtra, best IVF doctors in Maharashtra, best IVF clinics in Maharashtra
 `}
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
                          alt="भारत में आईवीएफ (IVF) का खर्चा"
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
                              alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर"
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
                  महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ (IVF) सेंटर
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
                          उच्च{" "}
                          <span>
                            IVF<br></br> यशाचे दर
                          </span>
                        </h6>
                      </div>
                      <div className="valign-wrapper">
                        <div
                          style={{ width: "37px" }}
                          className="purpleSeparatorCity"
                        ></div>
                        <h6>
                          महाराष्ट्रातील अनुभवी{" "}
                          <span>
                            <br></br>IVF डॉक्टर
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
                          परवडणारी{" "}
                          <span>
                            IVF<br></br> उपचार योजना
                          </span>
                        </h6>
                      </div>
                      {/* <div className="valign-wrapper">
                                                <div style={{ width: '45px' }} className="purpleSeparatorCity"></div>

                                                <h6> विश्व स्तरीय<br></br> <span>प्रजनन उपचार</span>
                                                </h6>
                                            </div> */}
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
                <h4>विनामूल्य आयव्हीएफ सल्लाहघेण्याबाबत नोंद करा </h4>
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
                      placeholder="नाव"
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
                      id=" मोबाइल क्रमांक "
                      type="text"
                      placeholder="नंबर "
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
                    प्रस्तुत करणे
                  </button>
                </form>
                <p>
                  *आम्ही आपल्या गोपनीयतेचा आदर करतो आणि आपली वैयक्तिक माहिती
                  कोणाबरोबरही सामायिक करत नाही.
                </p>
              </div>
            </div>
            <Modal
              open={this.state.showThankYouMobile}
              className="ThankYouMpbile"
            >
              <img
                alt="भारत में बेस्ट आई वी एफ डॉक्टर"
                src={faCutMobile}
                onClick={this.handleCloseModalMobile}
                className="faCutMobile"
              />
              <h4>शुक्रिया!</h4>
              <p>
                हमने आपका सवाल प्राप्त कर लिया है, आपको जल्द ही हमारी फर्टिलिटी
                सहायता टीम संपर्क करेगी
              </p>
              <h6>तत्काल प्रश्नों के लिए, आप हमें कॉल कर सकते हैं</h6>
              <div className="callingNumberModal valign-wrapper">
                <a href="tel:+918938935353" data-rel="external">
                  <h5>
                    <img src={callIcon} alt="भारत में आईवीएफ (IVF) का खर्चा" />{" "}
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
            <title>{`महाराष्ट्रातील सर्वोत्तम वंध्यत्व उपचार, वंध्यत्व व आयव्हीएफ (IVF) केंद्र `}</title>
            <meta
              name="description"
              content={`परवडणार्‍या किंमतीमध्ये  महाराष्ट्रातील सर्वोत्तम आयव्हीएफ (IVF) केंद्रात आयव्हीएफ (IVF) उपचार मिळवा.
Crysta IVF क्लिनिक हे महाराष्ट्रातील वंध्यत्व क्लिनिकच्या अग्रगण्य साखळींपैकी एक आहे जे पुरुष व महिलांच्या वंध्यत्वासाठी उच्च दर्जाचे उपचार देण्यासाठी यशस्वी आहे.
`}
            />
            <meta
              name="keywords"
              content={`बेस्ट आयव्हीएफ (IVF) सेंटर, 
महाराष्ट्रातील आयव्हीएफ (IVF) सेंटर, 
महाराष्ट्रातील वंध्यत्व उपचार, व  प्रजनन चिकित्सालय, 
महाराष्ट्रातील आयव्हीएफ (IVF) यशाचे प्रमाण,
 महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ (IVF) डॉक्टर, 
महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ (IVF) क्लिनिक
`}
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
                      alt="महाराष्ट्रातील सर्वोत्तम आयव्हीएफ (IVF) केंद्र निवडा"
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
                            alt="महाराष्ट्रातील सर्वोत्तम आयव्हीएफ (IVF) केंद्र निवडा"
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
                        विनामूल्य सल्लाहघेण्याबाबत नोंद करा
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
                <h5>महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ (IVF) सेंटर</h5>

                <div className="bannerNumbersHindi row">
                  <div className="valign-wrapper col m4">
                    <div className="orangeSeparatorHindi"></div>
                    <h2>
                      उच्च{" "}
                      <span>
                        {" "}
                        आयव्हीएफ (IVF) <br></br> यशाचे दर{" "}
                      </span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m4">
                    <div className="purpleSeparatorHindi"></div>
                    <h2>
                      महाराष्ट्रातील
                      <span>
                        {" "}
                        अनुभवी <br></br> आयव्हीएफ (IVF) डॉक्टर
                      </span>
                    </h2>
                  </div>
                  <div className="valign-wrapper col m4">
                    <div className="orangeSeparatorHindi"></div>
                    <h2>
                      परवडणारी <span> आयव्हीएफ (IVF) उपचार योजना</span>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="greyDiv">
                    <div className="row"></div>
                    <p className="headingBannerForm">
                      विनामूल्य आयव्हीएफ (IVF) सल्लाहघेण्याबाबत नोंद करा{" "}
                    </p>
                    <form onSubmit={this.onSubmit}>
                      <div className="row">
                        <div className="input-field nameInputField col m6">
                          <input
                            id="name"
                            type="text"
                            name="fname"
                            className="validate name"
                            placeholder="नाव  "
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
                            placeholder="मोबाइल क्रमांक
                                                        "
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
                        प्रस्तुत करणे
                      </button>
                    </form>
                    <h6>
                      *आम्ही आपल्या गोपनीयतेचा आदर करतो आणि आपली वैयक्तिक माहिती
                      कोणाबरोबरही <br></br> सामायिक करत नाही.
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
                <h5>भारतातील सर्वाधिक विश्वसनीय फर्टिलिटी केंद्र </h5>
                <div className="row bannerCardsHindi">
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img
                          src={chainOne}
                          alt="भारत में आईवीएफ (IVF) का खर्चा"
                        />
                      </div>
                      <div className="card-content">
                        <p>आईवीएफ (IVF) की सफलता दर</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img
                          src={chainTwo}
                          alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                        />
                      </div>
                      <div className="card-content">
                        <p>भारत में आईवीएफ (IVF) केंद्र</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card center">
                      <div className="card-image">
                        <img
                          src={chainThree}
                          alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर"
                        />
                      </div>
                      <div className="card-content">
                        <p>वर्षों का अनुभव</p>
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
                alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर"
                src={faCut}
                onClick={this.handleCloseModal}
                className="CutIconModal"
              />
              <img
                alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर"
                src={thankModalImage}
                className="thankModalImage"
              />
              <h4>शुक्रिया!</h4>
              <h5>
                हमने आपका सवाल प्राप्त कर लिया है, आपको जल्द ही हमारी फर्टिलिटी
                सहायता टीम संपर्क करेगी
              </h5>
              <h6>तत्काल प्रश्नों के लिए, आप हमें कॉल कर सकते हैं</h6>
              <h3>
                <img alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" src={callIcon} />
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
