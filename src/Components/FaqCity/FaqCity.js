import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./FaqCity.css";
import FAQListItem from "../Faq/faqItem";
import $ from 'jquery';

export default class FaqCity extends Component {
  state = {
    
  faqListCity : [
    {
      title: "What is the cost of IVF in ",
      content:
        `The cost of IVF treatment in ${this.props.cityname} varies from one centre to another depending upon various factors including the location of the IVF centre and expertise of the best IVF doctors in ${this.props.cityname}. The average cost of IVF treatment in ${this.props.cityname} for one cycle ranges from INR 95,000- 1, 30,000.        `,
    },
    {
      title: "Is IVF treatment successful in ",
      content:
        "The success rate of IVF treatment is high as compared to other fertility treatments but there are many factors on which IVF success rates depend. For aspiring couples under 35 planning to become parents, the success rates stand at around 40%. The chances of achieving conception on the first IVF attempt stands at nearly 30%.   ",
    },
    {
      title: "Which is the best IVF centre in ",
      content:
    `The best IVF centres in ${this.props.cityname} are equipped with state of the art infrastructure, cutting-edge advanced technology and highly experienced IVF doctors and infertility specialists. Crysta IVF is named among the best IVF clinics in ${this.props.cityname} because of its high IVF success rates in ${this.props.cityname}. `,
    },
    {
      title: "What is the IVF success rate in ",
      content:
  `Depending on the qualifications and experience of the best IVF doctors and advanced technology used at the reputed IVF clinics in ${this.props.cityname}, the IVF success rates in ${this.props.cityname} range between 50%-82% depending upon the uniqueness of each infertility case.`,
    },
   
  ]}

  componentDidMount() {
    $(document).ready(function() {
      window.$('.collapsible').collapsible();
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
                    title={faq.title + this.props.cityname + '?'} 
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
