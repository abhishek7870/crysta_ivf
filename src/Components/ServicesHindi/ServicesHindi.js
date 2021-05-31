import React, { Component } from 'react';
import './ServicesHindi.css';
import CustomModalHindi from '../CustomModalHindi/CustomModalHindi';
import cityServiceFour from  '../../images/cityServiceFour.png';
import One from  '../../images/1.png';
import Two from  '../../images/2.png';
import Three from  '../../images/3.png';
import Four from  '../../images/4.png';
import arrowOranges from '../../images/arrowOrange.png';
import loans from '../../images/loan.png';
import chainOne from '../../images/chainOne.png';
import chainTwo from '../../images/chainTwo.png';
import chainThree from '../../images/chainThree.png';

export default class ServicesHindi extends Component {
  constructor(props) {
    super(props);
    this.state = { cityname: '' , width: window.innerWidth};
  }
  handlePopUp = () => {
    this.setState({ showModal: true });
  };
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    setTimeout(this.handlePopUp, 30000);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showModal = (e) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section-services">
          <div className="servicesMobileHindi">
            <h2 className="fertilityChainHeading">भारत की सबसे भरोसेमंद <br></br> फर्टिलिटी श्रृंखला</h2>
            {/* <div className="mobileOrangeLine">
            <img src={orangeLine} alt="" />
          </div> */}
            {/* <img src={orangeLine} alt="" className="mobileOrangeLine" /> */}
            <div className="carousel carousel-slider firstSlider">
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainOne} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">आईवीएफ (IVF) की सफलता दर</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainTwo} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">भारत में आईवीएफ (IVF) केंद्र</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainThree} alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">वर्षों का अनुभव</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="servicesPurpleBgHindi">
              <h2 className="center">भारत में सर्वश्रेष्ठ आईवीएफ (IVF) उपचार प्राप्त करें</h2>
              <p>Crysta IVF प्रमुख इनफर्टिलिटी श्रृंखलाओं में से एक है जो भारत में सर्वश्रेष्ठ सफलता दर के साथ सर्वश्रेष्ठ आईवीएफ (IVF) उपचार प्रदान करता है। यह भारत में सबसे अच्छे आईवीएफ (IVF) केंद्रों में से एक हैं, जो अपने अत्याधुनिक इंफ्रास्ट्रक्चर और उन्नत प्रौद्योगिकी के लिए जाना जाता है।
</p>
              <div className="carousel carousel-slider secondSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={One} alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>फर्टिलिटी सलाहकार के साथ कंसल्टेशन
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={Two} alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>निजीकृत उपचार योजना और ट्रीटमेंट </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={Three} alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>फर्टिलाइजेशन, भ्रूण संस्कृति और भ्रूण स्थानांतरण
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span>  <img src={cityServiceFour} alt="भारत में आईवीएफ (IVF) का खर्चा" />
                      </div>
                      <div className="card-content center">
                        <p>आईवीएफ (IVF) के बाद गर्भावस्था परीक्षण
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="indicatorLine"></span>
              </div>
            </div>
            <div className="leadButton">
              <div className="center">
              <h6>भारत में आईवीएफ (IVF) <br></br> की लागत</h6>
              </div>
              <p>Crysta IVF में अत्यधिक अनुभवी IVF डॉक्टरों की एक टीम है और हम विभिन्न प्रकार की इनफर्टिलिटी समस्याओं का इलाज करने के लिए उन्नत तकनीक और प्रतिबद्ध चिकित्सा कर्मियों से सुसज्जित हैं। आईवीएफ (IVF) उपचार की लागत प्रत्येक इनफर्टिलिटी  मामले के लिए अलग-अलग कारकों पर निर्भर करती है, जैसे कि 
</p>
              <ul>
                <li><span>आवश्यक स्टिमुलेशन की मात्रा</span></li>
                <li><span>एग्ग डोनर की आवश्यकता</span></li>
                <li><span>उम्र</span></li>
                <li><span>फ्रीजिंग ऑफ़ एग्ग और स्पर्म और उन्नत प्रजनन उपचार जैसे लेजर असिस्टेड हैचिंग, इकसी, टेसा आदि का उपयोग</span></li>
              </ul>
              <p><span>भारत में आईवीएफ (IVF) लागत का मूल्य और प्रतिक्रिया जानने के लिए, हमारे इनफर्टिलिटी विशेषज्ञों से बात करें।</span></p>
              <div className="center">
              <button className="btn" onClick={this.showModal} >भारत में IVF की लागत जाने</button>
              </div>
              {this.state.showModal &&
                <CustomModalHindi onCloseModal={this.showModal} left={'0%'} right={'30%'} top={'0%'} />}
            </div>
          </div>
        </section>
      )
    }
    else {
      return (
        <section className="section-services">
          <div className="servicesDesktopHindi">
            <h5>भारत में सर्वश्रेष्ठ आईवीएफ (IVF) उपचार प्राप्त करें</h5>
            <h4>क्रिस्टा आईवीएफ (IVF) प्रमुख इनफर्टिलिटी श्रृंखलाओं में से एक है जो भारत में सर्वश्रेष्ठ सफलता दर के साथ सर्वश्रेष्ठ आईवीएफ (IVF) उपचार प्रदान करता है। यह भारत में सबसे अच्छे आईवीएफ (IVF) केंद्रों में से एक हैं, जो अपने अत्याधुनिक इंफ्रास्ट्रक्चर और उन्नत प्रौद्योगिकी के लिए जाना जाता है।
</h4>
            {/* <img className="yellowLineImage" src={yellowLine} alt="" /> */}
            <div className="row OuterRowService">
              <div className="col m12">
                <div className="row InnerRowService">
                  <div className="serviceConnectingLine"></div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">1</div>
                          <img src={One} alt="भारत में बेस्ट आईवीएफ (IVF) सेंटर" />
                        </div>
                        <h6>फर्टिलिटी सलाहकार के साथ कंसल्टेशन</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                          <div className="CityService">
                          <div className="orangeCircle">2</div>
                            <img src={Two} alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" />
                          </div>
                        <h6>निजीकृत उपचार योजना और ट्रीटमेंट </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">3</div>
                          <img src={Three} alt="भारत में बेस्ट आईवीएफ (IVF) डॉक्टर" />
                        </div>
                        <h6>फर्टिलाइजेशन, भ्रूण संस्कृति और भ्रूण स्थानांतरण</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">4</div>
                          <img src={Four} alt="भारत में आई वी एफ का खर्चा" />
                        </div>
                        <h6>आईवीएफ (IVF) के बाद गर्भावस्था परीक्षण</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="desktopServiceShapeCity"></div> */}
            <div className="serviceSecondDiv">
              <h1>भारत में आईवीएफ (IVF) की लागत</h1>
              <h2>Crysta IVF में अत्यधिक अनुभवी IVF डॉक्टरों की एक टीम है और हम विभिन्न प्रकार की इनफर्टिलिटी समस्याओं का इलाज करने के लिए उन्नत तकनीक और प्रतिबद्ध चिकित्सा कर्मियों से सुसज्जित हैं। आईवीएफ (IVF) उपचार की लागत प्रत्येक इनफर्टिलिटी  मामले के लिए अलग-अलग कारकों पर निर्भर करती है, जैसे कि 
         
                 </h2>
              <ul className="IvfCostListDelhi">
                <li>&#9675; <span> आवश्यक स्टिमुलेशन की मात्रा</span></li>
                <li>&#9675; <span> एग्ग डोनर की आवश्यकता </span></li>
                <li>&#9675; <span> उम्र </span></li>
                <li>&#9675; <span> फ्रीजिंग ऑफ़ एग्ग और स्पर्म </span></li>
                <li>&#9675; <span> और उन्नत प्रजनन उपचार जैसे लेजर असिस्टेड हैचिंग, इकसी, टेसा आदि का उपयोग। </span></li>
              </ul>
              <h2 className="pricing">भारत में आईवीएफ (IVF) लागत का मूल्य और प्रतिक्रिया जानने के लिए, हमारे इनफर्टिलिटी विशेषज्ञों से बात करें।</h2>
              <div className="center">
              <button className="btn buttonOne" onClick={this.showModal}>
              भारत में IVF की लागत जाने
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
            <div className="reactangleShape valign-wrapper">
              <h1>लोन उपलब्ध @ 0% ईएमआई</h1>
              <img src={arrowOranges} alt="भारत में आईवीएफ (IVF) का खर्चा" className="orangeArrow" />
              <img src={loans} alt="भारत में आईवीएफ (IVF) का खर्चा" className="loanImage" />
            </div>
          </div>
        </section>

      )
    }
  }
}
