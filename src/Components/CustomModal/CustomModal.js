import React, { Component } from "react";
import "./CustomModal.css";
import CallIconDesktop from "../../images/CallIcon.png";
import axios from "axios";
import faCut from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      fname: "",
      messageStatus: false,
      nameError: "",
      numberError: "",
    };
  }

  closeCustomModal = (e) => {
    this.setState({
      phone: "",
      fname: "",
      messageStatus: false,
      nameError: "",
      numberError: "",
    });
    this.props.onCloseModal(e);
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (val === "" || (regex.test(val) && val.length < 12)) {
      this.setState({ [nam]: val });
    }
  };
  myChangeHandlerOne = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    this.validateName();
  };
  validate = () => {
    let numberError = "";

    if (this.state.phone.length < 10) {
      numberError = "Incomplete Number";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "Invalid Number";
    }

    if (numberError) {
      this.setState({ numberError });
      return false;
    }
    this.setState({ numberError: "" });
    return true;
  };

  // finalvalidate = () => {
  //   let numberError = "";

  //   if (this.state.phone.length !== 11 ) {
  //     numberError = "Incomplete Number1";
  //   }

  //   if (numberError) {
  //     this.setState({ numberError });
  //     return false;
  //   }
  //   this.setState({ numberError: "" });
  //   return true;
  // };
  validateName = () => {
    let nameError = "";

    var pattern1 = new RegExp(/^[a-zA-Z\s]+$/g);
    if (!this.state.fname.match(pattern1)) {
      nameError = "Name is invalid";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    this.setState({ nameError: "" });
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    const isValidName = this.validateName();
    // const finalvalidate = this.finalvalidate();
    if (isValid && isValidName) {
      const userObject = {
        phoneNumber: this.state.phone,
        fullName: this.state.fname,
        city: "blank",
        treatmentType: "blank",
        currenturl: window.location.href,
      };
      axios
        .post(`${process.env.REACT_APP_API_PATH}`, userObject)
        .then((res) => {
          //console.log(res);
          //let successMessage = document.querySelector('#modal2');
          // here clear the state,
          this.setState({
            phone: "",
            fname: "",
            messageStatus: true,
            nameError: "",
            numberError: "",
          });

          // successMessage.innerHTML = JSON.stringify('Message Sent Successfully');
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  render() {
    const { left, right, top } = this.props;
    const messageStatus = this.state.messageStatus;
    return (
      <div className="commonModal abc">
        <div
          id="myModal"
          className="modal1"
          style={{ position: "fixed", left: left, right: right, top: top }}
        >
          <div
            className="closeModal modal-close"
            onClick={this.closeCustomModal}
          ></div>
          <div
            className="modal-content"
            style={messageStatus ? { display: "none" } : {}}
          >
            <h1>Book Free IVF Consultation</h1>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="fname"
                  className="modalInput"
                  placeholder="Name"
                  required
                  value={this.state.fname}
                  onChange={this.myChangeHandlerOne}
                  onKeyUp={this.myChangeHandlerOne}
                />
              </div>
              <div className="error-message">{this.state.nameError}</div>
              <div className="input-field">
                <input
                  type="text"
                  name="phone"
                  className="modalInput"
                  placeholder="Mobile Number"
                  required
                  value={this.state.phone}
                  onChange={this.myChangeHandler}
                  onKeyUp={this.myChangeHandler}
                />
              </div>
              <div className="error-message">{this.state.numberError}</div>
              <button className="btn myButton left">Submit</button>
            </form>

            <div className="navbarModalShape"></div>
          </div>
          <div
            className="modal-content"
            style={messageStatus ? {} : { display: "none" }}
          >
            <div className="row thankYouModal">
              <img alt="" src={thankModalImage} className="thankYouCustom" />
              <div className="wrap">
                {" "}
                <div className="YellowBorderShape"></div>
              </div>
              <div className="col m7">
                <h4 className="thankh4">Thank You!</h4>
                <p className="thankp">
                  We have received your enquiry, you will get a call from our
                  patient support team shortly
                </p>
                <h1 className="thankh1">
                  For urgent queries, you can call us on
                </h1>
                <h2 className="thankh2">
                  <img src={CallIconDesktop} alt="" /> 893 893 5353
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          id="myModal"
          className="modal2"
          style={{ position: "fixed", left: left, right: right, top: top }}
        >
          <div
            className="modal-content"
            style={messageStatus ? { display: "none" } : {}}
          >
            <div onClick={this.closeCustomModal} className="modal-close right">
              <img src={faCut} alt="" />
            </div>
            <h1>Book Free IVF Consultation</h1>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="fname"
                  className="modalInput"
                  autoFocus="autoFocus"
                  placeholder=" Name"
                  required
                  value={this.state.fname}
                  onChange={this.myChangeHandlerOne}
                  onKeyUp={this.myChangeHandlerOne}
                />
              </div>
              <div style={{ color: "red", textAlign: "left" }}>
                {this.state.nameError}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="phone"
                  className="modalInput"
                  placeholder=" Mobile Number"
                  required
                  value={this.state.phone}
                  onChange={this.myChangeHandler}
                  onKeyUp={this.myChangeHandler}
                />
              </div>
              <div style={{ color: "red", textAlign: "left" }}>
                {this.state.numberError}
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
          <div
            className="modal-content"
            style={messageStatus ? {} : { display: "none" }}
          >
            <div onClick={this.closeCustomModal} className="modal-close right">
              <img src={faCut} alt="" />
            </div>
            <h1>Thank You!</h1>
            <p>
              We have received your enquiry, you will get a call from our
              patient support team shortly
            </p>
            <p>For urgent queries, you can call us on</p>
            <div className="callingNumberModal valign-wrapper">
              <a href="tel:+918938935353" data-rel="external">
                <h5>
                  <img src={callIcon} alt="" /> 893 893 5353
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomModal;
