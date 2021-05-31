import React, { Component } from "react";
import "../ServicesCity/ServicesCity.css";

import "./ServiceIvfCost.css";

import $ from "jquery";
import fig1 from "../../images/ivfcostfront.png";
export default class ServiceIvfCost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: "",
      width: window.innerWidth,
      hide: true,
      //image_path: 'before update image path'
    };
  }

  componentDidMount() {
    $(document).ready(function() {
      var scroolink = $(".scrool");
      scroolink.click(function(e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: $(this.hash).offset().top - 100,
          },
          1000
        );
      });
    });

    $(document).ready(function() {
      window.$(".carousel.carousel-slider").carousel({
        height: 500,
        indicators: true,
        fullWidth: true,
        transition: 500,
        interval: 6000,
      });

      window.$(".scrollspy").scrollSpy();

      window.$(".materialboxed").materialbox();

      window.$("input#input_text, textarea#message").characterCounter();
    });
  }
  handlePopUp = () => {
    this.setState({ showModal: true });
  };
  componentWillMount(nextProps) {
    window.addEventListener("resize", this.handleWindowSizeChange);
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

  render() {
    const hideButton = () => {
      this.setState({ hide: false });
    };
    console.log(this.props.buttonHide);
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-services">
          <div className="servicesMobileCity">
            <div style={{ marginTop: "23.11px" }} className="leadButton">
              <div
                style={{ display: "flex", marginLeft: "5%" }}
                onClick={() => hideButton()}
              >
                <h6
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: 18,
                    
                  }}
                >
                  IVF Cost in {this.props.cityname}
                </h6>
              </div>

              <p>
                Crysta IVF comprises a proficient personnel of world-class IVF
                Doctors in Delhi. The centre is best known for its
                state-of-the-art infrastructure and modern equipment due to
                which the cost of IVF treatment differs from one location to
                another. The common factors affecting the IVF cost in Delhi are:{" "}
              </p>
              <ul style={{ listStyleType: "none" }}>
                <li style = {{display:"flex" , alignItems:"center" }}>
                  <div
                    style={{
                      border: "1px solid black",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                    }}
                  ></div>{" "}
                  <span> Number of cycles required</span>
                </li>
                <li style = {{display:"flex" , alignItems:"center" }}>
                <div
                    style={{
                      border: "1px solid black",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                    }}
                  ></div>{" "} <span> Age of the male and female partner </span>
                </li>
                <li style = {{display:"flex" , alignItems:"center" }}>
                <div
                    style={{
                      border: "1px solid black",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                    }}
                  ></div>{" "} <span> Cost of freezing embryos</span>
                </li>
                <li style = {{display:"flex" , alignItems:"center" }}>
                <div
                    style={{
                      border: "1px solid black",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                    }}
                  ></div>{" "} <span> Location of the IVF centre</span>
                </li>
                <li style = {{display:"flex" , alignItems:"center" }}>
                <div
                    style={{
                      border: "1px solid black",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                    }}
                  ></div>{" "} <span> Expertise of IVF doctor </span>
                </li>
              </ul>
              <p>
                To get complete guidance and pricing range of IVF cost in{" "}
                {this.props.cityname}, speak with our fertility experts.
              </p>
              {this.props.buttonHide ? null : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "273.39px",
                      height: "48px",
                      background: "#FF8300",
                      borderRadius: "36px",
                      color: "white",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                    href="#mobileScroolingId"
                    className="scrool"
                    onClick={() => hideButton()}
                  >
                    Know IVF cost in {this.props.cityname}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="section-services">
          <div className="costDesktopSection">
            <div className="costFig1">
              <img src={fig1} className="fig1shape" />
            </div>
            <div className="serviceSecondDiv">
              <h1>IVF Cost in {this.props.cityname}</h1>
              <h2>
                Crysta IVF comprises a proficient personnel of world-class IVF
                Doctors in Delhi. The centre is best known for its
                state-of-the-art infrastructure and modern equipment due to
                which the cost of IVF treatment differs from one location to
                another. The common factors affecting the IVF cost in Delhi are:
              </h2>
              <ul className="costList">
                <li>
                  &#9675; <span> Number of cycles required</span>
                </li>
                <li>
                  &#9675; <span> Age of the male and female partner </span>
                </li>
                <li>
                  &#9675; <span> Cost of freezing embryos</span>
                </li>
                <li>
                  &#9675; <span> Location of the IVF centre</span>
                </li>
                <li>
                  &#9675; <span> Expertise of IVF doctor </span>
                </li>
              </ul>
              <h2 className="pri">
                To get complete guidance and pricing range of IVF cost in{" "}
                {this.props.cityname}, speak with our fertility experts.
              </h2>
              {this.props.buttonHide ? null : (
                <div className="costbutton">
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "355.55px",
                      height: "58px",
                      background: "#FF8300",
                      borderRadius: "36px",
                      color: "white",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "22px",
                      textTransform:"none"
                    }}
                    className="btn buttonOne scrool"
                    href="#scrollingId"
                    onClick={() => hideButton()}
                  >
                    Know IVF cost in {this.props.cityname}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }
  }
}
