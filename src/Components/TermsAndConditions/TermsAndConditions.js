import React, { Fragment } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Header from '../Header/Header';
import TermsConditionContent from '../TermsConditionContent/TermsConditionContent';
import FooterCity from '../FooterCity/FooterCity';
function TermsAndConditions() {
    return (
        <Fragment>
            <Header />
            <TermsConditionContent />
            <FooterCity />
        </Fragment>
    );
}


export default TermsAndConditions;