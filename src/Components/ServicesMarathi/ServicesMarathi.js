import React, { Component } from 'react';
import '../ServicesHindi/ServicesHindi.css';
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
            <h2 className="fertilityChainHeading">भारतातील सर्वाधिक विश्वसनीय <br></br>  फर्टिलिटी केंद्र </h2>
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
              <h2 className="center">महाराष्ट्रात सर्वोत्कृष्ट आयव्हीएफ (IVF) उपचार मिळवा</h2>
              <p>Crysta IVF एक अग्रगण्य सुपीकता साखळी आहे जी महाराष्ट्रात सर्वाधिक यशस्वी दरांसह उत्कृष्ट श्रेणीत आणि समग्र समाकलित आयव्हीएफ उपचार प्रदान करण्याचा प्रयत्न करते. आम्ही अत्याधुनिक पायाभूत सुविधांसह महाराष्ट्रातील एक उत्तम आयव्हीएफ केंद्र आहोत
</p>
              <div className="carousel carousel-slider secondSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={One} alt=" भारत में बेस्ट आईवीएफ (IVF) सेंटर" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>वंध्यत्व उपचार, व  वंध्यत्व उपचार तद्यांचा  सलाह 
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
                        <p>  वैयक्तिकृत उपचार योजना आणि समुपदेशन</p>
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
                        <p> उत्तेजन, गर्भाधान, गर्भ संस्कृती आणि भ्रूण हस्तांतरण

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
                        <p>आयव्हीएफ नंतर गर्भधारणा चाचणी
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
              <h6>महाराष्ट्रातील आयव्हीएफ (IVF) <br></br> किंमत</h6>
              </div>
              <p>क्रिस्टा आयव्हीएफकडे अत्यंत अनुभवी आयव्हीएफ डॉक्टरांची एक टीम आहे आणि आम्ही विविध प्रकारचे वंध्यत्व समस्या दूर करण्यासाठी प्रगत तंत्रज्ञानासह सज्ज आहोत आणि वैद्यकीय कर्मचार्‍यांनी सज्ज आहोत.
आयव्हीएफ  च्या उपचाराची रक्कम आवश्यकतेनुसार व 
विविध घटकांनुसार  बदलते . उदाहरणार्थ 
</p>
              <ul>
                <li><span>अंडी देणगीदार आवश्यकता आहे किंवा नाही</span></li>
                <li><span>वय</span></li>
                <li><span>अंडी किंवा शुक्राणू गोठविणे आणि प्रजनन व  प्रजनन उपचाराचा वापर जसे लेसर असिस्टेड हॅचिंग</span></li>
                <li><span>आयसीएसआय, टेसा इत्यादींवर अवलंबून प्रत्येक प्रजनन प्रकरणात आयव्हीएफ उपचारांची किंमत बदलते</span></li>
              </ul>
              <p><span>भारत में आईवीएफ (IVF) लागत का मूल्य और प्रतिक्रिया जानने के लिए, हमारे इनफर्टिलिटी विशेषज्ञों से बात करें।</span></p>
              <div className="center">
              <button className="btn" onClick={this.showModal} >महाराष्ट्रातील IVF खर्च जाणून घ्या</button>
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
            <h5>महाराष्ट्रात सर्वोत्कृष्ट आयव्हीएफ (IVF) उपचार मिळवा</h5>
            <h4>Crysta IVF एक अग्रगण्य सुपीकता साखळी आहे जी महाराष्ट्रात सर्वाधिक यशस्वी दरांसह उत्कृष्ट श्रेणीत आणि समग्र समाकलित आयव्हीएफ (IVF) उपचार प्रदान करण्याचा प्रयत्न करते. आम्ही अत्याधुनिक पायाभूत सुविधांसह महाराष्ट्रातील एक उत्तम आयव्हीएफ (IVF) केंद्र आहोत</h4>
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
                        <h6>वंध्यत्व उपचार, व  वंध्यत्व उपचार तद्यांचा  सलाह 
</h6>
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
                        <h6> वैयक्तिकृत उपचार योजना आणि समुपदेशन </h6>
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
                        <h6>  उत्तेजन, गर्भाधान, गर्भ संस्कृती आणि भ्रूण हस्तांतरण
</h6>
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
                        <h6>आयव्हीएफ (IVF) नंतर गर्भधारणा चाचणी
</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="desktopServiceShapeCity"></div> */}
            <div className="serviceSecondDiv">
              <h1>महाराष्ट्रातील आयव्हीएफ (IVF) किंमत</h1>
              <h2>क्रिस्टा आयव्हीएफकडे अत्यंत अनुभवी आयव्हीएफ (IVF) डॉक्टरांची एक टीम आहे आणि आम्ही विविध प्रकारचे वंध्यत्व समस्या दूर करण्यासाठी प्रगत तंत्रज्ञानासह सज्ज आहोत आणि वैद्यकीय कर्मचार्‍यांनी सज्ज आहोत.
आयव्हीएफ (IVF)  च्या उपचाराची रक्कम आवश्यकतेनुसार व 
विविध घटकांनुसार  बदलते . उदाहरणार्थ 
        
                 </h2>
              <ul className="IvfCostListDelhi">
                <li>&#9675; <span> अंडी देणगीदार आवश्यकता आहे   किंवा नाही</span></li>
                <li>&#9675; <span> वय</span></li>
                <li>&#9675; <span> अंडी किंवा शुक्राणू गोठविणे आणि प्रजनन व  प्रजनन उपचाराचा वापर जसे लेसर असिस्टेड हॅचिंग</span></li>
                <li>&#9675; <span>आयसीएसआय, टेसा इत्यादींवर अवलंबून प्रत्येक प्रजनन प्रकरणात आयव्हीएफ (IVF) उपचारांची किंमत बदलते</span></li>
              </ul>
              <h2 className="pricing">भारत में आईवीएफ (IVF) लागत का मूल्य और प्रतिक्रिया जानने के लिए, हमारे इनफर्टिलिटी विशेषज्ञों से बात करें।</h2>
              <div className="center">
              <button className="btn buttonOne" onClick={this.showModal}>
              महाराष्ट्रातील IVF खर्च जाणून घ्या
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
              <h1>कर्ज 0% ईएमआय उपलब्ध </h1>
              <img src={arrowOranges} alt="भारत में आईवीएफ (IVF) का खर्चा" className="orangeArrow" />
              <img src={loans} alt="भारत में आईवीएफ (IVF) का खर्चा" className="loanImage" />
            </div>
          </div>
        </section>

      )
    }
  }
}
