import React, { Fragment, Component } from "react";
import BannerIvfCost from "../BannerIvfCost/BannerIvfCost";
import ServiceIvfCost from "../ServiceIvfCost/ServiceIvfCost";
import { CarouselProvider } from "../../CarouselContextIvfCost";
import MedicalPanelIvfCost from "../MedicalPanelIvfCost/MedicalPanelIvfCost";
import FooterCity from "../FooterCity/FooterCity";
import FaqIvfCost from "../FaqIvfCost/FaqIvfCost";
import { SecondCarouselProvider } from "../../ReviewCarouselContextIvfCost";
import ReviewIvfCost from "../ReviewIvfCost/ReviewIvfCost";
import { Redirect } from "react-router-dom";
import SecureIvfCost from "./secureIvfCost";
import TreatmentProcedure from "./treatmentProcedure";
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

export default class IvfCostDelhi extends Component {
  constructor(props) {
    super(props);
    let city = props.location.pathname.split("-");

    this.state = { city: capitalize(city[city.length - 1]), hidebtn: false };
  }
  render() {
    const hid = (e) => {
      this.setState({ hidebtn: true });
    };

    if (citylist.filter((c) => c === this.state.city).length > 0) {
      return (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <BannerIvfCost cityname={this.state.city} />
          <ServiceIvfCost
            cityname={this.state.city}
            buttonHide={this.state.hidebtn}
          />
          <SecureIvfCost cityname={this.state.city} buton={(e) => hid(e)} />
          <TreatmentProcedure cityname={this.state.city} />
          <CarouselProvider>
            <MedicalPanelIvfCost cityname={this.state.city} />
          </CarouselProvider>
          <FaqIvfCost cityname={this.state.city} />
          <SecondCarouselProvider>
            <ReviewIvfCost cityname={this.state.city} />
          </SecondCarouselProvider>
          <FooterCity />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
