import React, { Component } from 'react';
import './FooterStick.css';

export default class FooterStick extends Component {
    render() {
        return (
            <section>
                 <div className="row FooterStickDiv">
                <div className="col s12">
                  <div className="col s6 modalCallingDiv"><h2>Book Free IVF Consultation</h2></div>
                  <div className="col s6 CallingDiv"><h2>893 893 5353</h2></div>
                </div>
              </div>
            </section>
        )
    }
}
