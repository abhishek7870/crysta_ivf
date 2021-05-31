import React, { Fragment } from 'react';
import BannerMarathi from "../BannerMarathi/BannerMarathi";
import MedicalPanelMarathi from '../MedicalPanelMarathi/MedicalPanelMarathi';
import ServicesMarathi from '../ServicesMarathi/ServicesMarathi';
import { CarouselProvider } from "../../CarouselContextHindi";
import FaqMarathi from "../FaqMarathi/FaqMarathi";
import { SecondCarouselProvider } from "../../ReviewCarouselContextMarathi";
import ReviewMarathi from "../ReviewMarathi/ReviewMarathi";
import FooterMarathi from "../FooterMarathi/FooterMarathi";
import { CityBannerProvider } from "../../cityBannerContextHindi";
import $ from 'jquery';
import FooterStick from '../FooterStick/FooterStick';

$(document).ready(function () {
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
                <BannerMarathi />
            </CityBannerProvider>

            <ServicesMarathi />

            <CarouselProvider>
                <MedicalPanelMarathi />
            </CarouselProvider>

            <FaqMarathi />

            <SecondCarouselProvider>
                <ReviewMarathi />
            </SecondCarouselProvider>

            <FooterMarathi />
            {/* <FooterStick /> */}
        </Fragment>
    );
}


export default HindiPage;