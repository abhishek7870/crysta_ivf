import React, { Component, Fragment, lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import FooterCity from "../FooterCity/FooterCity";
import CityBanner from "../CityBanner/CityBanner";
import { CarouselProvider } from "../../CarouselContextCity";
import { SecondCarouselProvider } from "../../ReviewCarouselContextCity";
import { CityBannerProvider } from "../../cityBannerContext";

// import ReviewCity from "../Review City/ReviewCity";
// import FaqCity from "../FaqCity/FaqCity";
// import MedicalPanelNewCity from "../MedicalPanelNewCity/MedicalPanelNewCity";
// import ServicesCity from "../ServicesCity/ServicesCity";



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

const ServicesCity = lazy(() => import('../ServicesCity/ServicesCity'));
const MedicalPanelNewCity = lazy(() => import('../MedicalPanelNewCity/MedicalPanelNewCity'));
const FaqCity = lazy(() => import('../FaqCity/FaqCity'));
const ReviewCity = lazy(() => import('../Review City/ReviewCity'));

class City extends Component {

	constructor(props) {
		super(props);
		let city = props.location.pathname.split("-");
		console.log(city)
		this.state = { city: capitalize(city[city.length - 1]) };
	}

	render() {
		if (citylist.filter((c) => c === this.state.city).length > 0) {
			return (
				<>
					<Fragment>
						<CityBannerProvider>
							<CityBanner cityname={this.state.city} />
						</CityBannerProvider>
						<Suspense fallback={<div />}>
							<ServicesCity cityname={this.state.city} />
						</Suspense>

						<CarouselProvider>
							<Suspense fallback={<div />}>
								<MedicalPanelNewCity cityname={this.state.city} />
							</Suspense>

						</CarouselProvider>
						<Suspense fallback={<div />}>
							<FaqCity cityname={this.state.city} />
						</Suspense>

						<SecondCarouselProvider>
							<Suspense fallback={<div />}>
								<ReviewCity />
							</Suspense>

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

export default City;



