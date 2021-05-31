import React, { Component } from "react";
import "./MedicalPanelNewCity.css";
import ruchi from "../../images/ruchiw.webp";
import naresh from "../../images/nareshw.webp";
import Deepika from "../../images/deepikaw.webp";
import suman from "../../images/suman.webp";
import vikram from "../../images/vikram.webp";
import CustomModal from "../CustomModal/CustomModal";
import { CarouselContextCity } from "../../CarouselContextCity";
import CarouselItemCity from "./carouselItemCity";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import mehulC from "../../images/mehulC.webp";
import kishore from "../../images/kishore.webp";
import "./desktopCarouselCity.css";
import $ from 'jquery';

import ruchiPng from "../../images/ruchi.png";
import SumanPng from "../../images/SumanPng.png";
import VikramPng from "../../images/VikramPng.png";
import NareshPng from "../../images/NareshPng.png";
import DeepikaPng from "../../images/DeepikaPng.png";
import KishorePng from "../../images/KishorePng.png";
import MehulPng from "../../images/MehulPng.png";


export default class MedicalPanelNewCity extends Component {
  static contextType = CarouselContextCity;

  componentDidMount() {
		$(document).ready(function() {
			window.$('.carousel.carousel-slider').carousel({
				height: 500,
				indicators: true,
				fullWidth: true,
				transition: 500,
				interval: 6000
			});
		   
		
			
			window.$('.scrollspy').scrollSpy();
		
			window.$('.materialboxed').materialbox();
		
			window.$('input#input_text, textarea#message').characterCounter();
		});
	}
  state = {
    AhmedabadDoctors: [
      {
        id: 1,
        image: mehulC,
        drName: "Dr. Mehul Sukhdia",
        professsion: "Infertility Specialist",
        about: "IVF | IUI | Surrogacy",
      },
    ],
    PuneDoctors: [
      {
        id: 1,
        image: kishore,
        drName: "Dr. Kishore Pandit",
        professsion: "Infertility Doctor & Specialist",
        about: "IVF | IUI | Surrogacy | Embryo Donation",
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
          <h3 className="center">IVF Doctors in {this.props.cityname}</h3>
{ this.props.cityname ==='Delhi' ?<div>
          <div className="carousel carousel-slider">
            <div className="carousel-item row">
              <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                     {/* <img src={ruchi} alt="IVF Dr. Ruchii Malhotra" />  */}
                     <picture>
                      <source srcset={ruchi} type="image/webp" />
                      <source srcset={ruchiPng} type="image/png" /> 
                      <img src={ruchiPng} srcset={ruchiPng}  alt="IVF Dr. Ruchi Malhotra" />
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
                      <img src={NareshPng}  srcset={NareshPng}  alt="IVF Dr. Naresh Sehgal" />
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
                      <img src={DeepikaPng}  srcset={DeepikaPng}  alt="IVF Dr. Deepika Kalo" />
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
                      <img src={VikramPng} srcset={VikramPng}  alt="IVF Dr. Vikram Pratap" />
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
                      <img src={SumanPng} srcset={SumanPng}  alt="IVF Dr. Suman Tanwar" />
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
          </div><div className="triangle"></div></div>
          : this.props.cityname === 'Ahmedabad' ?
          <div className="carousel-item row">
            <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={mehulC} alt="IVF Dr. Mehul Sukhdia" /> */}
                    <picture>
                      <source srcset={mehulC} type="image/webp" />
                      <source srcset={MehulPng} type="image/png" /> 
                      <img src={MehulPng} srcset={MehulPng}  alt="IVF Dr. Mehul Sukhdia" />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Mehul Sukhdia</span>
                      <h6>Infertility Specialist</h6>
                      <p>
                        <span></span> IVF | IUI | Surrogacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          : this.props.cityname === 'Pune' ?
          <div className="carousel-item row">
            <div className="col s12">
                <div className="card horizontal">
                  <div className="card-image">
                    {/* <img src={kishore} alt="IVF Dr. Kishore Pandit" /> */}
                    <picture>
                      <source srcset={kishore} type="image/webp" />
                      <source srcset={KishorePng} type="image/png" /> 
                      <img src={KishorePng} srcset={KishorePng}  alt="IVF Dr. Kishore Pandit" />
                    </picture>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span>Dr. Kishore Pandit</span>
                      <h6>Infertility Doctor & Specialist</h6>
                      <p>
                        <span></span> IVF | IUI | Surrogacy | Embryo Donation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
:<div className="DoctorsPune">
  <h6>Connect with the best IVF specialist in {this.props.cityname} with world class IVF success rates. Our IVF experts have extensive training and medical knowledge to handle complicated fertility cases. Let’s add a new life to your family with Crysta IVF.</h6>
  </div>  
}    
          
        </div>
        <div className="MedicalDesktopViewCity">
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
        
    {this.props.cityname === 'Delhi' ?
          <div className="medical-carouselCity">
            <div className="header">
              <h4>IVF Doctors in {this.props.cityname}</h4>
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
                <CarouselItemCity key = {item.id}
                  img={item.image}
                  name={item.drName}
                  about={item.about}
                  profession={item.professsion}
                  index={index}
                />
              ))}
            </div>
          </div>
          : this.props.cityname === 'Ahmedabad' ?
          <div className="medical-carouselCity">
          <div className="header">
            <h4>IVF Doctors in {this.props.cityname}</h4>
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
            {this.state.AhmedabadDoctors.map((item, index) => (
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
        </div>
         : this.props.cityname === 'Pune' ?
         <div className="medical-carouselCity">
         <div className="header">
           <h4>IVF Doctors in {this.props.cityname}</h4>
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
           {this.state.PuneDoctors.map((item, index) => (
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
       </div>
          : <div> 
            <h4 className="puneDoctorsHeading">IVF Doctors in {this.props.cityname}</h4>
            <p className="puneDoctorsPara">Connect with the best IVF specialist in {this.props.cityname} with world class IVF success rates. Our IVF experts have extensive training and medical knowledge to handle complicated fertility cases. Let’s add a new life to your family with Crysta IVF.</p>
            </div>
    }
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
