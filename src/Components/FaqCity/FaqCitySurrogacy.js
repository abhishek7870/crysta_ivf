import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./FaqCity.css";
import { faqListCity } from "../../faqListCitySurrogacy";
import FAQListItem from "../Faq/faqItem";

export default class FaqCity extends Component {
  render() {
    return (
      <section className="section section-faq scrollspy FaqCity surrFaq">
        <h2 className="center hide-on-med-and-up">FAQs</h2>
        <h4 className="hide-on-small-only FaqHeadSurrogacy">FAQs</h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible">
                {faqListCity.map((faq) => (
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
