import React, { Component } from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../FaqHindi/FaqHindi.css";
import { FAQListHindi } from "../../FAQListHindi";
import FAQListItem from "../Faq/faqItem";

import $ from 'jquery';

export default class FaqHindi extends Component {

    state = {
    
        faqListCity : [
          {
            title: "महाराष्ट्रातील आयव्हीएफची किंमत किती आहे?            ",
            content:
              "आयव्हीएफ केंद्राचे स्थान आणि महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ डॉक्टरांचे कौशल्य यासह अनेक घटकांवर अवलंबून महाराष्ट्रातील आयव्हीएफ उपचारांची किंमत वेगवेगळ्या केंद्र मध्ये बदलते. महाराष्ट्रात  एका सायकलसाठी आयव्हीएफ उपचारांची सरासरी किंमत INR 95,000- 1, 30,000 इतकी आहे.                ",
          },
          {
            title: "आयव्हीएफ उपचार महाराष्ट्रात यशस्वी आहे का?            ",
            content:
              "इतर वंध्यत्व उपचारांच्या तुलनेत आयव्हीएफ उपचारांचा यशस्वी दर जास्त आहे परंतु असे बरेच घटक आहेत ज्यावर आयव्हीएफ यशाचे दर अवलंबून असतात.     वय 35 च्या आत असलेली इच्छुक जोडपी पालक बनण्याचे नियोजन जर करत असतील तर , यशाचे दर सुमारे 40% आहेत. पहिल्या आयव्हीएफ प्रयत्नावर गर्भधारणा होण्याची शक्यता जवळजवळ 30% आहे.",
          },
          {
            title: "महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ केंद्र कोणते आहे?            ",
            content:
          "महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ केंद्रे अत्याधुनिक तंत्रज्ञान आणि अत्यंत अनुभवी आयव्हीएफ डॉक्टर आणि वंध्यत्व विशेषज्ञांनी सुसज्ज आहेत. क्रिस्टा आयव्हीएफचे महाराष्ट्रातील सर्वोत्कृष्ट आयव्हीएफ क्लिनिकमध्ये नाव आहे कारण आयव्हीएफचे यश दर जास्त आहे.          ",
          },
          {
            title: "महाराष्ट्रातील आयव्हीएफ यशाचा दर किती आहे?",
            content:
           "महाराष्ट्रातील नामांकित आयव्हीएफ क्लिनिकमध्ये वापरल्या जाणार्‍या सर्वोत्कृष्ट आयव्हीएफ डॉक्टर आणि प्रगत तंत्रज्ञानाची पात्रता आणि अनुभवावर अवलंबून, प्रत्येक वंध्यत्व प्रकरणातील विशिष्टतेवर अवलंबून महाराष्ट्रातील आयव्हीएफ यशाचे प्रमाण 50% -82% दरम्यान आहे.           ",
          },
         
        ]}

  componentDidMount() {
    $(document).ready(function() {
      window.$('.collapsible').collapsible();
    });
  }
  render() {
    return (
      <section className="section section-faqHindi scrollspy">
        <h2 className="center hide-on-med-and-up faqHindiHeading"> प्रश्न (FAQ) </h2>
        <h4 className="hide-on-small-only"> प्रश्न (FAQ) </h4>
        <div className="collapsibleDiv">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible faqMovDiv">
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
