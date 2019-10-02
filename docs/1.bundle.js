(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _jsx2 = __webpack_require__(/*! babel-runtime/helpers/jsx */ "./node_modules/babel-runtime/helpers/jsx.js");

var _jsx3 = _interopRequireDefault(_jsx2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxTitle = __webpack_require__(/*! redux-title */ "./node_modules/redux-title/lib/index.js");

var _HTTP = __webpack_require__(/*! ./components/HTTP.js */ "./src/components/HTTP.js");

__webpack_require__(/*! react-sortable-tree/style.css */ "./node_modules/react-sortable-tree/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { fetchActiveUser } from './actions/index';
//import {
//showConfirm, showError, showInfo, showSuccess, showWarning, clearModal,
//} from './actions/modals';
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
// this step is important, or else bootstrap will throw an error

//import GA from './utils/GoogleAnalytics';
//import { subscribeToTimer } from './api';
/*
import ModalConfirm from './components/modalreduxconfirm';
import ModalError from './components/modalreduxerror';
import ModalInfo from './components/modalreduxinfo';
import ModalSuccess from './components/modalreduxsuccess';
import ModalWarning from './components/modalreduxwarning';

import Admin from './components/admin/admin';
import AggregateView from './components/commsmatrix/aggregate_view';
import Approve from './components/sox/approve';
import AppServices from './components/content/appservices';
import AuditSoxApproval from './components/audit/sox_approval';
import Citadel from './components/citadel';
import CCPGroupNetworks from './components/networks/ccp/ccpgroupnetworks';
import CCPNetworkGroups from './components/networks/ccp/ccpnetworkgroups';
import CommsMatrix from './components/commsmatrix';
import CommsMatrixError from './components/commsmatrix/commsmatrix_error';
import CommsMatrixFullView from './components/commsmatrix/fullview';
import CommsMatrixTemplates from './components/commsmatrix/templates';
import CommsMatrixTemplate from './components/commsmatrix/template';
import CommsMatrixUpload from './components/commsmatrix/upload';
import Entities from './components/content/entities';
import Vendors from './components/vendormanagement/vendors';
import VendorDevices from './components/vendormanagement/vendor_devices';
import VendorDevicesEOL from './components/vendormanagement/vendor_devices_eol';
import EnvTypes from './components/content/envtypes';
import Exemptions from './components/security';
import FactsAndFigures from './components/reports/factsandfigures';
import FindHost from './components/find/host';
import FindNetwork from './components/find/network';
import Firewalls from './components/firewalls/firewalls';
import FirewallImplementation from './components/firewalls/implementation';
import FirewallImplementationAggregated from './components/firewalls/implementationaggregated';
import FilterObjects from './components/networks/filter_objects';
import FirewallObjectsView from './components/firewalls/objects_view';
import Header from './components/header';
import HomeContent from './containers/home';
import IAMAddressingTypesView from './components/iam/iamaddressingtypesview';
import IAMConfig from './components/iam/iamconfig';
import IAMCramerSpooler from './components/iam/iamcramerspooler';
import IAMSubnet from './components/iam/iamsubnet';
import IAMRange from './components/iam/iamrange';
import IAMRangeView from './components/iam/iamrangeview';
import IWSAPI from './components/iwsapi/iwsapi';
import Locations from './components/content/locations';
import Logout from './components/logout';
import Ldapuser from './components/ldapuser';
import Networks from './components/content/networks';
import NetworkObjects from './components/firewalls/objects_networks';
import NetworkTaxonomy from './components/routing/network_taxonomy';
import NetworkObjectsView from './components/firewalls/objects_networks_view';
import NetworkZoneAliases from './components/policy/security/networkzonealiases';
import OSTypes from './components/content/ostypes';
import RoutingDesigns from './components/routing/routing_designs';
import RoutingExemptions from './components/routing/routing_exemptions';
import ReportSecurity from './components/reports/report_security';
import ReportServiceDesignEngagement from './components/reports/service_design_engagement';
import ReportOverlappingNetworks from './components/reports/overlapping_networks';
import RoutingDomains from './components/policy/routing/routingdomains';
import RoutingDomainAliases from './components/policy/routing/routingdomainaliases';
import RoutingDomainMapping from './components/policy/routing/routingdomainmapping';
import RoutingExemptionsNew from './components/routing/routing_exemptions_new';
import Services from './components/services/index';
import ServicesDashboard from './components/services/dashboard';
import ServiceObjectsView from './components/firewalls/objects_service_view';
import SecurityExemptionsBulkUpload from './components/security/bulk_upload';
import SecurityExemptionsNew from './components/security/security_exemptions_new';
import SecurityExemptionsEdit from './components/security/security_exemptions_edit';
import SecurityZones from './components/policy/security/securityzones';
import SecurityZoneAliases from './components/policy/security/securityzonealiases';
import SecurityZoneMapping from './components/policy/security/securityzonemapping';
import SoxDashboard from './components/sox';
import SideBar from './components/sidebar';
import SysListIPBBMeta from './components/syslistipbbmeta';
import Test from './components/reports/test';
import UAM from './components/reports/UAM';
import WorkerJobs from './components/reports/workerjobs';

import ErrorBoundary from './errorboundary';
*/
// include required js
// import ('bootstrap/dist/js/bootstrap.js');
// require('bootstrap-multiselect/dist/js/bootstrap-multiselect.js');
// include required css
// import ('bootstrap/dist/css/bootstrap.css');
// require('bootstrap-multiselect/dist/css/bootstrap-multiselect.css');
// now include the multiselect component
// const Multiselect = require('react-bootstrap-multiselect');
window.jQuery = window.$ = jQuery; // This only needs to be imported once in your app

var
// if (this.state.redirect) {
_ref = (0, _jsx3.default)(_reactRouterDom.Redirect, {
  to: '/SSOLogon/manual_login.jsp'
});

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.setRedirect = function () {
      _this.setState({
        redirect: true
      });
    };

    _this.renderRedirect = function () {
      return _ref;
    }
    // }
    ;

    _this.initData = function () {
      var self = _this;
      var promises = [];

      // promises.push(getHttpRequestJSON('/api/user/get/user/method/is/guest/format/json?quiet=1'));
      promises.push((0, _HTTP.getHttpRequestJSON)('/api/user/get/user/method/is/supp/format/json?quiet=1'));
      promises.push((0, _HTTP.getHttpRequestJSON)('/api/user/get/user/method/priv/format/json?quiet=1'));

      _axios2.default.all(promises).then(function (response) {
        // let guest = response[0].body.recordset.record.isGuest;
        var version = response[0].header.version;

        var supp = response[0].body.recordset.record.isSupp;
        var priv = response[1].body.recordset.record;
        return {
          // guest: guest,
          version: version,
          supp: supp,
          priv: priv
        };
      }).then(function (lists) {
        self.setState({
          loading: lists.guest,
          version: lists.version,
          // isGuest: lists.isGuest,
          isSupp: lists.isSupp,
          isReady: true,
          priv: lists.priv
        });

        self.props.clearModal();
      });
    };

    _this.passMetaBack = function (meta) {
      _this.setState({
        title: meta.title,
        description: meta.description
      });
    };

    _this.state = {
      title: 'Home',
      description: '',
      isGuest: false,
      isSupp: false,
      priv: [],
      loading: true,
      version: '',
      redirect: false,
      isReady: false,
      timestamp: 'no timestamp yet'
    };
    _this.version = '';
    /*if(process.env.NODE_ENV != 'production'){
        subscribeToTimer((err, timestamp) => this.setState({ 
          timestamp 
        }));
    }*/
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.contact_us').click(function (e) {
        e.preventDefault();
        window.location.href = 'mailto:upgrade@babel.com';
      });
      if ($('body').length == 0) {
        // firefox is transforming xsl differently so this fix is needed
        var head = $('#top_section');
        var $set = $(document).children();
        $set = $set.children();

        for (var i = 1, len = $set.length; i < len; i += $set.length) {
          $set.slice(i, i + ($set.length + 1)).wrapAll('<body />');
        }
      }
      if ($('#app').length == 0) {
        $('body').wrapInner("<div id='wrapper'></div>");
        $('#wrapper').toggleClass('toggled');
      }

      $('.logo').click(function (e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
      });

      var self = this;

      if ((0, _keys2.default)(this.props.activeUser).length == 0) {
        this.props.fetchActiveUser().then(function () {
          self.initData();
        }).catch(function (error) {
          self.showError('', error);
        });
      } else {
        self.initData();
      }

      if (this.props.activeUser.name == 'AuthError') {
        this.setRedirect();
      }
    }
  }, {
    key: 'renderTimestamp',
    value: function renderTimestamp() {
      if (true) {
        return (0, _jsx3.default)('p', {
          className: 'App-intro'
        }, void 0, 'This is the timer value: ', this.state.timestamp);
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.activeUser.name == 'AuthError') {
        this.renderRedirect();
      }
      var other = (0, _objectWithoutProperties3.default)(this.props, []);

      return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)(Header, {
        activeUser: this.props.activeUser,
        version: "62",
        title: this.state.title,
        propsDescription: this.state.description
      }), (0, _jsx3.default)(SideBar, {
        isReady: this.state.isReady
      }), (0, _jsx3.default)('div', {
        id: 'main'
      }, void 0, (0, _jsx3.default)(ErrorBoundary, {}, void 0, this.renderTimestamp, (0, _jsx3.default)(_reactRouterDom.Switch, {}, void 0, (0, _jsx3.default)(_reactRouterDom.Route, {
        exact: true,
        path: '/',
        render: function render() {
          return _react2.default.createElement(HomeContent, (0, _extends3.default)({}, other, { isGuest: _this2.state.isGuest, isReady: _this2.state.isReady, priv: _this2.state.priv, passMetaBack: _this2.passMetaBack }));
        }
      })))));
    }
  }]);
  return App;
}(_react.Component);

// export default App;


function mapStateToProps(state) {
  if (state.activeUser.id > 0) {
    GA.set(state.activeUser.id);
  }
  return {
    title: state.title, s: s
  };
}

// Anything returned from this function will end up as props
// on this container
function mapDispatchToProps(dispatch) {
  // Whenever getUser is called, the result should be passed
  // to all our reducers
  return (0, _redux.bindActionCreators)({
    updateTitle: _reduxTitle.updateTitle
  }, dispatch);
}

// Promote component to a container - it needs to know
// about this new dispatch method, fetchActiveUser. Make it available
// as a prop
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/components/HTTP.js":
/*!********************************!*\
  !*** ./src/components/HTTP.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHttpRequestJSON = exports.getHttpRequestPromise = undefined;

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getHttpRequestPromise = exports.getHttpRequestPromise = function getHttpRequestPromise(url) {
    return new _promise2.default(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error('Network Error'));
        };

        req.send();
    });
};

var getHttpRequestJSON = exports.getHttpRequestJSON = function getHttpRequestJSON(url) {
    return getHttpRequestPromise(url).then(JSON.parse);
};

/***/ }),

/***/ "./src/containers/CCP.App.js":
/*!***********************************!*\
  !*** ./src/containers/CCP.App.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = __webpack_require__(/*! babel-runtime/helpers/jsx */ "./node_modules/babel-runtime/helpers/jsx.js");

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(/*! core-js/es6/map */ "./node_modules/core-js/es6/map.js");

__webpack_require__(/*! core-js/es6/set */ "./node_modules/core-js/es6/set.js");

__webpack_require__(/*! raf/polyfill */ "./node_modules/raf/polyfill.js");

__webpack_require__(/*! ../scripts/api */ "./src/scripts/api.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxTitle = __webpack_require__(/*! redux-title */ "./node_modules/redux-title/lib/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reduxPromise = __webpack_require__(/*! redux-promise */ "./node_modules/redux-promise/lib/index.js");

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _developmentOnly = __webpack_require__(/*! redux-devtools-extension/developmentOnly */ "./node_modules/redux-devtools-extension/developmentOnly.js");

var _App = __webpack_require__(/*! ../App */ "./src/App.js");

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

__webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");

__webpack_require__(/*! core-js/modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");

var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ES6
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faAddressCard);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faBan);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faCheck);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronLeft);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronRight);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faExclamationCircle);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faDownload);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faEdit);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faEye);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faHandshake);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faPlus);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faSave);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faSpinner);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTimes);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTrash);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faTrashAlt);
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUpload);

__webpack_require__(/*! babel-core/register */ "./node_modules/babel-core/register.js");
__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var store = (0, _redux.createStore)(_reducers2.default, (0, _developmentOnly.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxPromise2.default)));
(0, _reduxTitle.syncReduxAndTitle)(store);

var _ref = (0, _jsx3.default)(_reactRedux.Provider, {
  store: store
}, void 0, (0, _jsx3.default)(_reactRouterDom.BrowserRouter, {}, void 0, (0, _jsx3.default)(_App2.default, {})));

var CCPApp = function (_Component) {
  (0, _inherits3.default)(CCPApp, _Component);

  function CCPApp() {
    (0, _classCallCheck3.default)(this, CCPApp);
    return (0, _possibleConstructorReturn3.default)(this, (CCPApp.__proto__ || (0, _getPrototypeOf2.default)(CCPApp)).apply(this, arguments));
  }

  (0, _createClass3.default)(CCPApp, [{
    key: 'render',
    value: function render() {
      return _ref;
    }
  }]);
  return CCPApp;
}(_react.Component);

exports.default = CCPApp;

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _reduxTitle = __webpack_require__(/*! redux-title */ "./node_modules/redux-title/lib/index.js");

var rootReducer = (0, _redux.combineReducers)({
    router: _reactRouterRedux.routerReducer,
    form: _reduxForm.reducer,
    //formIAMUpload: formReducer,
    title: _reduxTitle.titleReducer
});

exports.default = rootReducer;

/***/ }),

/***/ "./src/root.app.js":
/*!*************************!*\
  !*** ./src/root.app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unmount = exports.mount = exports.bootstrap = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _singleSpaReact = __webpack_require__(/*! single-spa-react */ "./node_modules/single-spa-react/lib/single-spa-react.js");

var _singleSpaReact2 = _interopRequireDefault(_singleSpaReact);

var _CCPApp = __webpack_require__(/*! ./containers/CCP.App.js */ "./src/containers/CCP.App.js");

var _CCPApp2 = _interopRequireDefault(_CCPApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactLifecycles = (0, _singleSpaReact2.default)({
  React: _react2.default,
  ReactDOM: _reactDom2.default,
  rootComponent: _CCPApp2.default,
  domElementGetter: domElementGetter
});

var bootstrap = exports.bootstrap = [reactLifecycles.bootstrap];

var mount = exports.mount = [reactLifecycles.mount];

var unmount = exports.unmount = [reactLifecycles.unmount];

function domElementGetter() {
  // This is where single-spa will mount our application  
  return document.getElementById("root");
}

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//To add to window
if (!window.Promise) {
    window.Promise = _promise2.default;
}

var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.jQuery = window.$ = jQuery;

var api = {
    markets: function markets(callback) {
        _jquery2.default.get("/api/user/exemption/types/format/json", function (msg) {
            data = msg.body.recordset.record;
            callback(data);
        });
    },
    service_domains: function service_domains(callback) {
        _jquery2.default.get("/api/user/service/domains/format/json", function (msg) {
            data = msg.body.recordset.record;
            callback(data);
        });
    },
    exemption_types: function exemption_types(callback) {
        _jquery2.default.get("/api/user/exemption/types/format/json", function (msg) {
            data = msg.body.recordset.record;
            callback(data);
        });
    },
    get_fw_network_objects: function get_fw_network_objects() {
        return _jquery2.default.get("/api/user/fw/network/objects/format/json", { 'method': 'view_firewall_network_objects' });
    },
    get_fw_service_objects: function get_fw_service_objects() {
        return _jquery2.default.get("/api/user/fw/service/objects/format/json", { 'method': 'view_firewall_service_objects' });
    },
    get_cmd_statuses: function get_cmd_statuses() {
        return _jquery2.default.get("/api/user/list/comms/matrix/data/format/json", { select: 'distinct(status)' });
    },
    get_template_data: function get_template_data() {
        return _jquery2.default.get('/api/user/templates/format/json');
    },
    get_template_placeholder: function get_template_placeholder(id) {
        return _jquery2.default.get('/api/user/get/templates/method/placeholders/format/json', { cm_template_id: id });
    },
    get_template_filters: function get_template_filters(id, column) {
        return _jquery2.default.get('/api/user/get/templates/method/placeholder/filters/format/json', { cm_template_id: id, column: column });
    },
    get_locations: function get_locations(select) {
        return _jquery2.default.get('/api/user/locations/format/json', select);
    },
    get_protocols: function get_protocols() {
        return _jquery2.default.get('/api/user/list/sys/list/protocols/format/json?orderby=name');
    },
    get_os_types: function get_os_types(select) {
        return _jquery2.default.get('/api/user/os/format/json', select);
    },
    get_routing_zones: function get_routing_zones(select) {
        return _jquery2.default.get('/api/user/routing/zones/format/json', select);
    },
    get_app_services: function get_app_services(select) {
        return _jquery2.default.get('/api/user/application/services/format/json', select);
    },
    get_environments: function get_environments(select) {
        return _jquery2.default.get('/api/user/environments/format/json', select);
    }
};

var HTMLFormTag = function () {

    var selectList;

    var generateSelectHTMLArray = function generateSelectHTMLArray(data, column, selectedKey, newRow) {
        selectList = document.createElement("select");
        selectList.setAttribute("class", "form-control");

        if (newRow) {
            var option = document.createElement("option");
            option.setAttribute("value", '');
            option.text = '--select--';
            selectList.appendChild(option);
        }
        _jquery2.default.each(data, function (index, value) {
            var selected = '';
            var option = document.createElement("option");
            if (selectedKey.length > 0) {
                if (value.id == selectedKey) {
                    selected = 'selected';
                    option.setAttribute("selected", selected);
                } else {
                    selected = '';
                }
            }

            option.setAttribute("value", value.id);
            option.text = value[column];
            selectList.appendChild(option);
        });
    };

    var generateSelectHTML = function generateSelectHTML(data, keySameAsValue, addselectvalue, selectedValue) {
        selectList = document.createElement("select");
        selectList.setAttribute("class", "form-control");

        if (addselectvalue) {
            var option = document.createElement("option");
            option.setAttribute("value", '');
            option.text = '--select--';
            selectList.appendChild(option);
        }
        _jquery2.default.each(data, function (index, value) {
            var selected = '';
            var option = document.createElement("option");
            if (selectedValue.length > 0) {
                if (value == selectedValue) {
                    selected = 'selected';
                    option.setAttribute("selected", selected);
                } else {
                    selected = '';
                }
            }

            if (keySameAsValue) {
                option.setAttribute("value", value);
            } else {
                option.setAttribute("value", index);
            }
            option.text = value;
            selectList.appendChild(option);
        });
    };

    return {
        createSelect: function createSelect(data, keySameAsValue, addselectvalue, selectedValue) {
            generateSelectHTML(data, keySameAsValue, addselectvalue, selectedValue);
            return selectList;
        },
        createSelectArray: function createSelectArray(data, column, selectedKey, newRow) {
            generateSelectHTMLArray(data, column, selectedKey, newRow);
            return selectList;
        }
    };
}();

var CommsMatrix = {
    getCMDStatuses: function getCMDStatuses() {
        return fetch('/api/user/list/comms/matrix/data/format/json?select=distinct(status)&orderby=status', {
            // body: new URLSearchParams({  select:
            // 'distinct(status)', orderby: 'status' })
            credentials: 'include'
        }).then(function (response) {
            return response.headers.error ? _promise2.default.reject(response.headers.error) : response.json();
        }).then(function (body) {
            return body.body.recordset.record.map(function (el) {
                return el.status;
            });
        });
    },
    getSupportedProtocols: function getSupportedProtocols() {
        return fetch('/api/user/list/sys/list/protocols/format/json?orderby=name', {
            // body: new URLSearchParams({  orderby:
            // 'name' })
            credentials: 'include'
        }).then(function (response) {
            return response.headers.error ? _promise2.default.reject(response.headers.error) : response.json();
        }).then(function (body) {
            return body.body.recordset.record.map(function (el) {
                return el.name;
            });
        });
    }
};

var Exemptions = {
    getTypes: function getTypes() {
        return fetch("/api/user/exemption/types/format/json?quiet=1", {
            credentials: 'include'
        }).then(function (response) {
            return response.headers.error ? _promise2.default.reject(response.headers.error) : response.json();
        }).then(function (body) {
            return body.body.recordset.record;
        });
    }
};

var Market = {
    getMarkets: function getMarkets() {
        return fetch("/api/user/markets/format/json?quiet=1", {
            credentials: 'include'
        }).then(function (response) {
            return response.headers.error ? _promise2.default.reject(response.headers.error) : response.json();
        }).then(function (body) {
            return body.body.recordset.record;
        });
    }
};

function stylesheet(url) {
    var s = document.createElement('link');
    s.type = 'text/css';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}

function script(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}

//load scripts to the cache of browser
(function () {

    jQuery.ajax({
        url: "https://jira.sp.domain.com/s/4799dcdc2c98163450cd7f98917e4bf6-T/ajqs40/72009/a6079f3bcf0cf348b823ac9cfefd2762/2.0.23/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=190eeefa",
        type: "get",
        cache: true,
        dataType: "script"
    }).done(function (response) {}).fail(function (error) {
        console.log(error);
    });

    jQuery.ajax({
        url: "https://jira.sp.com/s/bfced4bd0cef107c834025cb84451921-T/-tm94sq/72009/a6079f3bcf0cf348b823ac9cfefd2762/2.0.23/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=0798d0d6",
        type: "get",
        cache: true,
        dataType: "script"
    }).done(function (response) {
        /*
        jQuery.ajax({
            url: "https://jira.sp.com/s/4799dcdc2c98163450cd7f98917e4bf6-T/ajqs40/72009/a6079f3bcf0cf348b823ac9cfefd2762/2.0.23/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=7e97e878",
            type: "get",
            cache: true,
            dataType: "script"
        })
        .done(function( response ) {
            window.ATL_JQ_PAGE_PROPS =  {
                    "triggerFunction": function(showCollectorDialog) {
                        //Requires that jQuery is available! 
                        jQuery(".contact_us").click(function(e) {
                            e.preventDefault();
                            showCollectorDialog();
                        });
                }};
        }); 
        */
    }).fail(function (error) {
        console.log(error);
    });
})();

(0, _jquery2.default)(document).ready(function () {
    _jquery2.default.xhrPool = [];
    _jquery2.default.xhrPool.abortAll = function () {
        (0, _jquery2.default)(this).each(function (i, jqXHR) {
            //  cycle through list of recorded connection
            jqXHR.abort(); //  aborts connection
            _jquery2.default.xhrPool.splice(i, 1); //  removes from list by index
        });
    };
    _jquery2.default.ajaxSetup({
        beforeSend: function beforeSend(jqXHR) {
            _jquery2.default.xhrPool.push(jqXHR);
        }, //  and connection to list
        complete: function complete(jqXHR) {
            var i = _jquery2.default.xhrPool.indexOf(jqXHR); //  get index for current connection completed
            if (i > -1) _jquery2.default.xhrPool.splice(i, 1); //  removes from list by index
        }
    });
});

function addClass(el, newClass) {
    if (el.className.indexOf(newClass) !== -1) {
        return;
    }

    if (el.className !== '') {
        //ensure class names are separated by a space
        newClass = ' ' + newClass;
    }

    el.className += newClass;
}

/**
 * Module for displaying "Waiting for..." dialog using Bootstrap
 *
 * @author Eugene Maslovich <ehpc@em42.ru>
 */

var waitingDialog = waitingDialog || function ($) {
    'use strict';

    // Creating modal dialog's DOM

    var $dialog = $('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' + '<div class="modal-dialog modal-m">' + '<div class="modal-content">' + '<div class="modal-header"><h3 style="margin:0;"></h3></div>' + '<div class="modal-body">' + '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' + '</div>' + '</div></div></div>');

    return {
        /**
         * Opens our dialog
         * @param message Custom message
         * @param options Custom options:
         *                options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
         *                options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
         */
        show: function show(message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
         * Closes dialog
         */
        hide: function hide() {
            $dialog.modal('hide');
        }
    };
}(jQuery);
exports.default = waitingDialog;

//The polling function
//https://davidwalsh.name/javascript-polling
/*
function poll(fn, timeout, interval) {
 var endTime = Number(new Date()) + (timeout || 2000);
 interval = interval || 100;

 var checkCondition = function(resolve, reject) {
     // If the condition is met, we're done! 
     var result = fn();
     if(result) {
         resolve(result);
     }
     // If the condition isn't met but the timeout hasn't elapsed, go again
     else if (Number(new Date()) < endTime) {
         setTimeout(checkCondition, interval, resolve, reject);
     }
     // Didn't match and too much time, reject!
     else {
         reject(new Error('timed out for ' + fn + ': ' + arguments));
     }
 };

 return new Promise(checkCondition);
}
*/

//https://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery
/*var poll_checker = (function poll(url){
   setTimeout(function(url){
       // @todo change it to promise object
      $.ajax({ url: url, success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);

        //Setup the next poll recursively
        poll(url);
      }, dataType: "json"});
  }, 1000);
})();
*/

function getJSON(url) {
    return get(url).then(JSON.parse);
}

function get(url) {
    return new _promise2.default(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });
}

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map