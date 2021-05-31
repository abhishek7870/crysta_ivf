import React, { Component } from "react";
import "../../Components/MedicalPanelHindi/MedicalPanelHindi.css";
import ashish from "../../images/ashishw.webp";
import sarabpreet from "../../images/sarabpreetw.webp";
import mehulC from "../../images/mehulC.webp";
import medicalPanel1 from "../../images/sarahw.webp";
import naresh from "../../images/nareshw.webp";
import ashwini from "../../images/ashwiniw.webp";
import Yashodhara from "../../images/yashodraw.webp";
import Deepika from "../../images/deepikaw.webp";
import Neha from "../../images/nehaw.webp";
import CustomModalHindi from "../CustomModalGujarati/CustomModalGujarati";
import { CarouselContextGujarati } from "../../CarouselContextGujarati";
import MehulPng from "../../images/MehulPng.png";
// import suman from "../../images/suman.webp";
// import vikram from "../../images/vikram.webp";
import CarouselItem from "./carouselItemGujarati";
//import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "../../Components/MedicalPanelHindi/desktopCarouselHindi.css";
import './MedicalPanelGujarati.css';

export default class MedicalPanelGujarati extends Component {
  static contextType = CarouselContextGujarati;
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
        image: mehulC,
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
    const { mainData,  } = this.context;
    return (
      <section className="section section-medical-panel">
        <div className="MedicalMobileViewHindi GujaratiMedicalPAnel">
          <h3 className="center">ગુજરાતના આઈવીએફ (IVF) ડૉક્ટર </h3>
          <div className="carousel carousel-slider">
            <div className="carousel-item row">

              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={mehulC} alt="શ્રેષ્ઠ આઇવીએફ ડોકટરો" /> */}
                    <picture>
                      <source srcset={mehulC} type="image/webp" />
                      <source srcset={MehulPng} type="image/png" /> 
                      <img src={MehulPng} srcset={MehulPng}  alt="રેષ્ઠ આઇવીએફ ડોકટરો" />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>ડૉક્ટર મેહુલ સુખડિયા</span>
                      <h6>વંધ્યત્વ નિષ્ણાત</h6>
                      <p>
                        <span></span>આઈવીએફ (IVF) | આઈયુઆઈ | ઈક્સી 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>

          </div>
           {/* <div className="triangleGujarati"></div>  */}
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
              <h4>ગુજરાતના આઈવીએફ (IVF) ડૉક્ટર</h4>
              {/* <div className="navigation">
                <button onClick={slideRight} disabled={leftData.length === 0}>
                  <BsArrowLeft />
                </button>
                <button onClick={slideLeft} disabled={mainData.length < 3}>
                  <BsArrowRight />
                </button>
              </div> */}
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
            બુક કરો ફ્રી IVF કન્સલ્ટેશન 
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
