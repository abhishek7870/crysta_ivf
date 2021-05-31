import React, { Fragment } from 'react';
import CityBannerHindi from "../CityBannerHindi/CityBannerHindi";
import ServicesHindi from "../ServicesHindi/ServicesHindi";
import MedicalPanelHindi from "../MedicalPanelHindi/MedicalPanelHindi";

import { CarouselProvider } from "../../CarouselContextHindi";
import FaqHindi from "../FaqHindi/FaqHindi";
import { SecondCarouselProvider } from "../../ReviewCarouselContextHindi";
import ReviewHindi from "../ReviewHindi/ReviewHindi";
import FooterHindi from "../FooterHindi/FooterHindi";
import { CityBannerProvider } from "../../cityBannerContextHindi";
//import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './HindiPage.css';
//import '../Hindi/Hindi';
//import Hindi from '../Hindi/Hindi';
import $ from 'jquery';

$(document).ready(function() {
    window.$('.carousel.carousel-slider').carousel({
        height: 500,
        indicators: true,
        fullWidth: true,
        transition: 500,
        interval: 6000
    });
   

    
    window.$('.scrollspy').scrollSpy();

    window.$('.materialboxed').materialbox();

    window.$('input#input_text, textarea#message').characterCounter();
});

function HindiPage() {
    return (
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
    );
}


export default HindiPage;