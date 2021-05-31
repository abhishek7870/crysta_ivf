import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./ReviewCity.css";
import "./reviewCarouselCity.css";
import fig1 from "../../images/Group 2369.png";
import stars from "../../images/stars.png";
import { SecondCarouselContextSurrogacy } from "../../ReviewCarouselSurrogacy";
import CarouselItemCity from "./carouselItemCity";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default class ReviewCity extends Component {
  static contextType = SecondCarouselContextSurrogacy;
  constructor(props) {
    super(props);

    this.state = { newDataList: [] };
  }
  render() {
    const { mainData, leftData, slideLeft, slideRight } = this.context;
    const newListAccordingToCity = mainData.filter(
      (item) => item.city === this.props.cityname
    );
    return (
      <section className="section section-review">
        <div className="ReviewMobileCity center ReviewMobileCitySurrogacy">
          <h1>Our Patients Love Us</h1>
          <span>
            <img src={stars} className="cStar cFirst" alt="" />
          </span>
          <span>
            <img src={stars} className="cStar" alt="" />
          </span>
          <span>
            <img src={stars} className="cStar" alt="" />
          </span>
          <span>
            <img src={stars} className="cStar" alt="" />
          </span>
          <span>
            <img src={stars} className="cStar" alt="" />
          </span>

          <h3>
            4.9/5 <span>Stars</span>
          </h3>
          <div className="crouselDiv">
            <div className="carousel carousel-slider ">
              <div className="carousel-item row ">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        <picture>
                          <img src={fig1} alt="IVF Journey made easy" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            {" "}
                            Mr. &amp; Mrs. Khurana{" "}
                          </span>
                          <h6>Pune | 23-Jun-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      After 15 years of marriage and experiencing several IVF
                      failure attempts at reputed fertility hospitals in Delhi,
                      we decided to go for surrogacy treatments with Crysta IVF.
                      The medical and paramedical staff at Crysta IVF is
                      competent and courteous. They provided us with a healthy
                      and compassionate surrogate mother. We will always be
                      thankful to this fertility facility. The team took special
                      care of our routine meetings and appointments with the
                      surrogate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={sharma} alt="True IVF treatment companion" /> */}
                        <picture>
                          <img src={fig1} alt="True IVF treatment companion" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            {" "}
                            Mrs. Malini Iyer{" "}
                          </span>{" "}
                          <h6> Delhi | 02-Sep-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      We are pleased and glad that God blessed us with an
                      adorable baby boy. He is healthy, and the entire surrogacy
                      treatment went well with the help of Crysta IVF. Thanks to
                      the caring team &amp; proficient team of surrogacy doctors
                      who stood by us throughout the procedure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={mehta} alt="Best IVF Treatment" /> */}
                        <picture>
                          <img src={fig1} alt="True IVF treatment companion" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            {" "}
                            Mr. Sumit Mehrotra{" "}
                          </span>{" "}
                          <h6> Pune | 21-Nov-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      After seven years of trying to conceive, I learned about
                      Crysta IVF for the best surrogacy treatments in Delhi. I
                      had no idea what surrogacy is, but the professional team
                      of fertility experts at the center helped us and guided us
                      at each step of the procedure. We met a friendly and
                      caring surrogate mother, and we are blessed with a cute
                      baby girl after years’ painful wait
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={kapor} alt="Top IVF Doctors" /> */}
                        <picture>
                          <img src={fig1} alt="Best IVF Treatment" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">Mrs. Sumitra M </span>
                          <h6>Delhi | 05-Jan-2021</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      We were fortunate enough to choose Crysta IVF to pursue
                      our surrogacy treatment. Right from the beginning to the
                      end of the treatment, our surrogacy journey went well with
                      this clinic. The center knows how to treat both their IPs
                      and surrogates with care and is brilliant at facilitating
                      the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewDesktopCity ReviewDesktopCitySurrogacy ">
          {/* <div className="row">
                        <div className="col m9 valign-wrapper">
                            <h1>Our Patients Love Us</h1>
                            <span className="fa fa-star firstStar"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <h3>4.9/5 <span>Stars</span></h3>
                        </div>
                        <div className="col m2 offset-m1 center">
                            <button style={{ border: 'none' ,paddingTop: '70px' }} className="transparent arrowLeft" onClick={() => this.carousel.slidePrev()}><img src={arrowRight} alt="" /></button>
                            <button style={{ border: 'none' }} className="transparent arrowRight" onClick={() => this.carousel.slideNext()}><img src={arrowRight} alt="" /></button>
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
                                                            <span className="card-title">{item.cName}</span>
                                                            <h6>{item.date}</h6>
                                                            <p>{item.feedback}</p>
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
          <div className="review-carouselCity">
            <div className="header">
              <div className="rating">
                <h1>Our Patients Love Us</h1>
                <span>
                  <img src={stars} className="cStar cFirst" alt="" />
                </span>
                <span>
                  <img src={stars} className="cStar" alt="" />
                </span>
                <span>
                  <img src={stars} className="cStar" alt="" />
                </span>
                <span>
                  <img src={stars} className="cStar" alt="" />
                </span>
                <span>
                  <img src={stars} className="cStar" alt="" />
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
            <div className="slides slidesSurrogacy">
              {newListAccordingToCity.map((item, index) => (
                <CarouselItemCity
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
