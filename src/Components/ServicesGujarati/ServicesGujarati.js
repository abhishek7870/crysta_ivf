import React, { Component } from 'react';
import '../../Components/ServicesHindi/ServicesHindi.css';
import CustomModalHindi from '../CustomModalGujarati/CustomModalGujarati';
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
import $ from 'jquery';

export default class ServicesGujarati extends Component {
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
            <h2 className="fertilityChainHeading">ભારતની સૌથી વિશ્વસનીય<br></br>  ઇંફેરનીલીટી ની સાંકળ </h2>
            {/* <div className="mobileOrangeLine">
            <img src={orangeLine} alt="" />
          </div> */}
            {/* <img src={orangeLine} alt="" className="mobileOrangeLine" /> */}
            <div className="carousel carousel-slider firstSlider">
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainOne} alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">આઈવીએફ IVF સફળતા દરો</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainTwo} alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">ભારતમાં કેન્દ્રો</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={chainThree} alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">વર્ષો નો અનુભવ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="servicesPurpleBgHindi">
              <h2 className="center">ગુજરાતમાં શ્રેષ્ઠ આઈવીએફ (IVF) સારવાર મેળવો </h2>
              <p>Crysta IVF એ અગ્રણી ઇંફેરનીલીટી ની સાંકળોમાંની એક છે જે શ્રેષ્ઠ વર્ગમાં પ્રદાન 
કરવાના પ્રયત્નો કરે છે 
અને સર્વાધિક સફળતા દર સાથે ગુજરાતમાં સાકલ્યવાદી સંકલિત આઈવીએફ (IVF) સારવાર. અમે 
એક છે આર્ટ ઇન્ફ્રાસ્ટ્રક્ચર રાજ્ય સાથે ગુજરાતમાં શ્રેષ્ઠ આઈવીએફ (IVF) કેન્દ્રો. </p>
              <div className="carousel carousel-slider secondSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={One} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>એઆરટી કન્સલ્ટન્ટ સાથે સત્ર 
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={Two} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>વ્યક્તિગત સારવાર યોજના અને પરામર્શ </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={Three} alt="સૌથી વધુ આઇવીએફ સફળતા દર" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>ઉત્તેજન, ગર્ભાધાન, ગર્ભ સંસ્કૃતિ અને ગર્ભ સ્થાનાંતરણ 
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span>  <img src={cityServiceFour} alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                      </div>
                      <div className="card-content center">
                        <p>આઈવીએફ (IVF) પછી ગર્ભાવસ્થા પરિક્ષણ 
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
              <h6>ગુજરાતમાં આઈવીએફ (IVF) <br></br> નો ખર્ચ </h6>
              </div>
              <p>
              Crysta IVF પાસે ખૂબ અનુભવી આઇવીએફ (IVF) ડોક્ટરોની એક ટીમ છે અને અમે તેમાં 
સજ્જ છીએ અદ્યતન તકનીક અને વિવિધ પ્રકારના ઇલાજ માટે પ્રતિબદ્ધ તબીબી કર્મચારીઓ 
વંધ્યત્વ સમસ્યાઓ. આઇવીએફ (IVF) સારવારની કિંમત તેના આધારે દરેક પ્રજનન કેસો માટે 
બદલાય છે </p>
              <ul>
                <li><span>ઉત્તેજનાની રકમ જરૂરી છે </span></li>
                <li><span>એગ ડોનર </span></li>
                <li><span>વય </span></li>
                <li><span>એગ અથવા શુક્રાણુઓને ફ્રીઝ કરવું</span></li>
                <li><span>એડવાન્સ લેસર સહાયિત હેચિંગ,ઈક્સી,ટેસા  વગેરે </span></li>
              </ul>
              <p><span>જેવા અદ્યતન વંધ્યત્વ  ઉપચારનો વપરાશ.ગુજરાતમાં આઈવીએફ (IVF) ખર્ચની સંપૂર્ણ માર્ગદર્શન 
અને ભાવોની શ્રેણી મેળવવા માટે, અમારા વંધ્યત્વ નિષ્ણાતો.સાથે વાત કરો . </span></p>
              <div className="center">
              <button className="btn" onClick={this.showModal} >ગુજરાતમાં IVF ખર્ચ જાણો </button>
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
            <h5>ગુજરાતમાં શ્રેષ્ઠ આઈવીએફ (IVF) સારવાર મેળવો</h5>
            <h4>Crysta IVF એ અગ્રણી ઇંફેરનીલીટી ની સાંકળોમાંની એક છે જે શ્રેષ્ઠ વર્ગમાં પ્રદાન 
કરવાના પ્રયત્નો કરે છે 
અને સર્વાધિક સફળતા દર સાથે ગુજરાતમાં સાકલ્યવાદી સંકલિત આઈવીએફ (IVF) સારવાર. અમે 
એક છે આર્ટ ઇન્ફ્રાસ્ટ્રક્ચર રાજ્ય સાથે ગુજરાતમાં શ્રેષ્ઠ આઈવીએફ (IVF) કેન્દ્રો. </h4>
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
                          <img src={One} alt="સૌથી વધુ આઇવીએફ સફળતા દર" />
                        </div>
                        <h6>એઆરટી કન્સલ્ટન્ટ સાથે સત્ર </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                          <div className="CityService">
                          <div className="orangeCircle">2</div>
                            <img src={Two} alt="શ્રેષ્ઠ આઇવીએફ સારવાર" />
                          </div>
                        <h6>વ્યક્તિગત સારવાર યોજના અને પરામર્શ</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">3</div>
                          <img src={Three} alt="શ્રેષ્ઠ આઇવીએફ સારવાર" />
                        </div>
                        <h6>ઉત્તેજન, ગર્ભાધાન, ગર્ભ સંસ્કૃતિ અને ગર્ભ સ્થાનાંતરણ </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col m3">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="CityService">
                        <div className="orangeCircle">4</div>
                          <img src={Four} alt="શ્રેષ્ઠ આઇવીએફ સારવાર" />
                        </div>
                        <h6>આઈવીએફ (IVF) પછી ગર્ભાવસ્થા પરિક્ષણ</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="desktopServiceShapeCity"></div> */}
            <div className="serviceSecondDiv">
              <h1>ગુજરાતમાં આઈવીએફ (IVF) નો ખર્ચ </h1>
              <h2>Crysta IVF પાસે ખૂબ અનુભવી આઇવીએફ (IVF) ડોક્ટરોની એક ટીમ છે અને અમે તેમાં 
સજ્જ છીએ અદ્યતન તકનીક અને વિવિધ પ્રકારના ઇલાજ માટે પ્રતિબદ્ધ તબીબી કર્મચારીઓ 
વંધ્યત્વ સમસ્યાઓ. આઇવીએફ (IVF) સારવારની કિંમત તેના આધારે દરેક પ્રજનન કેસો માટે 
બદલાય છે  </h2>
              <ul className="IvfCostListDelhi">
                <li>&#9675; <span> ઉત્તેજનાની રકમ જરૂરી છે </span></li>
                <li>&#9675; <span> એગ ડોનર </span></li>
                <li>&#9675; <span> વય  </span></li>
                <li>&#9675; <span> એગ અથવા શુક્રાણુઓને ફ્રીઝ કરવું </span></li>
                <li>&#9675; <span> એડવાન્સ લેસર સહાયિત હેચિંગ,ઈક્સી,ટેસા  વગેરે </span></li>
              </ul>
              <h2 className="pricing">જેવા અદ્યતન વંધ્યત્વ  ઉપચારનો વપરાશ.ગુજરાતમાં આઈવીએફ ખર્ચની સંપૂર્ણ માર્ગદર્શન 
અને ભાવોની શ્રેણી મેળવવા માટે, અમારા વંધ્યત્વ નિષ્ણાતો.સાથે વાત કરો . </h2>
              <div className="center">
              <button className="btn buttonOne" onClick={this.showModal}>
              ગુજરાતમાં IVF ખર્ચ જાણો 
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
            <div style={{top: '2345px'}} className="reactangleShape valign-wrapper">
              <h1>0% ઇએમઆઈ પર લોન ઉપલબ્ધ છે </h1>
              <img src={arrowOranges} alt="શ્રેષ્ઠ આઇવીએફ સારવાર" className="orangeArrow" />
              <img src={loans} alt="શ્રેષ્ઠ આઇવીએફ સારવાર" className="loanImage" />
            </div>
          </div>
        </section>

      )
    }
  }
}
