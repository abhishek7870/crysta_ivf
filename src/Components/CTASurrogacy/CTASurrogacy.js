import React, { Component } from 'react';
import './CTASurrogacy.css';
import CustomModal from "../CustomModalSurrogacy/CustomModalSurrogacy";

const initialState = {
  phone: "",
  showModal: false,
  phoneError: "",
  width: window.innerWidth,
  showThankYou: false,
  showThankYouMobile: false,
  background: "transparent",
};

export default class CTASurrogacy extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handlePopUp = () => {
    this.setState({ showModal: true });
  };
  componentWillMount(nextProps) {
    setTimeout(this.handlePopUp, 30000);
  }
  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    return (
      <section className="cta">
        <h2 className="ctaHeading">If you have any other fertility concerns, connect with our patient support team to get the right fertility guidance and assistance.
        </h2>
       
        <div className="center">
            <button className="bookFreeButton btn" onClick={this.showModal}>
              Connect with Crysta IVF
            </button>
            
            </div>
            <div className="hide-on-small-only">
            {this.state.showModal && (
              <CustomModal
                onCloseModal={this.showModal}
                left={"30%"}
                right={"30%"}
                top={"20%"}
              />
            )}
            </div>
            <div className="hide-on-med-and-up">
             {this.state.showModal &&
                <CustomModal onCloseModal={this.showModal} left={'0%'} right={'30%'} top={'0%'} />}
                </div>
      </section>
    )
  }
}