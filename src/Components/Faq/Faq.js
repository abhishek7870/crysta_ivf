import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./Faq.css";
import $ from 'jquery';

import { FAQList } from "../../faqList";
import FAQListItem from "./faqItem";



export default class Faq extends Component {
  componentDidMount() {
    $(document).ready(function() {
      window.$('.collapsible').collapsible();
    });
  }
  render() {
    return (
      <section className="section section-faq scrollspy">
        <h2 className="center hide-on-med-and-up">FAQs</h2>
        <h4 className="hide-on-small-only faqMainHeading">FAQs</h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible">
                {FAQList.map((faq) => (
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
