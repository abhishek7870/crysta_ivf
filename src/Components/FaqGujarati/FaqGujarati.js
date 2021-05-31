import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../Components/FaqHindi/FaqHindi.css";
import { FaqListGujarati } from "../../FaqListGujarati";
import FAQListItem from "../Faq/faqItem";
import $ from 'jquery';

export default class FaqGujarati extends Component {
  
  componentDidMount() {
    $(document).ready(function() {
      window.$('.collapsible').collapsible();
    });
  }
  render() {
    return (
      <section className="section section-faqHindi scrollspy">
        <h2 className="center hide-on-med-and-up faqHindiHeading">પ્રશ્નો </h2>
        <h4 className="hide-on-small-only">પ્રશ્નો </h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible">
                {FaqListGujarati.map((faq) => (
                  <FAQListItem
                    key={faq.title}
                    title={faq.title}
                    content={faq.content}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
