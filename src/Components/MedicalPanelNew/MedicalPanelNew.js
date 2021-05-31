import React, { Component } from "react";
import "./MedicalPanelNew.css";

import ashish from "../../images/ashishw.webp";
import sarabpreet from "../../images/sarabpreetw.webp";
import ruchi from "../../images/ruchiw.webp";
import ruchiPng from "../../images/ruchi.png";
import medicalPanel1 from "../../images/sarahw.webp";
import naresh from "../../images/nareshw.webp";
import ashwini from "../../images/ashwiniw.webp";
import Yashodhara from "../../images/yashodraw.webp";
import Deepika from "../../images/deepikaw.webp";
import Neha from "../../images/nehaw.webp";
import suman from "../../images/suman.webp";
import vikram from "../../images/vikram.webp";
import CustomModal from "../CustomModal/CustomModal";
import mehulC from "../../images/mehulC.webp";
import kishore from "../../images/kishore.webp";
import KishorePng from "../../images/KishorePng.png";
import MehulPng from "../../images/MehulPng.png";
import SumanPng from "../../images/SumanPng.png";
import VikramPng from "../../images/VikramPng.png";
import NehaPng from "../../images/NehaPng.png";
import YashodraPng from "../../images/YashodraPng.png";
import NareshPng from "../../images/NareshPng.png";
import DeepikaPng from "../../images/DeepikaPng.png";
import sangitaP from "../../images/sangitaPng.png";
import sangitaW from "../../images/sangeetaWebp.webp";

import { CarouselContext } from "../../CarouselContext";
import CarouselItem from "./carouselItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./desktopCarousel.css";
import loader from "../../images/loading.gif";

export default class MedicalPanelNew extends Component {
  static contextType = CarouselContext;
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
        about: "IVF | IUI | ICSI | Surrogacy",
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
        image: Deepika,
        drName: "Dr. Deepika Kalo",
        professsion: "Scientist",
        about: "Cancer & Human Genetics",
      },
      {
        id: 8,
        image: Neha,
        drName: "Neha Mehan",
        professsion: "Genetic Counselor",
        about: " Pediatric | Neonatal",
      },
      {
        id: 9,
        image: Yashodhara,
        drName: "Yashodhra Bhattacharya",
        professsion: "Clinical Genetic Counselor",
        about: " Pediatrics | Infertility",
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
          <h3 className="center">Best Surrogacy Doctor's in Delhi</h3>
          <div className="carousel carousel-slider">
            <div className="carousel-item row">
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={ruchi} data-srcset={ruchi} className="lazy" alt="IVF Dr. Ruchii Malhotra" /> */}
                    <picture>
                      <source srcset={ruchi} type="image/webp" />
                      <source srcset={ruchiPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={ruchiPng}
                        className="lazy"
                        alt="IVF Dr. Ruchii Malhotra"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Ruchi Malhotra</span>
                      <h6>Infertility Specialist</h6>
                      <p className="specialization">IVF | IUI | ICSI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={Deepika} data-srcset={Deepika} className="lazy" alt="IVF Dr. Deepika Kalo" /> */}
                    <picture>
                      <source srcset={Deepika} type="image/webp" />
                      <source srcset={DeepikaPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={DeepikaPng}
                        className="lazy"
                        alt="IVF Dr. Deepika Kalo"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Deepika Kalo</span>
                      <h6>Scientist</h6>
                      <p className="specialization">Cancer & Human Genetics</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={medicalPanel1} alt="IVF Dr. Sarah Bailur" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Sarah Bailur</span>
                      <h6>Clinical Geneticist</h6>
                      <p className="specialization">
                        <span></span> Genetic disorders
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={naresh} data-srcset={naresh} className="lazy" alt="IVF Dr. Naresh Sehgal" /> */}
                    <picture>
                      <source srcset={naresh} type="image/webp" />
                      <source srcset={NareshPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={NareshPng}
                        className="lazy"
                        alt="IVF Dr. Naresh Sehgal"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Naresh Sehgal</span>
                      <h6>Senior Infertility Specialist</h6>
                      <p className="specialization">
                        <span></span> IVF | IUI | ICSI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item row">
              {/* <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={ashwini} alt="IVF Dr. Ashwini Kale" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Ashwini Kale</span>
                      <h6>Chief Embryologist</h6>
                      <p className="specialization">
                      IVF | Embryology
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={Yashodhara} data-srcset={Yashodhara} className="lazy" alt="IVF Yashodhra Bhattacharya" /> */}
                    <picture>
                      <source srcset={Yashodhara} type="image/webp" />
                      <source srcset={YashodraPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={YashodraPng}
                        className="lazy"
                        alt="IVF Yashodhra Bhattacharya"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Yashodhra Bhattacharya</span>
                      <h6>Clinical Genetic Counselor</h6>
                      <p className="specialization">Pediatrics | Infertility</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={Neha} data-srcset={Neha} className="lazy" alt="IVF Neha Mehan" /> */}
                    <picture>
                      <source srcset={Neha} type="image/webp" />
                      <source srcset={NehaPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={NehaPng}
                        className="lazy"
                        alt="IVF Neha Mehan"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Neha Mehan</span>
                      <h6>Genetic Counselor</h6>
                      <p className="specialization">Pediatric | Neonatal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={vikram} data-srcset={vikram} className="lazy" alt="IVF Dr. Vikram Pratap" /> */}
                    <picture>
                      <source srcset={vikram} type="image/webp" />
                      <source srcset={VikramPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={VikramPng}
                        className="lazy"
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
            </div>
            <div className="carousel-item row">
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={suman} data-srcset={suman} className="lazy" alt="IVF Dr. Suman Tanwar" /> */}
                    <picture>
                      <source srcset={suman} type="image/webp" />
                      <source srcset={SumanPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={SumanPng}
                        className="lazy"
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
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={mehulC} data-srcset={mehulC} className="lazy" alt="Dr. Mehul Sukhdia" /> */}
                    <picture>
                      <source srcset={mehulC} type="image/webp" />
                      <source srcset={MehulPng} type="image/png" />
                      <img
                        src={loader}
                        srcset={MehulPng}
                        className="lazy"
                        alt="Dr. Mehul Sukhdia"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Mehul Sukhdia</span>
                      <h6>Infertility Specialist</h6>
                      <p>
                        <span></span>IVF | IUI | Surrogacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={loader} data-src={sangeeta} data-srcset={sangeeta} className="lazy" alt="Dr. Sangeeta Ahuja" /> */}
                    <picture>
                      <source srcset={sangitaW} type="image/webp" />
                      <source srcset={sangitaP} type="image/png" />
                      <img
                        src={loader}
                        srcset={sangitaP}
                        className="lazy"
                        alt="Dr. Sangeeta Ahuja"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Sangeeta Ahuja</span>
                      <h6>Infertility Specialist</h6>
                      <p>
                        <span></span>IVF | IUI | Surrogacy
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
                    {/* <img src={loader} data-src={kishore} data-srcset={kishore} className="lazy" alt="Dr. Mehul Sukhdia" /> */}
                    <picture>
                      <source srcset={kishore} type="image/webp" />
                      <source srcset={KishorePng} type="image/png" />
                      <img
                        src={loader}
                        srcset={KishorePng}
                        className="lazy"
                        alt="Dr. Kishore Pandit"
                      />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Kishore Pandit</span>
                      <h6>Infertility Doctor & Specialist</h6>
                      <p>
                        <span></span>IVF | IUI | Surrogacy | Embryo Donation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="triangle"></div>
        </div>
        <div className="MedicalDesktopView">
          <div className="medical-carousel">
            <div className="header">
              <h4>Best Surrogacy Doctor's in Delhi</h4>
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
                <CarouselItem
                  key={item.id}
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
      </section>
    );
  }
}
