import React, { Component } from "react";
import "../MedicalPanelNewCity/MedicalPanelNewCity.css";
import ruchi from "../../images/ruchiw.webp";
import naresh from "../../images/nareshw.webp";
import Deepika from "../../images/deepikaw.webp";
import suman from "../../images/suman.webp";
import vikram from "../../images/vikram.webp";
import CustomModal from "../CustomModal/CustomModal";
import { CarouselContextIvfCost } from "../../CarouselContextIvfCost";
import CarouselItemCity from "../MedicalPanelNewCity/carouselItemCity";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import "../MedicalPanelNewCity/desktopCarouselCity.css";
import $ from "jquery";

import ruchiPng from "../../images/ruchi.png";
import SumanPng from "../../images/SumanPng.png";
import VikramPng from "../../images/VikramPng.png";
import NareshPng from "../../images/NareshPng.png";
import DeepikaPng from "../../images/DeepikaPng.png";

export default class MedicalPanelIvfCost extends Component {
  static contextType = CarouselContextIvfCost;

  componentDidMount() {
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
    const newListAccordingToCity = this.context.mainData.filter(
      (item) => item.city === this.props.cityname
    );

    this.setState({ newDataList: newListAccordingToCity });
  }
  state = {
    showModal: false,
    newDataList: [],
    leftCityData: [],
  };

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    console.log(this.context.mainData);

    const slideLeft = () => {
      if (this.state.newDataList.length === 2) {
        return null;
      } else {
        let item = this.state.newDataList.shift();
        this.setState({ leftCityData: [...this.state.leftCityData, item] });
        this.setState({ newDataList: this.state.newDataList });
      }
    };

    const slideRight = () => {
      if (this.state.leftCityData.length < 1) {
        return null;
      } else {
        let item = this.state.leftCityData.pop();
        this.state.newDataList.unshift(item);
        this.setState({ leftCityData: [...this.state.leftCityData] });
        this.setState({ newDataList: this.state.newDataList });
      }
    };
    console.log(
      this.state.newDataList,
      this.state.leftCityData,
      this.props.cityname
    );
    return (
      <section className="section section-medical-panel">
        <div className="MedicalMobileView">
          <h3 className="center">IVF Doctors in {this.props.cityname}</h3>

          <div>
            <div className="carousel carousel-slider">
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      {/* <img src={ruchi} alt="IVF Dr. Ruchii Malhotra" />  */}
                      <picture>
                        <source srcset={ruchi} type="image/webp" />
                        <source srcset={ruchiPng} type="image/png" />
                        <img
                          src={ruchiPng}
                          srcset={ruchiPng}
                          alt="IVF Dr. Ruchi Malhotra"
                        />
                      </picture>
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <span>Dr. Ruchii Malhotra</span>
                        <h6>Infertility Specialist</h6>
                        <p>
                          <span></span> ICSI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      {/* <img src={naresh} alt="IVF Dr. Naresh Sehgal" />  */}
                      <picture>
                        <source srcset={naresh} type="image/webp" />
                        <source srcset={NareshPng} type="image/png" />
                        <img
                          src={NareshPng}
                          srcset={NareshPng}
                          alt="IVF Dr. Naresh Sehgal"
                        />
                      </picture>
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <span>Dr. Naresh Sehgal</span>
                        <h6>Senior Infertility Specialist</h6>
                        <p>
                          <span></span>IVF | IUI | ICSI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      {/* <img src={Deepika} alt="IVF Dr. Deepika Kalo" />  */}
                      <picture>
                        <source srcset={Deepika} type="image/webp" />
                        <source srcset={DeepikaPng} type="image/png" />
                        <img
                          src={DeepikaPng}
                          srcset={DeepikaPng}
                          alt="IVF Dr. Deepika Kalo"
                        />
                      </picture>
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <span>Dr. Deepika Kalo</span>
                        <h6>Scientist</h6>
                        <p>
                          <span></span> Cancer Genetics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      {/* <img src={vikram} alt="IVF Dr. Vikram Pratap" />  */}
                      <picture>
                        <source srcset={vikram} type="image/webp" />
                        <source srcset={VikramPng} type="image/png" />
                        <img
                          src={VikramPng}
                          srcset={VikramPng}
                          alt="IVF Dr. Vikram Pratap"
                        />
                      </picture>
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <span>Dr. Vikram Pratap</span>
                        <h6>Chief Embryologist</h6>
                        <p>
                          <span></span>IVF | IUI | Embryology{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12">
                  <div className="card horizontal">
                    <div className="card-image">
                      {/* <img src={suman} alt="IVF Dr. Suman Tanwar" />  */}
                      <picture>
                        <source srcset={suman} type="image/webp" />
                        <source srcset={SumanPng} type="image/png" />
                        <img
                          src={SumanPng}
                          srcset={SumanPng}
                          alt="IVF Dr. Suman Tanwar"
                        />
                      </picture>
                    </div>
                    <div className="card-stacked">
                      <div className="card-content">
                        <span>Dr. Suman Tanwar</span>
                        <h6>Fertility Specialist</h6>
                        <p>
                          <span></span>IVF | IUI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="triangle"></div>
          </div>
        </div>
        <div className="MedicalDesktopViewCity">
          <div
            className="medical-carouselCity"
            
          >
            <div style = {{display:"flex" , alignItems:"center" , justifyContent:"space-between" , marginTop:60 }}>
              <h4 style = {{marginTop:30}}>IVF Doctors in {this.props.cityname}</h4>
              <div className="navigation">
                <button
                  onClick={slideRight}
                  disabled={this.state.leftCityData.length === 0}
                >
                  <BsArrowLeft />
                </button>
                <button
                  onClick={slideLeft}
                  disabled={this.state.newDataList.length < 3}
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="ivfCostMediaclPanel">
              {this.state.newDataList.map((item, index) => (
                <CarouselItemCity
                  key={item.id}
                  img={item.image}
                  name={item.drName}
                  about={item.about}
                  profession={item.professsion}
                  index={index}
                />
              ))}
            </div>
            <div className="center bookFreeButton" >
              {/* <button href="#modal1" className="btn modal-trigger">Book Free IVF Consultation</button> */}

              <button
                style={{
                  color: "white",
                  background: "#924A91",
                  width: "273.39px",
                  height: "48px",
                  borderRadius: 36,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  marginTop:"4%"
                }}
                onClick={this.showModal}
              >
                Book Free IVF Consultation
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
        </div>
      </section>
    );
  }
}
