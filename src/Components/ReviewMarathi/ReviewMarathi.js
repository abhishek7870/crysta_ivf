import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../ReviewHindi/ReviewHindi.css";
import "../ReviewHindi/reviewCarouselHindi.css";
import seema from "../../images/seema.webp";
import manchanda from "../../images/manchanda.webp";
import makkad from "../../images/makkad.webp";
import kapoor from "../../images/kapor.png";
import stars from "../../images/stars.png";
// import Carousel from "react-elastic-carousel";
// import arrowRight from '../../images/whiteArrow.png';
import { SecondCarouselContextMarathi } from "../../ReviewCarouselContextMarathi";
import CarouselItem from "../ReviewHindi/carouselItemHindi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './ReviewMarathi.css';

export default class ReviewCity extends Component {
  static contextType = SecondCarouselContextMarathi;
  state = {
    items: [
      {
        id: 1,
        image: makkad,
        cName: "मिस्टर एंड मिसेज मक्क्ड़         ",
        date: "Pune | 23 Jun, 2020",
        feedback:
          "इनफर्टिलिटी के साथ सालो बिताना परेशानी भरा और दर्दनाक था लेकिन क्रिस्टा आईवीएफ और इनफर्टिलिटी विशेषज्ञों की सर्वश्रेष्ठ टीम ने हमारे लिए इलाज को बेहद आसान और परेशानी रहित बना दिया।",
      },
      {
        id: 2,
        image: manchanda,
        cName: "मिसेज हर्षा मनचंदा ",
        date: "Delhi | 02 Sep, 2020",
        feedback:
          "बेस्ट आई वी एफ ट्रीटमेंट के अलावा मैं सर्वश्रेष्ठ आई वी एफ डॉक्टर और उनकी विशेषज्ञता और उनका  अपने पेशेंट्स के प्रति दया भावना से बोहोत खुश हूँ | यही कुछ विशेषग्यताये क्रिस्टा IVF को बेस्ट आई वी सेंटर बनाती हैं| ",
      },
      {
        id: 3,
        image: seema,
        cName: "मिसेज सीमा तनेजा ",
        date: "Pune | 21 Nov, 2020",
        feedback:
          "लगातार दो बार आई वी एफ फेलियर के बाद मेरी गर्भाधान की संभावना काफी कम थी। क्रिस्टा आईवीएफ ने मेरे जीवन को बदल दिया क्योंकि यहाँ मुझे सफल गर्भाधान और एक स्वस्थ बच्चे की डिलीवरी में मदद मिली।",
      },
      {
        id: 4,
        image: kapoor,
        cName: "मिसेज रचना मोंगा ",
        date: "Delhi | 05 Jan, 2021",
        feedback:
          "मैं हमेशा इनफर्टिलिटी से जूझ रहे कपल्स को क्रिस्टा आईवीएफ की सलाह दूंगा क्योंकि यह पॉकेट-फ्रेंडली दरों पर उच्च स्तर के इनफर्टिलिटी उपचार प्रदान करता है। उनकी मेडिकल लोन की सुविधा ने मुझे अपना इलाज पूरी तरह से जारी रखने में मदद की।",
      },
    ],
  };
  render() {
    const { mainData, leftData, slideLeft, slideRight } = this.context;
    return (
      <section className="section section-review">
        <div className="ReviewMobileHindi center">
          <h1 className="ReievHeadMobile">आमचे रुग्ण आमच्यावर प्रेम करतात</h1>
          <span><img src={stars} className="cStar cFirst" alt="भारत में आईवीएफ (IVF) का खर्चा" /></span>
          <span><img src={stars} className="cStar" alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" /></span>
          <span><img src={stars} className="cStar" alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" /></span>
          <span><img src={stars} className="cStar" alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" /></span>
          <span><img src={stars} className="cStar" alt="भारत में आईवीएफ (IVF) का खर्चा" /></span>
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
                        <img src={makkad} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title"> श्री आणि श्रीमती मकर </span>
                          <h6>Pune | 23-Jun-20</h6>
                        </div>
                      </div>
                    </div>
                   <p>वंध्यत्वासह वर्षे व्यतीत करणे त्रासदायक आणि मनाला त्रास देणारे होते परंतु क्रिस्टा आयव्हीएफ आणि येथील वंध्यत्व विशेषज्ञांच्या सर्वोत्कृष्ट कार्यसंघाने आमच्यासाठी उपचार सोपे आणि त्रास-मुक्त केले.</p>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        <img src={manchanda} alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" />
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                        <div className="row"></div>
                          <span className="card-title">
                          सौ हर्षा मनचंदा
                          </span>
                          <h6>Delhi | 02-Sep-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>आयव्हीएफ चे यश त्यांनाच येते जे वंध्यत्व उपचारासाठी  क्रिस्टा आयव्हीएफ निवडतात . त्यांच्या रुग्णांबद्दलच्या द्रुष्टीकोन, आणि कौशल्याचा योग्य वापर जसा जादूच  करतो.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        <img src={seema} alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" />
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                        <div className="row"></div>
                          <span className="card-title"> सौ सीमा तनेजा </span>
                          <h6>Pune | 21-Nov-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>सलग 2 आयव्हीएफ अपयश अनुभवल्यानंतर माझ्या संकल्पनेची शक्यता जवळजवळ कमी झाली आहे.
क्रिस्टा आयव्हीएफशी सल्लामसलत केल्याने माझे आयुष्य बदलले कारण मला यशस्वी संकल्पना आणि दोन आयव्हीएफ अयशस्वी झाल्यानंतर निरोगी बाळ प्रसूती करण्यात मदत झाली.
</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        <img src={kapoor} alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" />
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                        <div className="row"></div>
                          <span className="card-title"> सौ. रचना मोंगा </span>
                          <h6>Delhi | 05-Jan-2021</h6>
                        </div>
                      </div>
                    </div>
                    <p>मी नेहमीच क्रिस्टा आयव्हीएफची शिफारस करेन कारण ते पॉकेट-अनुकूल दरावर उच्च-दर्जाची वंध्यत्व उपचार देते. त्यांच्या वैद्यकीय कर्जाच्या सुविधेमुळे माझे उपचार अत्यंत सोयीस्करपणे सुरू ठेवण्यास मला मदत केली.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ReviewDesktopHindi">
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
                <h1 className="ReviewMarathiHead">आमचे रुग्ण आमच्यावर प्रेम करतात</h1>
                <span><img src={stars} className="cStar cFirst" alt="भारत में बेस्ट आई वी एफ डॉक्टर" /></span>
                <span><img src={stars} className="cStar" alt="भारत में आई वी एफ का खर्चा" /></span>
                <span><img src={stars} className="cStar" alt="भारत में बेस्ट आई वी एफ सेंटर" /></span>
                <span><img src={stars} className="cStar" alt="भारत में आई वी एफ का खर्चा" /></span>
                <span><img src={stars} className="cStar" alt="भारत में बेस्ट आई वी एफ डॉक्टर" /></span>
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
