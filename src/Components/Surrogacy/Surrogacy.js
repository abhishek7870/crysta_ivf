import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import CityBannerSurrogacy from "../CityBanner/CityBannerSurrogacy";
import FaqCity from "../FaqCity/FaqCitySurrogacy";
import Footer from "../FooterCity/FooterCitySurrogacy";
import MedicalPanelNewCity from "../MedicalPanelNewCity/MedicalPanelSurrogacy";
import ReviewCity from "../Review City/ReviewCitySurrogacy";
import ServicesCitySurrogacy from "../ServicesCity/ServicesCitySurrogacy";
import { CarouselProvider } from "../../CarouselContextSurrogacy";
import { SecondCarouselProvider } from "../../ReviewCarouselSurrogacy";
import { CityBannerProvider } from "../../cityBannerContext";
import CTASurrogacy from "../CTASurrogacy/CTASurrogacy";
import "./Surrogacy.css";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const citylist = [
  "Delhi",
  // "Mumbai",
  "Pune",
  "Kanpur",
  // "Noida",
  // "Gurgaon",
  // "Goa",
  "Ahmedabad",
  // "Meerut",
  // "Patna",
  // "Ranchi",
  // "Hyderabad",
  // "Ludhiana",
  // "Chandigarh",
  // "Ghaziabad",
  // "Faridabad",
  // "Kolkata",
  // "Lucknow",
  // "Varanasi",
];

// function Surrogacy() {
//     if (citylist.filter((c) => c === this.state.city).length > 0) {
//     return (
//         <Fragment>

//         <CityBannerProvider>
//             <CityBannerSurrogacy />
//         </CityBannerProvider>

//         <ServicesCitySurrogacy />

//         <CarouselProvider>
//             <MedicalPanelNewCity />
//         </CarouselProvider>

//         <FaqCity />
//         <CTASurrogacy />

//         <SecondCarouselProvider>
//             <ReviewCity/>
//         </SecondCarouselProvider>

//         <Footer />

//     </Fragment>
//     );
//     }
//     else {
//         return <Redirect to="/" />;
//     }
// }

// export default Surrogacy;

class Surrogacy extends Component {
  constructor(props) {
    super(props);
    let city = props.location.pathname.split("-");
    this.state = { city: capitalize(city[city.length - 1]) };
  }

  render() {
    if (citylist.filter((c) => c === this.state.city).length > 0) {
      return (
        <>
          <Fragment>
            <CityBannerProvider>
              <CityBannerSurrogacy cityname={this.state.city} />
            </CityBannerProvider>

            <ServicesCitySurrogacy />

            <CarouselProvider>
              <MedicalPanelNewCity />
            </CarouselProvider>

            <FaqCity />
            <CTASurrogacy />

            <SecondCarouselProvider>
              <ReviewCity cityname={this.state.city}/>
            </SecondCarouselProvider>

            <Footer />
          </Fragment>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Surrogacy;
