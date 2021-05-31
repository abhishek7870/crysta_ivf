import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel purple white-text center iconPanel">
                <i className="material-icons medium help">live_help</i>
                <h5>Looking for an IVF treatment? </h5>
                <h5>Need assistance?</h5>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Connect With Crysta IVF</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="purple-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="purple-text">Mobile</label>
                  </div>
                  <input type="submit" value="Submit" className="btn purple center" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;