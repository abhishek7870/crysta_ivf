import React, { Component } from "react";
import "../../Components/CustomModalHindi/CustomModalHindi.css";
import CallIconDesktop from "../../images/CallIcon.png";
import axios from "axios";
import faCut from "../../images/faCut.png";
import callIcon from "../../images/CallIcon.png";
import thankModalImage from "../../images/thankModalImage.png";
import './CustomModalGujarati.css';

class CustomModalGujarati extends Component {
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
      numberError = "ખોટો મોબાઇલ નંબર";
    }
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (!this.state.phone.match(pattern)) {
      numberError = "ખોટો મોબાઇલ નંબર";
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
      nameError = "ખોટું નામ";
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
        currenturl:window.location.href
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
            <h1>બુક ફ્રી આઈવીએફ (IVF) કન્સલ્ટેશન </h1>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="fname"
                  className="modalInput"
                  placeholder="નામ "
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
                  placeholder="નંબર "
                  required
                  value={this.state.phone}
                  onChange={this.myChangeHandler}
                  onKeyUp={this.myChangeHandler}
                />
              </div>
              <div className="error-message">{this.state.numberError}</div>
              <button className="btn myButton GujModalBtn left">સબમિટ કરો</button>
            </form>

            <div className="navbarModalShape"></div>
          </div>
          <div
            className="modal-content"
            style={messageStatus ? {} : { display: "none" }}
          >
            <div className="row thankYouModal">
            <div className="wrap"> <div className="YellowBorderShape"></div></div> 
              <img alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના" src={thankModalImage} className="thankYouCustom" />
              <div className="col m7">
                <h4 className="thankh4">આભાર!</h4>
                <p className="thankp">
                અમને તમારી ઇન્કવાયરી મળી છે, તમને ટૂંક સમયમાં અમારી સપોર્ટ ટીમ સંપર્ક કરશે
                </p>
                <h1 className="thankh1">
                તાત્કાલિક પ્રશ્નો માટે, તમે અમને  સંપર્ક કરી શકો છો.
                </h1>
                <h2 className="thankh2">
                  <img src={CallIconDesktop} alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના" /> 893 893 5353
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
              <img src={faCut} alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના" />
            </div>
            <h1>બુક ફ્રી આઈવીએફ (IVF) કન્સલ્ટેશન </h1>
            <form onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  name="fname"
                  className="modalInput"
                  autoFocus="autoFocus"
                  placeholder="નામ"
                  required
                  value={this.state.fname}
                  onChange={this.myChangeHandlerOne}
                  onKeyUp={this.myChangeHandlerOne}
                />
              </div>
              <div style={{ color: "red", textAlign:"left" }}>{this.state.nameError}</div>
              <div className="input-field">
                <input
                  type="text"
                  name="phone"
                  className="modalInput"
                  placeholder="નંબર "
                  required
                  value={this.state.phone}
                  onChange={this.myChangeHandler}
                  onKeyUp={this.myChangeHandler}
                />
              </div>
              <div style={{ color: "red", textAlign:"left" }}>{this.state.numberError}</div>
              <button className="btn GujModalBtn">સબમિટ કરો</button>
            </form>
          </div>
          <div
            className="modal-content"
            style={messageStatus ? {} : { display: "none" }}
          >
            <div onClick={this.closeCustomModal} className="modal-close right">
              <img src={faCut} alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના" />
            </div>
            <h1>આભાર!</h1>
            <p>
            અમને તમારી ઇન્કવાયરી મળી છે, તમને ટૂંક સમયમાં અમારી સપોર્ટ ટીમ સંપર્ક કરશે 

            </p>
            <p>તાત્કાલિક પ્રશ્નો માટે, તમે અમને  સંપર્ક કરી શકો છો.</p>
            <div className="callingNumberModal valign-wrapper">
              <a href="tel:+918938935353" data-rel="external">
                <h5>
                  <img src={callIcon} alt="વ્યક્તિગત કરેલ  આઇવીએફ સારવાર યોજના" /> 893 893 5353
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomModalGujarati;
