import React, { Component } from 'react';
import './Services.css';
import serviceIvf from '../../images/servicesIVF.png';
import serviceInfertility from '../../images/servicesInfertility.png';
import servicesIUI from '../../images/servicesIUI.png';
import yellowLine from '../../images/yellowLine.png';
import serviceOne from '../../images/serviceOneMob.png';
import serviceTwo from '../../images/serviceTwoMob.png';
import serviceThree from '../../images/serviceThreeMob.png';
import orangeLine from '../../images/mobileOrangeLine.svg';
import fertilityFirst from '../../images/fertilityFirst.svg';
import fertilitySecond from '../../images/fertilitySecond.svg';
import fertilityThird from '../../images/fertilityThird.svg';
import CustomModal from '../CustomModal/CustomModal';

export default class Services extends Component {
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
          <div className="servicesMobile">
            <h1>Our Services</h1>
            {/* <div className="mobileOrangeLine">
            <img src={orangeLine} alt="" />
          </div> */}
            <img src={orangeLine} alt="Best IVF Centre" className="mobileOrangeLine" />
            <div className="carousel carousel-slider firstSlider">
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={serviceOne} alt="Best IVF Centre" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">IVF</span>
                      <p>From basic infertility assessment to transfer of fertilized embryos, we provide access to Best IVF centres in India with additional procedures like ICSI, TESA, PESA, and others.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={serviceTwo} alt="IVF Journey made easy" />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">Infertility</span>
                      <p>We are best known for providing specialized care and treatment to couples experiencing male and female infertility disorders by examining the exact cause at our infertility clinic. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item row">
                <div className="col s12">
                  <div className="card transparent">
                    <div className="card-image">
                      <img src={serviceThree} alt="True IVF treatment " />
                    </div>
                    <div className="card-content center">
                      <span className="card-title">IUI</span>
                      <p>We provide top-notch IUI treatment as we emphasize on the evaluation of patient’s history of fertility cycle and accordingly suggest the right time to take IUI treatment for better results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="servicesPurpleBg">
              <h2 className="center">Fertility Services you can trust</h2>
              <p>Get Best IVF Treatment and other Fertility services from renowned fertility specialists with high success rates.<span> Crysta IVF is COVID 19 Safe & follows WHO Guidelines.</span></p>
              <div className="carousel carousel-slider secondSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={fertilityFirst} alt="Best IVF Centre" />
                      </div>
                      <div className="card-content center">
                        <p>24X7 Free Dedicated Fertility Counselling</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={fertilitySecond} alt="IVF Journey made easy" />
                      </div>
                      <div className="card-content center">
                        <p>Transparent Treatment Pricing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={fertilityThird} alt="True IVF treatment" />
                      </div>
                      <div className="card-content center">
                        <p>Experienced & Certified Doctors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center leadButton">
              <button className="btn" onClick={this.showModal} >Connect with Crysta IVF</button>
              {this.state.showModal &&
                <CustomModal onCloseModal={this.showModal} left={'0%'} right={'30%'} top={'0%'} />}
            </div>
          </div>
        </section>
      )
    }
    else {
      return (
        <section className="section-services">
          <div className="servicesDesktop">
            <h5>Our Services</h5>
            <img className="yellowLineImage" src={yellowLine} alt="Best IVF Centre" />
            <div className="row OuterRowService">
              <div className="col m12">
                <div className="row InnerRowService">
                  <div className="col m4">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="imageDiv">
                          <img src={serviceIvf} alt=" IVF Journey made easy" />
                        </div>
                        <h6 className="ivfHeading">IVF</h6>
                        <p>From basic infertility assessment to transfer of fertilized embryos, we provide access to Best IVF centres in India with additional procedures like ICSI, TESA, PESA, and others.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="imageSection">
                          <div className="imageDivTwo">
                            <img src={serviceInfertility} alt="True IVF treatment " />
                          </div>
                        </div>
                        <h6>Infertility</h6>
                        <p>We are best known for providing specialized care and treatment to couples experiencing male and female infertility disorders by examining the exact cause at our infertility clinic. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col m4">
                    <div className="card transparent">
                      <div className="card-content center">
                        <div className="imageDivThree">
                          <img src={servicesIUI} alt="Best IVF Centre" />
                        </div>
                        <h6>IUI</h6>
                        <p>We provide top-notch IUI treatment as we emphasize on the evaluation of patient’s history of fertility cycle and accordingly suggest the right time to take IUI treatment for better results.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktopServiceShape"></div>
            <div className="serviceSecondDiv">
              <h1>Fertility Services you can trust</h1>
              <h2>Get Best IVF Treatment and other Fertility services from renowned fertility specialists with high success rates.  Crysta IVF is COVID 19 Safe & follows WHO Guidelines.</h2>

              <div className="row fertilityRow">

                <div className="col m3">
                  <div className="card center transparent">
                    <div className="card-image">
                      <img src={fertilityFirst} alt="IVF Journey made easy" />
                    </div>
                    <div className="card-content">
                      <p>24X7 Free Dedicated Fertility Counselling</p>
                    </div>
                  </div>
                </div>
                <div className="col m3 offset-m1">
                  <div className="card center transparent">
                    <div className="card-image">
                      <img src={fertilitySecond} alt="True IVF treatment " />
                    </div>
                    <div className="card-content">
                      <p>Transparent Treatment Pricing</p>
                    </div>
                  </div>
                </div>
                <div className="col m3 offset-m1">
                  <div className="card center transparent">
                    <div className="card-image">
                      <img src={fertilityThird} alt="Best IVF Centre" />
                    </div>
                    <div className="card-content">
                      <p>Experienced & Certified Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      )
    }
  }
}
