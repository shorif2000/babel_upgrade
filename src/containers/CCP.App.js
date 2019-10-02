import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import '../scripts/api';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { titleReducer, syncReduxAndTitle } from 'redux-title'
import { BrowserRouter } from 'react-router-dom';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import App from '../App'
import reducers from '../reducers';
import 'react-quill/dist/quill.snow.css'; // ES6
import 'core-js/modules/es6.string.starts-with';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faPlus, faEdit, faTrashAlt, faChevronRight, 
    faChevronLeft, faCheck, faTimes, faBan, faDownload, 
    faUpload, faSave, faExclamationCircle, faEye, faAddressCard,
    faHandshake, faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(faAddressCard);
library.add(faBan);
library.add(faCheck);
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(faExclamationCircle);
library.add(faDownload);
library.add(faEdit);
library.add(faEye);
library.add(faHandshake);
library.add(faPlus);
library.add(faSave);
library.add(faSpinner);
library.add(faTimes);
library.add(faTrash);
library.add(faTrashAlt);
library.add(faUpload);

require("babel-core/register");
require("babel-polyfill");


const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(promise))
        );
syncReduxAndTitle(store);

class CCPApp extends Component {
  render() {
    return (
      <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
      </Provider>
    )
  }
}

export default CCPApp;


