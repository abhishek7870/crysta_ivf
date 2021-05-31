import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./ReviewCity.css";
import "./reviewCarouselCity.css";
import stars from "../../images/stars.png";
import fig1 from "../../images/Group 2369.png";
import { SecondCarouselContextCity } from "../../ReviewCarouselContextCity";
import CarouselItemCity from "./carouselItemCity";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import $ from "jquery";

export default class ReviewCity extends Component {
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
  }
  static contextType = SecondCarouselContextCity;

  constructor(props) {
    super(props);

    this.state = { newDataList: [], leftCityData: [] };
  }
  render() {
    const { mainData } = this.context;
    const newListAccordingToCity = mainData.filter(
      (item) => item.city === this.props.cityname
    );
    const slideLeft = () => {
      if (newListAccordingToCity.length === 2) {
        return null;
      } else {
        let item = newListAccordingToCity.shift();
        this.setState({ leftCityData: [...this.state.leftCityData, item] });
        this.setState({ newDataList: newListAccordingToCity });
      }
    };

    const slideRight = () => {
      if (this.state.leftCityData.length < 1) {
        return null;
      } else {
        let item = this.leftCityData.pop();
        this.state.newDataList.unshift(item);
        this.setState({ leftCityData: [...this.state.leftCityData] });
        this.setState({ newDataList: newListAccordingToCity });

        //console.log(mainData);
      }
    };

    return (
      <section className="section section-review">
        <div className="ReviewMobileCity center">
          <h1>Our Patients Love Us</h1>
          <span style={{ border: "2px solid black" }}>
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
          {/*<span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
    <span className="fa fa-star"></span>*/}
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
                        {/* <img src={seema} alt="IVF Journey made easy" /> */}
                        <picture>
                          {/* <source srcset={seema} type="image/webp" />
                          <source srcset={SeemaPng} type="image/png" /> */}
                          <img
                            src={fig1}
                            srcset={fig1}
                            alt="IVF Journey made easy"
                          />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            {" "}
                            Mrs. Seema Taneja{" "}
                          </span>
                          <h6>Pune | 23-Jun-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      My chances of conception almost diminished after
                      experiencing 2 IVF failures in a row. Consulting Crysta
                      IVF changed my life as it helped me in a successful
                      conception and a healthy baby delivery after two IVF
                      failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={manchanda} alt="True IVF treatment companion" /> */}
                        <picture>
                          {/* <source srcset={manchanda} type="image/webp" />
                      <source srcset={ManchandaPng} type="image/png" />  */}
                          <img src={fig1} alt="Best IVF Treatment" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            Mrs. Harsha Manchanda
                          </span>
                          <h6>Delhi | 02-Sep-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      IVF success comes to those who opt Crysta IVF for their
                      infertility treatment. I am spellbound by their level of
                      expertise and compassionate approach towards their
                      patients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={makkad} alt="Best IVF Treatment" /> */}
                        <picture>
                          {/* <source srcset={makkad} type="image/webp" />
                      <source srcset={MakkadPng} type="image/png" />  */}
                          <img src={fig1} alt="Best IVF Treatment" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title"> Mr. & Mrs. Makker</span>
                          <h6>Pune | 21-Nov-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      Spending years with infertility was troublesome and
                      mind-boggling but Crysta IVF and the best team of
                      infertility specialists here made the treatment easy and
                      hassle-free for us
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={kapoor} alt="Top IVF Doctors" /> */}
                        <picture>
                          {/* <source srcset={kapoor} type="image/webp" />
                      <source srcset={MongaPng} type="image/png" />  */}
                          <img src={fig1} alt="Best IVF Treatment" />
                        </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">Mrs. Rachna Monga </span>
                          <h6>Delhi | 05-Jan-2021</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      I would always recommend Crysta IVF because it offers
                      top-notch infertility treatments at pocket-friendly rates.
                      Their medical loan facility helped me to continue my
                      treatment with utmost convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewDesktopCity">
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
                <button
                  onClick={slideRight}
                  disabled={this.state.leftCityData.length === 0}
                >
                  <BsArrowLeft />
                </button>
                <button
                  onClick={slideLeft}
                  disabled={newListAccordingToCity.length < 3}
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="slides">
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
