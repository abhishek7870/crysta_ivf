import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./Review.css";
import "./reviewCarousel.css";

import { SecondCarouselContext } from "../../ReviewCarouselContext";
import CarouselItem from "./carouselItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import fig1 from "../../images/Group 2369.png";
import fig2 from "../../images/Vector (5).png";
export default class Review extends Component {
  static contextType = SecondCarouselContext;
  render() {
    const { mainData, leftData, slideLeft, slideRight } = this.context;
    return (
      <section className="section section-review">
        <div className="ReviewMobile center">
          <h1>Our Patients Love Us</h1>
          <span>
            <img src={fig2} style ={{width:"19.27px" , height:"17.5px"}} alt="" />
          </span>
          <span>
            <img src={fig2} style ={{width:"19.27px" , height:"17.5px"}} alt="" />
          </span>
          <span>
            <img src={fig2} style ={{width:"19.27px" , height:"17.5px"}} alt="" />
          </span>
          <span>
            <img src={fig2} style ={{width:"19.27px" , height:"17.5px"}} alt="" />
          </span>
          <span>
            <img src={fig2} style ={{width:"19.27px" , height:"17.5px"}} alt="" />
          </span>
          <h3>
            4.9/5 <span>Stars</span>
          </h3>
          <div className="crouselDiv">
            <div className="carousel carousel-slider">
              <div className="carousel-item row ">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={loader} data-src={chopra} data-srcset={chopra} className="lazy" alt="IVF Journey made easy" /> */}
                        <picture>
                          {/* <source srcset={chopra} type="image/webp" />
                      <source srcset={ChopraPng} type="image/png" />  */}
                          <img src={fig1} alt="IVF Journey made easy" style ={{width:68 , height:68 , marginTop:30}} />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">Mr. & Mrs. Chopra</span>
                          <h6>Pune | 23-Jun-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      I was almost on the verge of giving up after failing to
                      achieve conception for the 3rd consecutive time.
                      Consulting Crysta IVF was one of the best decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={loader} data-src={sharma} data-srcset={sharma} className="lazy" alt="True IVF treatment companion" /> */}
                        <picture>
                          {/* <source srcset={sharma} type="image/webp" />
                      <source srcset={SharmaPng} type="image/png" />  */}
                          <img src={fig1} alt="True IVF treatment companion" style ={{width:68 , height:68 , marginTop:30}}/>
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <span className="card-title">
                            Mrs. Shalini Sharma
                          </span>
                          <h6>Delhi | 02-Sep-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      Fertility experts at Crysta IVF were always there to
                      attend to our queries right from the beginning of our
                      treatment. We are blessed with a healthy baby boy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img alt="Best IVF Treatment" src={loader} data-src={mehta} data-srcset={mehta} className="lazy" /> */}
                        <picture>
                          {/* <source srcset={mehta} type="image/webp" />
                      <source srcset={MehtaPng} type="image/png" />  */}
                          <img src={fig1} alt="True IVF treatment companion" style ={{width:68 , height:68 , marginTop:30}} />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <span className="card-title">Mrs. Ruchi Mehta</span>
                          <h6>Pune | 21-Nov-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      I am delighted with the outcome of my fertility treatment
                      guided by Crysta IVF and the team. The fertility experts
                      at Crysta IVF made me feel like a family.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={loader} data-src={kapoor} data-srcset={kapoor} className="lazy" alt="Top IVF Doctors" /> */}
                        <picture>
                          {/* <source srcset={kapoor} type="image/webp" />
                      <source srcset={KapoorPng} type="image/png" />  */}
                          <img src={fig1} alt="True IVF treatment companion" style ={{width:68 , height:68 , marginTop:30}} />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <span className="card-title">Mrs. Sohi Kapoor</span>
                          <h6>Delhi | 05-Jan-2021</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      Crysta IVF has been extremely competent, staff throughout
                      the entire process, from meeting with a consultant right
                      through to IVF procedures and aftercare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewDesktop">
          <div className="review-carousel">
            <div className="header">
              <div className="rating">
                <h1>Our Patients Love Us</h1>
                <span className="">
                  <img src={fig2} className="dstars  firstStar" alt="" />
                </span>
                <span>
                  <img src={fig2} className="dstars" alt="" />
                </span>
                <span>
                  <img src={fig2} className="dstars" alt="" />
                </span>
                <span>
                  <img src={fig2} className="dstars" alt="" />
                </span>
                <span>
                  <img src={fig2} className="dstars" alt="" />
                </span>
                <h3>
                  4.9/5 <span>Stars</span>
                </h3>
              </div>
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
                  name={item.cName}
                  date={item.date}
                  feedback={item.feedback}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
