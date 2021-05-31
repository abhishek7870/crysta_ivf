import React, { Component } from "react";
import "./NetworkDoctors.css";
import crystaLogo from "../../images/crystaLogoMob.png";
import callIcon from "../../images/callIconOrange.png";
import close from "../../images/closeModal.png";
import faCut from "../../images/faCut.png";
import line from "../../images/lineHr.png";
import CustomModal from "../CustomModal/CustomModal";
import { Modal } from 'react-materialize';
//import loader from '../../images/loading.gif';

export default class NetworkDoctors extends Component {
  constructor(props) {
    super(props);
    this.state = { cityname: "", width: window.innerWidth, showMore: false ,showModelDesktop: false};
  }

  handleCloseModal = () => {
    this.setState({ showModelDesktop: false })
  }

  handleOpenModal = (city) => {
    this.setState({ showModelDesktop: true, cityname: city})
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  showMore = (e) => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const { cityname } = this.state;
    const { width } = this.state;
    const { showMore } = this.state;
    const isMobile = width <= 500;
    if (isMobile) {
      return (
        <section className="section section-network">
          <div className="NetworkMobileView">
            <div className="NetworkHeading">
              <h4>Our Network of Centres & Doctors</h4>
            </div>
            <div className="NetworkContent">
              <p>
                Crysta IVF is on a mission to make fertility treatments easily
                accessible and reasonable through its wide network of accredited
                IVF doctors and well equipped centres.
              </p>
            </div>
            <div className="NetworkCity center">
              <ul>
                <li>
                  <button
                    onClick={() => this.handleOpenModal("Delhi")}
                  >
                    Delhi
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleOpenModal("Mumbai")}
                  >
                    Mumbai
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleOpenModal("Pune")}
                  >
                    Pune
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => this.handleOpenModal("Kanpur")}
                  >
                    Kanpur
                  </button>
                </li>
                {showMore ? (
                  <>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Noida")}
                      >
                        Noida
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Gurgaon")}
                      >
                        Gurgaon
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Goa")}
                      >
                        Goa
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Ahmedabad")}
                      >
                        Ahmedabad
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Meerut")}
                      >
                        Meerut
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Patna")}
                      >
                        Patna
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Ranchi")}
                      >
                        Ranchi
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Hyderabad")}
                      >
                        Hyderabad
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Ludhiana")}
                      >
                        Ludhiana
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Chandigarh")}
                      >
                        Chandigarh
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Ghaziabad")}
                      >
                        Ghaziabad
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Faridabad")}
                      >
                        Faridabad
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Kolkata")}
                      >
                        Kolkata
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Lucknow")}
                      >
                        Lucknow
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => this.handleOpenModal("Varanasi")}
                      >
                        Varanasi
                      </button>
                    </li>
                  </>
                ) : null}
                <li className="cityDropdown">
                  {!showMore ? (
                    <button
                      className="dropdown-trigger btn right transparent NetworkMobileDropdown"
                      onClick={this.showMore} 
                    >
                      o &#8722; More Cities Here
                    </button>
                  ) : null}
                </li>
              </ul>
            </div>

            <div className="BookFreeButton center">
              <button onClick={this.showModal} className="btn modal-trigger">
                Book Free IVF Consultation
              </button>
              {this.state.showModal && (
                <CustomModal
                  onCloseModal={this.showModal}
                  left={"0%"}
                  right={"30%"}
                  top={"0%"}
                />
              )}
            </div>
            <div id="showNumber" className="modal">
              <div className="modal-content">
                <div className="valign-wrapper">
                  <span>
                    <img src={crystaLogo} alt="" />
                  </span>
                  <h6>Crysta IVF {cityname} Center</h6>
                </div>
                <button href="tel:+918938935353" data-rel="external">
                  <h5>
                  <img src={callIcon} alt="" /> 893 893 5353
                  </h5>
                </button>
              </div>
              <img src={close} alt="" className="modal-close close" />
            </div>
            <div id="modalMobile" className="modal">
              {/* <div className="modal-content">
                            <a href="#testing" className="modal-close right"><img src={faCut} alt="" /></a>
                            <h1>Book Free IVF Consultations</h1>
                            <div className="input-field">
                                <input type="text" className="modalInput" placeholder=" Name" />
                            </div>
                            <div className="input-field">
                                <input type="text" className="modalInput" placeholder=" Mobile Number" />
                            </div>
                            <button className="btn">Submit</button>
                        </div> */}
              <div className="modal-content">
                <div className="modal-close right">
                <img src={faCut} alt="" />
                </div>
                <h1>Thank You!</h1>
                <p>
                  We have received your enquiry, you will get a call from our
                  patient support team shortly
                </p>
                <p>For urgent queries, you can call us on</p>
              </div>
            </div>
          </div>
          <Modal className="showNumberD" open={this.state.showModelDesktop} actions={[]}>
              <div className="modal-content">
               <img src={close} alt="" onClick={this.handleCloseModal} className="close" /> 
                <div className="valign-wrapper">
                  <span>
                    <img src={crystaLogo} alt="" className="crystaModalLogo" />
                  </span>
                  <h6>Crysta IVF {cityname} Center</h6>
                </div>
                <h5>
                  <img src={callIcon} alt="" /> 893 893 5353
                </h5>
              </div>
          </Modal>
        </section>
      );
    } else {
      return (
        <section className="section section-network">
          <div className="NetworkDesktopView">
            <div className="row">
              <div className="col m12">
                <h6>Our Network of Centres & Doctors</h6>
                <p>
                  Crysta IVF is on a mission to make fertility treatments easily
                  accessible and reasonable through its wide network of
                  accredited IVF doctors and well equipped centres.
                </p>
              </div>
              <div className="col m10 cityDropdown">
                <div className="desktopCityName">
                  <ul className="cityrow">
                    <li>
                      <button
                        className="modal-trigger firstList"
                        onClick={() => this.handleOpenModal("Delhi")}
                      >
                        Delhi
                      </button>
                    </li>
                    <li>
                      <button
                        
                        className="modal-trigger firstList"
                        onClick={() => this.handleOpenModal("Mumbai")}
                      >
                        Mumbai
                      </button>
                    </li>
                    <li>
                      <button
                        
                        className="modal-trigger firstList"
                        onClick={() => this.handleOpenModal("Pune")}
                      >
                        Pune
                      </button>
                    </li>
                    <li>
                      <button
                        
                        className="modal-trigger firstList"
                        onClick={() => this.handleOpenModal("Kanpur")}
                      >
                        Kanpur
                      </button>
                    </li>
                    {showMore ? (
                      <>
                        <li>
                          <button
                        
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Noida")}
                          >
                            Noida
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Gurgaon")}
                          >
                            Gurgaon
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Goa")}
                          >
                            Goa
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Ahmedabad")}
                          >
                            Ahmedabad
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Meerut")}
                            
                          >
                            Meerut
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Patna")}
                          >
                            Patna
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Ranchi")}
                          >
                            Ranchi
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Hyderabad")}
                          >
                            Hyderabad
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Ludhiana")}
                          >
                            Ludhiana
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Chandigarh")}
                          >
                            Chandigarh
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Ghaziabad")}
                          >
                            Ghaziabad
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Faridabad")}
                          >
                            Faridabad
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Kolkata")}
                          >
                            Kolkata
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Lucknow")}
                          >
                            Lucknow
                          </button>
                        </li>
                        <li>
                          <button
                          
                            className="modal-trigger firstList"
                            onClick={() => this.handleOpenModal("Varanasi")}
                          >
                            Varanasi
                          </button>
                        </li>
                      </>
                    ) : null}
                    <li>
                      {!showMore ? (
                        <button
                          className="dropdown-trigger btn transparent secondList"
                          onClick={this.showMore}
                        >
                          o{" "}
                          <span>
                            <img src={line} alt="" />
                          </span>{" "}
                          View Other Cities
                        </button>
                      ) : null}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Modal className="showNumberD" open={this.state.showModelDesktop} actions={[]}>
              <div className="modal-content">
               <img src={close} alt="" onClick={this.handleCloseModal} className="close" /> 
                <div className="valign-wrapper">
                  <span>
                    <img src={crystaLogo} alt="" className="crystaModalLogo" />
                  </span>
                  <h6>Crysta IVF {cityname} Center</h6>
                </div>
                <h5>
                  <img src={callIcon} alt="" /> 893 893 5353
                </h5>
              </div>
          </Modal>

             {/* <div id="showNumberD" className="modal">
              <div className="modal-content">
                <div className="valign-wrapper">
                  <span>
                    <img src={crystaLogo} alt="" />
                  </span>
                  <h6>Crysta IVF {cityname} Center</h6>
                </div>
                <h5>
                  <img src={callIcon} alt="" /> 893 893 5353
                </h5>
              </div>
              <img src={close} alt="" className="modal-close close" />
            </div>  */}
            <div className="center">
              <button className="btn buttonOne" onClick={this.showModal}>
                Connect with Crysta IVF
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
        </section>
      );
    }
  }
}
