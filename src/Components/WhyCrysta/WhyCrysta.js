import React, { Component } from 'react';
import whyCrysta1 from '../../images/whyCrysta1.png';
import whyCrysta2 from '../../images/whyCrysta2.png';
import whyCrysta3 from '../../images/whyCrysta3.png';
import whyCrysta4 from '../../images/whyCrysta4.png';
import './WhyCrysta.css';
import axios from "axios";

export default class WhyCrysta extends Component {
    constructor(props) {
        super(props);
        this.state = { fname: '', phone: '', treatment: '' };
    }
    
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const userObject = {
            phoneNumber: this.state.phone,
            fullName: this.state.fname,
            city: 'blank',
            treatmentType: this.state.treatment,
            currenturl:window.location.href
        };
        axios.post(`${process.env.REACT_APP_API_PATH}`, userObject)
            .then(res => {
                console.log(res)
                let successMessage = document.querySelector('.success-whycrysta');
                // here clear the state,
                this.setState({ fname: '', phone: '', treatment: '' });
                successMessage.innerHTML = 'Submitted';
            }).catch(function (error) {
                console.log(error);
            });
    }

    options = [
        {
            label: "IVF",
            value: "IVF",
        },
        {
            label: "IUI",
            value: "IUI",
        },
        {
            label: "Surrogacy",
            value: "Surrogacy",
        },
        {
            label: "laparoscopy",
            value: "laparoscopy",
        },
        {
            label: "Other Fertility Treatment",
            value: "Other Fertility Treatment",
        },
        {
            label: "Any Other Query",
            value: "Any Other Query",
        }
    ];
    render() {
        return (
            <section className=" section-whycrysta">

                <h4>Why Crysta IVF ?</h4>
                <div className="row whyCrystaCardRow">
                    <div className="col s12 m6">
                        <div className="card horizontal noShadow">
                            <div className="card-image">
                                <img src={whyCrysta1} alt="" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="card-title">Personalised approach</span>
                                    <p>Each case is unique to for us and each case is our priority</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card horizontal noShadow">
                            <div className="card-image">
                                <img src={whyCrysta2} alt="" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <span className="card-title">Award-winning Team</span>
                                    <p>Experienced Medical Panel to assess your cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card horizontal noShadow">
                            <div className="card-image">
                                <img className="tspImage" src={whyCrysta3} alt="" />
                            </div>
                            <div className="card-stacked tsp">
                                <div className="card-content">
                                    <span className="card-title"> Transparent & Standard Pricing</span>
                                    <p>We offer Best & affordable Pricing Fertility Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="card horizontal noShadow">
                            <div className="card-image">
                                <img className="hsrImage" src={whyCrysta4} alt="" />
                            </div>
                            <div className="card-stacked hsr">
                                <div className="card-content">
                                    <span className="card-title ">High Success Rates</span>
                                    <p>We utilize Advanced medical technology for higher success rates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row center buttonWhyCrysta">
                    <div className="col s12">
                        <button className="btn modal-trigger" href="#modal2" type="submit" name="action">Connect with Crysta IVF
                        </button>
                    </div>
                </div>
                <div id="modal2" className="modal">
                    <div className="container">
                        <div className="modal-content">
                            <h5 className="">Let's Schedule Your Appointment</h5>
                            <form onSubmit={this.onSubmit}>
                                <div className="input-field">
                                    <input type="text" name="fname" value={this.state.fname} onChange={this.myChangeHandler} />
                                    <label className="purple-text">Name</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" name="phone" value={this.state.phone} onChange={this.myChangeHandler} />
                                    <label className="purple-text">Mobile</label>
                                </div>
                                <div className="input-field">
                                    {/* <select defaultValue={this.state.treatment} onChange={this.myChangeHandler} >
                                        <option value="" disabled selected>Select treatment you are looking for</option>
                                        <option value="IVF">IVF</option>
                                        <option value="IUI">IUI</option>
                                        <option value="Surrogacy">Surrogacy</option>
                                        <option value="laparoscopy">laparoscopy</option>
                                        <option value="Other Fertility Treatment">Other Fertility Treatment</option>
                                        <option value="Any Other Query">Any Other Query</option>
                                    </select> */}
                                    <select value={this.state.treatment} onChange={this.myChangeHandler}>
                                        {this.options.map((option) => (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <label className="purple-text">Select Disease</label>
                                </div>
                                <input type="submit" value="Submit" className="btn submitButton" />
                                <p className="success-whycrysta"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
