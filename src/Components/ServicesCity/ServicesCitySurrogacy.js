import React, { Component } from "react";
import "./ServicesCity.css";
import CustomModal from "../CustomModalSurrogacy/CustomModalSurrogacy";
import cityServiceOne from "../../images/1.png";
import cityServiceTwo from "../../images/2.png";
import cityServiceThree from "../../images/3.png";
import cityServiceFour from "../../images/4.png";
import arrowOranges from "../../images/arrowOrange.png";
import loans from "../../images/loan.png";
import chainOneSurrogacy from "../../images/surrslider-1.svg";
import chainTwoSurrogacy from "../../images/surrslider-2.svg";
// import yellowLine from ""
export default class ServicesCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: "",
      width: window.innerWidth,
      //image_path: 'before update image path'
    };
  }
  componentWillMount(nextProps) {
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

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-services">
          <div className="servicesMobileCity surr">
            <h2 className="fertilityChainHeading">Services</h2>
            {/* <div className="mobileOrangeLine">
            <img src={orangeLine} alt="" />
          </div> */}
            {/* <img src={orangeLine} alt="" className="mobileOrangeLine" /> */}
            <div className="carousel carousel-slider firstSlider">
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainOneSurrogacy} alt="" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">Surrogacy Programme</span>
                      <p>
                        At Crysta IVF, we offer the intended parents full
                        surrogacy programme at affordable prices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img
                        src={chainTwoSurrogacy}
                        className="surrslider2"
                        alt=""
                      />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">Donor IVF</span>
                      <p>
                        We connect you with the suitable and well-matched egg or
                        sperm donors to get positive outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <span className="surrslider3"></span>
                    </div>
                    <div className="card-content center">
                      <span className="card-title">Surrogate Match</span>
                      <p>
                        Crysta IVF helps you find well-screened surrogate
                        matches for you as per your requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="servicesPurpleBgCity whyCrysta">
              <h2>Why Crysta IVF</h2>
              <div className="carousel carousel-slider whyCrystaSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card-content center">
                      <p>High Surrogacy Success Rates</p>
                      <span>
                        Crysta IVF provides exemplary surrogacy treatment
                        solutions with high success rates in India
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card-content center">
                      <p>Fully-screened Surrogates</p>
                      <span>
                        We match you with the right surrogate mothers according
                        to your requirements and needs.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card-content center">
                      <p>24*7 Access to Surrogacy Doctors</p>
                      <span>
                        Crysta IVF has a team of highly qualified surrogacy
                        doctors who have decades of experience in this field.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card-content center">
                      <p>Advanced medical technology</p>
                      <span>
                        Our IVF centres use cutting-edge technology and advanced
                        equipment to carry out infertility treatments.
                      </span>
                    </div>
                  </div>
                </div>

                <span className="indicatorLine"></span>
              </div>
            </div>

            <div className="leadButton">
              <div className="center">
                <button className="btn" onClick={this.showModal}>
                  Connect with Crysta IVF
                </button>
              </div>
              {this.state.showModal && (
                <CustomModal
                  onCloseModal={this.showModal}
                  left={"0%"}
                  right={"30%"}
                  top={"0%"}
                />
              )}
              <div className="center">
                <h6>Get full continuum of Surrogacy services at Crysta IVF</h6>
              </div>
              <ul className="surr-list">
                <li>
                  Crysta IVF team and the best surrogacy doctors owe their
                  patients to provide and divulge a simple solution about their
                  chances of fulfilling their parenthood goals.{" "}
                </li>
                <li>
                  At Crysta IVF, we guide and suggest that the right path and
                  procedure go for surrogacy treatments to become parents.
                </li>
                <li>
                  We endeavor to provide fertility and surrogacy treatments with
                  the highest success rates.
                </li>
                <li>
                  Our best-quality service is propped up under state-of-the-art
                  infrastructure and cutting-edge technology that results in the
                  treatment's success.
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="section-services surr">
          <div className="servicesDesktopCity servicesDesktopCitySurrogacy">
            <h5>Why Crysta IVF </h5>
            {/* <img className="yellowLineImage" src={yellowLine} alt="" /> */}
            <div className="row OuterRowService">
              <div className="col m12">
                <div className="row InnerRowService">
                  {/* <div className="serviceConnectingLine"></div> */}
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                          <div className="orangeCircle">1</div>
                          <img src={cityServiceOne} alt="" />
                        </div>
                        <h6 className="newCardHeading">
                          High Surrogacy Success Rates
                        </h6>
                        <span className="newCardSpan">
                          Crysta IVF provides exemplary surrogacy treatment
                          solutions with high success rates in India.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">2</div>
                          <img src={cityServiceTwo} alt="" />
                        </div>
                        <h6 className="newCardHeading">
                          Fully-screened Surrogates
                        </h6>
                        <span className="newCardSpan">
                          We match you with the right surrogate mothers
                          according to your requirements and needs.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">3</div>
                          <img src={cityServiceThree} alt="" />
                        </div>
                        <h6 className="newCardHeading">
                          24*7 Access to Surrogacy Doctors{" "}
                        </h6>
                        <span className="newCardSpan">
                          Crysta IVF has a team of highly qualified surrogacy
                          doctors who have decades of experience in this field.{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">4</div>
                          <img src={cityServiceFour} alt="" />
                        </div>
                        <h6 className="newCardHeading">
                          Advanced medical technology
                        </h6>
                        <span className="newCardSpan">
                          Our IVF centres use cutting-edge technology and
                          advanced equipment to carry out infertility
                          treatments.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="desktopServiceShapeCity"></div> */}
            <div className="serviceSecondDiv serviceSecondDivSurrogacy">
              <h1>Get full continuum of Surrogacy services at Crysta IVF</h1>
              <ul className="IvfCostListDelhi">
                <li>
                  &#9675;{" "}
                  <span>
                    {" "}
                    Crysta IVF team and the best surrogacy doctors owe their
                    patients to provide and divulge a simple solution about
                    their chances of fulfilling their parenthood goals.
                  </span>
                </li>
                <li>
                  &#9675;{" "}
                  <span>
                    At Crysta IVF, we guide and suggest that the right path and
                    procedure go for surrogacy treatments to become parents.
                  </span>
                </li>
                <li>
                  &#9675;{" "}
                  <span>
                    We endeavor to provide fertility and surrogacy treatments
                    with the highest success rates.
                  </span>
                </li>
                <li>
                  &#9675;{" "}
                  <span>
                    {" "}
                    Our best-quality service is propped up under
                    state-of-the-art infrastructure and cutting-edge technology
                    that results in the treatment's success.
                  </span>
                </li>
              </ul>

              <div className="center buttonOneDiv">
                <button className="btn buttonOne" onClick={this.showModal}>
                  Connect with Crysta IVF
                </button>
                {this.state.showModal && (
                  <CustomModal
                    onCloseModal={this.showModal}
                    left={"30%"}
                    right={"30%"}
                    top={"20%"}
                  />
                )}
              </div>
            </div>
            {/* <div className="reactangleShape valign-wrapper">
              <h1>Loan available @ 0% EMI</h1>
              <img src={arrowOranges} alt="" className="orangeArrow" />
              <img src={loans} alt="" className="loanImage" />
            </div> */}
          </div>
        </section>
      );
    }
  }
}
