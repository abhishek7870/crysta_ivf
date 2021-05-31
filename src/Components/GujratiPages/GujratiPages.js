import React, { Fragment } from 'react';
import { CarouselProvider } from "../../CarouselContextGujarati";
import { SecondCarouselProvider } from "../../ReviewCarouselContextGujatati";
import { CityBannerProvider } from "../../cityBannerContextHindi";
//import CityBannerHindi from '../CityBannerHindi/CityBannerHindi';
import GujratiBanner from '../BannerGujrati/BannerGujrati';
import GujaratiServices from '../ServicesGujarati/ServicesGujarati';
//import ServicesHindi from '../ServicesHindi/ServicesHindi';
//import MedicalPanelHindi from '../MedicalPanelHindi/MedicalPanelHindi';

// import FooterHindi from '../FooterHindi/FooterHindi';
import MedicalPanelGujarati from '../MedicalPanelGujarati/MedicalPanelGujarati';
import FaqGujarati from '../FaqGujarati/FaqGujarati';
import ReviewGujarati from '../ReviewGujarati/ReviewGujarati';
import FooterGujarati from '../FooterGujarati/FooterGujarati';

function GujratiPages() {
    return (
        <Fragment>

            <CityBannerProvider>
                <GujratiBanner />
            </CityBannerProvider>
            <GujaratiServices />
            <CarouselProvider>
                <MedicalPanelGujarati />
            </CarouselProvider>

            <FaqGujarati />

             <SecondCarouselProvider>
                <ReviewGujarati />
            </SecondCarouselProvider>

            <FooterGujarati />

        </Fragment>
    );
}


export default GujratiPages;