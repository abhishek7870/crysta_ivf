import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../Components/ReviewHindi/ReviewHindi.css";
import "../../Components/ReviewHindi/reviewCarouselHindi.css";
import seema from "../../images/seema.webp";
import manchanda from "../../images/manchanda.webp";
import makkad from "../../images/makkad.webp";
import kapoor from "../../images/kapor.png";
import stars from "../../images/stars.png";
import SeemaPng from "../../images/SeemaPng.png";
import MakkadPng from "../../images/MakkadPng.png";
import ManchandaPng from "../../images/ManchandaPng.png";
import MongaPng from '../../images/MongaPng.png';
// import Carousel from "react-elastic-carousel";
// import arrowRight from '../../images/whiteArrow.png';
import { SecondCarouselContextGujarati } from "../../ReviewCarouselContextGujatati";
import CarouselItem from "../../Components/ReviewHindi/carouselItemHindi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './ReviewGujarati.css';

export default class ReviewCity extends Component {
  static contextType = SecondCarouselContextGujarati;
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
          <h1 className="reviewHeadingGujarati">અમારા દર્દીઓ અમારી ઉપર <br></br> પૂરો ભરોસો કરે છે</h1>
          <span><img src={stars} className="gstar cFirst" alt="શ્રેષ્ઠ આઇવીએફ ડોકટરો" /></span>
          <span><img src={stars} className="gstar" alt="શ્રેષ્ઠ આઇવીએફ ડોકટરો" /></span>
          <span><img src={stars} className="gstar" alt="શ્રેષ્ઠ આઇવીએફ સારવાર" /></span>
          <span><img src={stars} className="gstar" alt="શ્રેષ્ઠ આઇવીએફ સારવાર" /></span>
          <span><img src={stars} className="gstar" alt="શ્રેષ્ઠ આઇવીએફ સારવાર" /></span>
          <h3>
            4.9/5 <span>Stars</span>
          </h3>
          <div className="crouselDiv">
            <div className="carousel carousel-slider gujratiSliderMobile">
              <div className="carousel-item row ">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={makkad} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /> */}
                        <picture>
                      <source srcset={makkad} type="image/webp" />
                      <source srcset={MakkadPng} type="image/png" /> 
                      <img src={MakkadPng} srcset={MakkadPng}  alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">શ્રીમતી મકર
</span>
                          <h6>Pune | 23-Jun-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>વંધ્યત્વ સાથે વર્ષો  નિકકાળવા એ મુશ્કેલીભર્યું અને દિમાગથી તણાવ ભરાયેલું હતું પરંતુ
                    Crysta IVF અને અહીં વંધ્યત્વ નિષ્ણાતોની શ્રેષ્ઠ ટીમે સારવારને સરળ અને અમને
                    મુશ્કેલી માંથી દૂર કર્યા છે.
                    </p>
                  </div>
                </div>
              </div>

              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={manchanda} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /> */}
                        <picture>
                      <source srcset={manchanda} type="image/webp" />
                      <source srcset={ManchandaPng} type="image/png" /> 
                       <img src={ManchandaPng} srcset={ManchandaPng}  alt="સૌથી વધુ આઇવીએફ સફળતા દર" /> 
                    </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">
                            શ્રીમતી હર્ષ મનચાંડા
                          </span>
                          <h6>Delhi | 02-Sep-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      આઇવીએફ (IVF) સફળતા તેમના માટે આવે છે જેઓ તેમની વંધ્યત્વની સારવાર માટે ક્રિસ્ટા
                      આઇવીએફ (IVF) પસંદ કરે છે. હું છું તેમની કુશળતા અને તેમના પ્રત્યે કરુણાપૂર્ણ અભિગમના સ્તર
                      દ્વારા જોડાયેલી દર્દિઓમાંની એક.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={seema} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /> */}
                        <picture>
                      <source srcset={seema} type="image/webp" />
                      <source srcset={SeemaPng} type="image/png" /> 
                      <img src={SeemaPng} srcset={SeemaPng}  alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">શ્રીમતી સીમા તનેજા
</span>
                          <h6>Pune | 21-Nov-20</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      સતત 2 આઇવીએફ (IVF) નિષ્ફળતાઓનો અનુભવ કર્યા પછી મારી આશા લગભગ ઓછી થઈ ગઈ
                      હતી. Crysta IVF ની સલાહ લેવાથી મારું જીવન બદલાઈ ગયું કેમ કે તે મને સફળ
                      થવામાં મદદ કરી અને બે આઇવીએફ (IVF) નિષ્ફળતા પછી તંદુરસ્ત બાળક ની ડિલિવરી થઇ છે.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12 one">
                  <div className="card ">
                    <div className="horizontal">
                      <div className="card-image">
                        {/* <img src={kapoor} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /> */}
                        <picture>
                      <source srcset={kapoor} type="image/webp" />
                      <source srcset={MongaPng} type="image/png" /> 
                      <img src={MongaPng} srcset={MongaPng}  alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </picture>
                      </div>
                      <div className="card-stacked">
                        <div className="card-content">
                          <div className="row"></div>
                          <span className="card-title">શ્રીમતી રચના મોંગા
</span>
                          <h6>Delhi | 05-Jan-2021</h6>
                        </div>
                      </div>
                    </div>
                    <p>
                      હું હંમેશાં Crysta IVF ની ભલામણ કરીશ કારણ કે તે વંધ્યત્વની ટોચની ઉપચારો
                      આપે છે ખિસ્સા-મૈત્રીપૂર્ણ દરે તેમની તબીબી લોન સુવિધાથી મારી સારવાર ચાલુ રાખવામાં
                      મદદ મળી ખૂબ જ સગવડ સાથે.
                    </p>
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
                <h1 style={{ fontSize: '35px' }}>અમારા દર્દીઓ અમારી ઉપર પૂરો ભરોસો કરે છે </h1>
                <span><img src={stars} className="cStar cFirst" alt="સૌથી વધુ આઇવીએફ સફળતા દર" /></span>
                <span><img src={stars} className="cStar" alt="સૌથી વધુ આઇવીએફ સફળતા દર" /></span>
                <span><img src={stars} className="cStar" alt="નવીનતમ આઇવીએફ તકનીક" /></span>
                <span><img src={stars} className="cStar" alt="નવીનતમ આઇવીએફ તકનીક" /></span>
                <span><img src={stars} className="cStar" alt="નવીનતમ આઇવીએફ તકનીક" /></span>
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
