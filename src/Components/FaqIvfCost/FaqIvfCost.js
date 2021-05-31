import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../FaqCity/FaqCity.css";
import FAQListItem from "../Faq/faqItem";
import $ from "jquery";

export default class FaqIvfCost extends Component {
  state = {
    faqListCity: [
      {
        title: `
      How much does IVF cost in
       ${this.props.cityname} ?`,
        content: `IVF treatment cost in ${this.props.cityname} depends on different factors including the location of the infertility clinic and duration of infertility and the experience of the best IVF doctors in ${this.props.cityname}. The average IVF cost in ${this.props.cityname} for each cycle ranges between INR 80,000 and 1,30,000. `,
      },
      {
        title: `What is the cost of 1 cycle of IVF ?`,
        content:
          "The average cost for a single IVF cycle stands at between INR 80,000 to 1,80,000. The cost may vary depending upon the unique medical history of the patient and duration of infertility.",
      },
      {
        title: "Is there any hidden cost included in IVF cost ?",
        content:
          "At Crysta IVF, there is no hidden cost for IVF treatment. We follow standard pricing system and the cost depends on the number of IVF cycles required for your treatment.",
      },
      {
        title: `Which is the best IVF centre in ${this.props.cityname} ?`,
        content: `The best IVF centres in ${this.props.cityname} are equipped with state of the art infrastructure, cutting-edge advanced technology and highly experienced IVF doctors and infertility specialists. Crysta IVF is named among the best IVF clinics in ${this.props.cityname} because of its high IVF success rates in ${this.props.cityname}. `,
      },
      {
        title: `What is the IVF success rate in ${this.props.cityname} ?`,
        content: `Depending on the qualifications and experience of the best IVF doctors and advanced technology used at the reputed IVF clinics in ${this.props.cityname}, the IVF success rates in ${this.props.cityname} range between 50%-82% depending upon the uniqueness of each infertility case.`,
      },
    ],
  };

  componentDidMount() {
    $(document).ready(function() {
      window.$(".collapsible").collapsible();
    });
  }

  render() {
    return (
      <section className="section section-faq scrollspy FaqCity ">
        <h2 className="center hide-on-med-and-up">FAQs</h2>
        <h4 className="hide-on-small-only">FAQs</h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible">
                {this.state.faqListCity.map((faq) => (
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
