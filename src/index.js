import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM
}

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));

