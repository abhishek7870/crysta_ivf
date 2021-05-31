import React, { Component } from "react";
import "./MedicalPanelNewCity.css";
import ashish from "../../images/ashishw.webp";
import sarabpreet from "../../images/sarabpreetw.webp";
import ruchi from "../../images/ruchiw.webp";
import medicalPanel1 from "../../images/sarahw.webp";
import naresh from "../../images/nareshw.webp";
import ashwini from "../../images/ashwiniw.webp";
import Yashodhara from "../../images/yashodraw.webp";
import Deepika from "../../images/deepikaw.webp";
import Neha from "../../images/nehaw.webp";
import suman from "../../images/suman.webp";
import vikram from "../../images/vikram.webp";
import CustomModal from "../CustomModalSurrogacy/CustomModalSurrogacy";
import { CarouselContextSurrogacy } from "../../CarouselContextSurrogacy";
import CarouselItemCity from "./carouselItemCity";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./desktopCarouselCity.css";

import ruchiPng from "../../images/ruchi.png";
import SumanPng from "../../images/SumanPng.png";
import VikramPng from "../../images/VikramPng.png";
import NareshPng from "../../images/NareshPng.png";
import DeepikaPng from "../../images/DeepikaPng.png";

export default class MedicalPanelNewCity extends Component {
  static contextType = CarouselContextSurrogacy;
  state = {
    items: [
      {
        id: 1,
        image: medicalPanel1,
        drName: "Dr. Sarah Bailur",
        professsion: "Clinical Geneticist",
        about: "Genetic disorders",
      },
      {
        id: 2,
        image: sarabpreet,
        drName: "Dr. Sarabpreet Singh",
        professsion: "Chief Embryologist",
        about: "IVF | Andrology | Embryology",
      },
      {
        id: 3,
        image: ruchi,
        drName: "Dr. Ruchi Malhotra",
        professsion: "Infertility Specialist ",
        about: "IVF | IUI | ICSI | Surrogacy",
      },
      {
        id: 4,
        image: naresh,
        drName: "Dr. Naresh Sehgal",
        professsion: "Infertility Specialist",
        about: "Infertility Specialist | Surrogacy",
      },
      {
        id: 5,
        image: ashish,
        drName: "Dr. Ashish Kale",
        professsion: "IVF Specialist & Infertility Specialist",
        about: " IVF | ICSI",
      },
      {
        id: 6,
        image: ashwini,
        drName: "Dr. Ashwini Kale",
        professsion: "IVF Doctor",
        about: "IVF | ICSI",
      },
      {
        id: 7,
        image: Yashodhara,
        drName: "Yashodhra Bhattacharya",
        professsion: "Clinical Genetic Counselor",
        about: " Pediatrics | Infertility",
      },
      {
        id: 8,
        image: Deepika,
        drName: "Dr. Deepika Kalo",
        professsion: "Scientist",
        about: "Cancer & Human Genetics",
      },
      {
        id: 9,
        image: Neha,
        drName: "Neha Mehan",
        professsion: "Genetic Counselor",
        about: " Pediatric | Neonatal",
      },
    ],
    showModal: false,
  };

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { mainData, leftData, slideLeft, slideRight } = this.context;
    return (
      <section className="section section-medical-panel">
        <div className="MedicalMobileView">
          <h5 className="center">Medical Panel</h5>
          <h3 className="center">Our network of centres &#38; doctors</h3>

          <div className="carousel carousel-slider">
            <div className="carousel-item row">
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={ruchi} alt="IVF Dr. Ruchii Malhotra" /> */}
                    <picture>
                      <source srcSet={ruchi} type="image/webp" />
                      <source srcSet={ruchiPng} type="image/png" />
                      <img
                        src={ruchiPng}
                        srcSet={ruchiPng}
                        alt="IVF Dr. Ruchi Malhotra"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Ruchii Malhotra</span>
                      <h6>Infertility & Surrogacy Specialist</h6>
                      <p>
                        <span></span> IUI | IVF | Surrogacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={naresh} alt="IVF Dr. Naresh Sehgal" /> */}
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
                      <h6>Infertility Specialist </h6>
                      <p>
                        <span></span>IUI | IVF | Surrogacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={Deepika} alt="IVF Dr. Deepika Kalo" /> */}
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
                    {/* <img src={vikram} alt="IVF Dr. Vikram Pratap" /> */}
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
                    {/* <img src={suman} alt="IVF Dr. Suman Tanwar" /> */}
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
        </div>
        <div className="MedicalDesktopViewCity">
          <div className="medical-carouselCity">
            <div className="header">
              <h4>Best Surrogacy Doctor's in {this.props.cityName}</h4>
              <div className="navigation">
                <button onClick={slideRight} disabled={leftData.length === 0}>
                  <BsArrowLeft />
                </button>
                <button onClick={slideLeft} disabled={mainData.length < 3}>
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="slides">
              {mainData.map((item, index) => (
                <CarouselItemCity
                  key={index}
                  img={item.image}
                  name={item.drName}
                  about={item.about}
                  profession={item.professsion}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="center bookFreeButton">
            {/* <button href="#modal1" className="btn modal-trigger">Book Free IVF Consultation</button> */}

            <button className="bookFreeButton btn" onClick={this.showModal}>
              Get Free Consultation
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
      </section>
    );
  }
}
