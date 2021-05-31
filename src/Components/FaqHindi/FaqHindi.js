import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./FaqHindi.css";
import { FAQListHindi } from "../../FAQListHindi";
import FAQListItem from "../Faq/faqItem";
import $ from 'jquery';

export default class FaqHindi extends Component {
  componentDidMount() {
    $(document).ready(function() {
      window.$('.collapsible').collapsible();
    });
  }
  render() {
    return (
      <section className="section section-faqHindi scrollspy">
        <h2 className="center hide-on-med-and-up faqHindiHeading">सबसे अधिक पूछे जाने वाले प्रश्न (FAQ) </h2>
        <h4 className="hide-on-small-only">सबसे अधिक पूछे जाने वाले प्रश्न (FAQ) </h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible faqMovDiv">
                {FAQListHindi.map((faq) => (
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
