import React, { Fragment } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './PrivacyPolicy.css'
import Header from '../Header/Header';
import PrivacyPolicyContent from '../PrivacyPolicyContent/PrivacyPolicyContent';
import FooterCity from '../FooterCity/FooterCity';

function PrivacyPolicy() {
    return (
        <Fragment>
            <Header />
            <PrivacyPolicyContent />
            <FooterCity />
        </Fragment>
    );
}


export default PrivacyPolicy;