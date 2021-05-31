import React, { Component } from 'react';
import '../ServicesCity/ServicesCity.css';
import CustomModal from '../CustomModal/CustomModal';
import arrowOranges from '../../images/arrowOrange.png';
import loans from '../../images/loan.png';
import '../ServiceIvfCost/ServiceIvfCost.css';

import $ from 'jquery';

export default class ServiceSurrogacyCost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '', width: window.innerWidth,
      //image_path: 'before update image path'
    };
  }

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
  handlePopUp = () => {
    this.setState({ showModal: true });
  };
  componentWillMount(nextProps) {
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
          <div className="servicesMobileCity">
            {/* <div className="servicesPurpleBgCity">
              <h2>Get Best IVF Treatment in {this.props.cityname}</h2>
              <p>Crysta IVF is one of the leading fertility chains that endeavors to provide best-in-class and holistic integrated IVF treatment in {this.props.cityname} with highest success rates.
 We are one of the best IVF centres in {this.props.cityname} with state of the art infrastructure.</p>
              <div className="carousel carousel-slider secondSlider">
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                        <img src={cityServiceOne} alt="" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>A session with ART Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={cityServiceTwo} alt="" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>Personalised Treatment Plan and Counselling</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={cityServiceThree} alt="" /><span className="brdr-line"></span>
                      </div>
                      <div className="card-content center">
                        <p>Stimulation, fertilization, embryo culture & embryo transfer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item row">
                  <div className="col s12">
                    <div className="card transparent">
                      <div className="card-image">
                      <span className="brdr-linel"></span><img src={cityServiceFour} alt="" />
                      </div>
                      <div className="card-content center">
                        <p>Pregnancy Test after IVF</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="indicatorLine"></span>
              </div>
            </div> */}
            <div className="row"></div>
            <div style={{marginTop: '80px'}} className="leadButton">
              <div className="center">
                <h6>Surrogacy Cost in {this.props.cityname}</h6>
              </div>
              <p>Crysta IVF has a team of highly experienced IVF Doctors and we are well-equipped with advanced technology and committed medical personnel to cure different types of infertility problems. The cost of IVF treatment varies for each fertility case depending on various factors such as </p>
              <ul>
                <li><span>Amount of stimulation required</span></li>
                <li><span>Egg donor</span></li>
                <li><span>Age</span></li>
                <li><span>Freezing of eggs or sperms</span></li>
                <li><span>usage of advanced fertility treatment such as laser assisted hatching, ICSI, Tesa etc.. </span></li>
              </ul>
              <p>To get complete guidance and pricing range of IVF cost in {this.props.cityname}, speak with our fertility experts.</p>
              <div className="center">
                <button className="btn" onClick={this.showModal} >Know Surrogacy cost in {this.props.cityname}</button>
              </div>
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
          <div className="servicesDesktopCity ServiceDesktopCost">

            {/* <div className="desktopServiceShapeCity"></div> */}
            <div className="serviceSecondDiv">
              <h1>Surrogacy Cost in {this.props.cityname} </h1>
              <h2>Crysta IVF has a team of highly experienced IVF Doctors and we are well-equipped with advanced technology and committed medical personnel to cure different types of infertility problems. The cost of IVF treatment varies for each fertility case depending on various factors such as</h2>
              <ul className="IvfCostListDelhi">
                <li>&#9675; <span> Amount of Stimulation required</span></li>
                <li>&#9675; <span> Egg Donor </span></li>
                <li>&#9675; <span> Age </span></li>
                <li>&#9675; <span> Freezing of eggs or sperms </span></li>
                <li>&#9675; <span> Usage of advanced fertility treatment such as laser assisted hatching, ICSI, Tesa etc.. </span></li>
              </ul>
              <h2 className="pricing">To get complete guidance and pricing range of IVF cost in {this.props.cityname}, speak with our fertility experts.
</h2>
              <div className="center buttonOneDiv">
                <button className="btn buttonOne" onClick={this.showModal}>
                  Know Surrogacy cost in {this.props.cityname}
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
             <div className="valign-wrapper LoanDivIvfCost">
              <h1>Loan available @ 0% EMI</h1>
              <img src={arrowOranges} alt="" className="orangeArrow" />
              <img src={loans} alt="" className="loanImage" />
            </div> 
          </div>
        </section>

      )
    }
  }
}
