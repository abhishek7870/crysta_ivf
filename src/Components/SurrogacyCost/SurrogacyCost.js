import React, { Fragment, Component } from "react";
import BannerSurrogacyCost from "../BannerSurrogacyCost/BannerSurrogacyCost";
import ServiceSurrogacyCost from "../ServiceSurrogacyCost/ServiceSurrogacyCost";
import { CarouselProvider } from "../../CarouselContextIvfCost";
import MedicalPanelIvfCost from "../MedicalPanelIvfCost/MedicalPanelIvfCost";
import FooterCity from "../FooterCity/FooterCity";
import FaqIvfCost from "../FaqIvfCost/FaqIvfCost";
import { SecondCarouselProvider } from "../../ReviewCarouselContextIvfCost";
import ReviewIvfCost from "../ReviewIvfCost/ReviewIvfCost";
import { Redirect } from "react-router-dom";
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const citylist = [
  "Delhi",
  "Mumbai",
  "Pune",
  "Kanpur",
  "Noida",
  "Gurgaon",
  "Goa",
  "Ahmedabad",
  "Meerut",
  "Patna",
  "Ranchi",
  "Hyderabad",
  "Ludhiana",
  "Chandigarh",
  "Ghaziabad",
  "Faridabad",
  "Kolkata",
  "Lucknow",
  "Varanasi",
];

export default class IvfCostDelhi extends Component {
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
            <BannerSurrogacyCost cityname={this.state.city} />
            <ServiceSurrogacyCost cityname={this.state.city} />
            <CarouselProvider>
              <MedicalPanelIvfCost cityname={this.state.city} />
            </CarouselProvider>
            <FaqIvfCost cityname={this.state.city} />
            <SecondCarouselProvider>
              <ReviewIvfCost />
            </SecondCarouselProvider>
            <FooterCity />
          </Fragment>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
