import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import CityBannerHindi from "../CityBannerHindi/CityBannerHindi";
import MedicalPanelHindi from "../MedicalPanelHindi/MedicalPanelHindi";
import ServicesHindi from "../ServicesHindi/ServicesHindi";
import { CarouselProvider } from "../../CarouselContextHindi";
import FaqHindi from "../FaqHindi/FaqHindi";
import { SecondCarouselProvider } from "../../ReviewCarouselContextHindi";
import ReviewHindi from "../ReviewHindi/ReviewHindi";
import FooterHindi from "../FooterHindi/FooterHindi";
import { CityBannerProvider } from "../../cityBannerContextHindi";

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
  "Hindi",
];

class Hindi extends Component {
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
              <CityBannerHindi />
            </CityBannerProvider>

            <ServicesHindi />

            <CarouselProvider>
              <MedicalPanelHindi />
            </CarouselProvider>

            <FaqHindi />

            <SecondCarouselProvider>
              <ReviewHindi />
            </SecondCarouselProvider>

            <FooterHindi />

          </Fragment>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Hindi;
