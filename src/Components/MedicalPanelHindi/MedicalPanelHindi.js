import React, { Component } from "react";
import "./MedicalPanelHindi.css";
import ashish from "../../images/ashishw.webp";
import sarabpreet from "../../images/sarabpreetw.webp";
import ruchi from "../../images/ruchiw.webp";
import medicalPanel1 from "../../images/sarahw.webp";
import naresh from "../../images/nareshw.webp";
import ashwini from "../../images/ashwiniw.webp";
import Yashodhara from "../../images/yashodraw.webp";
import Deepika from "../../images/deepikaw.webp";
import Neha from "../../images/nehaw.webp";
import CustomModalHindi from "../CustomModalHindi/CustomModalHindi";
import { CarouselContextHindi } from "../../CarouselContextHindi";
import suman from "../../images/suman.webp";
import vikram from "../../images/vikram.webp";
import CarouselItem from "./carouselItemHindi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


import ruchiPng from "../../images/ruchi.png";
import SumanPng from "../../images/SumanPng.png";
import VikramPng from "../../images/VikramPng.png";
import NareshPng from "../../images/NareshPng.png";
import DeepikaPng from "../../images/DeepikaPng.png";
import "./desktopCarouselHindi.css";

export default class MedicalPanelHindi extends Component {
  static contextType = CarouselContextHindi;
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
        about: "IVF | IUI | ICSI",
      },
      {
        id: 4,
        image: naresh,
        drName: "Dr. Naresh Sehgal",
        professsion: "Infertility Specialist",
        about: "Infertility Specialist",
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
        <div className="MedicalMobileViewHindi">
          <h3 className="center">भारत में सर्वश्रेष्ठ आईवीएफ (IVF) डॉक्टर</h3>
          <div className="carousel carousel-slider">
            <div className="carousel-item row">

              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={ruchi} alt="आईवीएफ (IVF) डॉ. रूचि मल्होत्रा" /> */}
                    <picture>
                      <source srcset={ruchi} type="image/webp" />
                      <source srcset={ruchiPng} type="image/png" /> 
                      <img src={ruchiPng} srcset={ruchiPng}  alt="आईवीएफ (IVF) डॉ. रूचि मल्होत्रा" />
                    </picture> 
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>डॉ. रूचि मल्होत्रा</span>
                      <h6>इनफर्टिलिटी विशेषज्ञ</h6>
                      <p>
                        <span></span> आईवीएफ (IVF) | आईयूआई | इकसी  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={naresh} alt="आईवीएफ (IVF) डॉ. नरेश  सहगल" /> */}
                    <picture>
                      <source srcset={naresh} type="image/webp" />
                      <source srcset={NareshPng} type="image/png" /> 
                      <img src={NareshPng}  srcset={NareshPng}  alt="आईवीएफ (IVF) डॉ. नरेश  सहगल" />
                  </picture> 
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>डॉ. नरेश  सहगल</span>
                      <h6>इनफर्टिलिटी विशेषज्ञ</h6>
                      <p>
                        <span></span> आईवीएफ (IVF) | आईयूआई | इकसी 

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={Deepika} alt="आईवीएफ (IVF) डॉ. दीपिका कालो" /> */}
                    <picture>
                      <source srcset={Deepika} type="image/webp" />
                      <source srcset={DeepikaPng} type="image/png" /> 
                      <img src={DeepikaPng}  srcset={DeepikaPng}  alt="आईवीएफ (IVF) डॉ. दीपिका कालो" />
                  </picture> 
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>डॉ. दीपिका कालो</span>
                      <h6>साइंटिस्ट</h6>
                      <p>
                        <span></span>  कैंसर, एंड ह्यूमन जेनेटिक्स 
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
                    {/* <img src={vikram} alt="आईवीएफ (IVF) डॉ विक्रम प्रताप" /> */}
                    <picture>
                      <source srcset={vikram} type="image/webp" />
                      <source srcset={VikramPng} type="image/png" /> 
                      <img src={VikramPng} srcset={VikramPng}  alt="आईवीएफ (IVF) डॉ विक्रम प्रताप" />
                  </picture> 
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>डॉ विक्रम प्रताप</span>
                      <h6>चीफ  एम्ब्र्योलॉजिस्ट</h6>
                      <p>
                        <span></span>आईवीएफ (IVF) | आईयूआई | एम्ब्र्योलोजी {" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={suman} alt="आईवीएफ (IVF) डॉ सुमन तंवर" /> */}
                    <picture>
                      <source srcset={suman} type="image/webp" />
                      <source srcset={SumanPng} type="image/png" /> 
                      <img src={SumanPng} srcset={SumanPng}  alt="आईवीएफ (IVF) डॉ सुमन तंवर" />
                  </picture> 
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>डॉ सुमन तंवर</span>
                      <h6>प्रजनन विशेषज्ञ</h6>
                      <p>
                        <span></span>आईवीएफ (IVF) | आईयूआई
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="triangle"></div>
        </div>
        <div className="MedicalDesktopViewHindi">
          {/* <div className="row">
                        <div className="col m4">
                            <h4>Medical Panel</h4>
                        </div>
                        <div className="col m2 offset-m6 center">
                            
                            <button style={{ border:'none',right:'5px', paddingTop:'20px'}} className="transparent arrowLeft" onClick={() => this.carousel.slidePrev()}><img src={arrowRight} alt="" /></button>
                            <button style={{ border:'none', left:'5px'} } className="transparent arrowRight" onClick={() => this.carousel.slideNext()}><img src={arrowRight} alt="" /></button>
                        </div>
                    </div> */}

          {/* <div className="row cardRow">
                        <div className="col m12">
                            <div className="carousel carousel-slider">
                                <div className="carousel-item row">
                                    <Carousel breakPoints={breakPoints} pagination={false} showArrows={false} ref={ref => (this.carousel = ref)}>
                                        {items.map(item =>
                                            <div className="col" key={item.id}>
                                                <div className="card horizontal">
                                                    <div className="card-image">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                    <div className="card-stacked">
                                                        <div className="card-content">
                                                            <span className="card-title">{item.drName}</span>
                                                            <h6>{item.professsion}</h6>
                                                            <p style={{ color: '#333333'}}>Specialisation: <span style={{ color: '#333333'}}><b>{item.about}</b></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="medical-carouselCity">
            <div className="header">
              <h4>भारत में सर्वश्रेष्ठ आईवीएफ (IVF) डॉक्टर</h4>
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
            फ्री IVF कंसल्टेशन बुक करें
            </button>
            {this.state.showModal && (
              <CustomModalHindi
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
