import React, { Component } from 'react';
import axios from 'axios';
import {
  Switch, Route, withRouter, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTitle } from 'redux-title';
//import { fetchActiveUser } from './actions/index';
//import {
  //showConfirm, showError, showInfo, showSuccess, showWarning, clearModal,
//} from './actions/modals';
import { getHttpRequestJSON } from './components/HTTP.js';
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
import 'react-sortable-tree/style.css';

const jQuery = require('jquery');
// this step is important, or else bootstrap will throw an error
window.jQuery = window.$ = jQuery; // This only needs to be imported once in your app

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.version = '';
    /*if(process.env.NODE_ENV != 'production'){
        subscribeToTimer((err, timestamp) => this.setState({ 
          timestamp 
        }));
    }*/
  }

    setRedirect = () => {
      this.setState({
        redirect: true,
      });
    };

    renderRedirect = () =>
    // if (this.state.redirect) {
      <Redirect to="/SSOLogon/manual_login.jsp" />
        // }
    ;

    initData = () => {
      const self = this;
      const promises = [];

      // promises.push(getHttpRequestJSON('/api/user/get/user/method/is/guest/format/json?quiet=1'));
      promises.push(getHttpRequestJSON('/api/user/get/user/method/is/supp/format/json?quiet=1'));
      promises.push(getHttpRequestJSON('/api/user/get/user/method/priv/format/json?quiet=1'));

      axios
        .all(promises)
        .then((response) => {
          // let guest = response[0].body.recordset.record.isGuest;
          const { version } = response[0].header;
          const supp = response[0].body.recordset.record.isSupp;
          const priv = response[1].body.recordset.record;
          return {
            // guest: guest,
            version,
            supp,
            priv,
          };
        })
        .then((lists) => {
          self.setState({
            loading: lists.guest,
            version: lists.version,
            // isGuest: lists.isGuest,
            isSupp: lists.isSupp,
            isReady: true,
            priv: lists.priv,
          });

          self.props.clearModal();
        });
    };

    componentDidMount() {
      $('.contact_us').click((e) => {
        e.preventDefault();
        window.location.href = 'mailto:upgrade@babel.com';
      });
      if ($('body').length == 0) {
        // firefox is transforming xsl differently so this fix is needed
        const head = $('#top_section');
        let $set = $(document).children();
        $set = $set.children();

        for (let i = 1, len = $set.length; i < len; i += $set.length) {
          $set.slice(i, i + ($set.length + 1)).wrapAll('<body />');
        }
      }
      if ($('#app').length == 0) {
        $('body').wrapInner("<div id='wrapper'></div>");
        $('#wrapper').toggleClass('toggled');
      }

      $('.logo').click((e) => {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
      });

      const self = this;

      if (Object.keys(this.props.activeUser).length == 0) {
            this.props.fetchActiveUser().then(() => {
                self.initData();
            })
            .catch((error) => {
            self.showError('', error);
          });
      } else {
            self.initData();
      }

      if (this.props.activeUser.name == 'AuthError') {
        this.setRedirect();
      }
    }

    passMetaBack = (meta) => {
      this.setState({
        title: meta.title,
        description: meta.description,
      });
    };

    renderTimestamp () {
        if(process.env.NODE_ENV != 'production'){
           return (
              <p className="App-intro">
                This is the timer value: {this.state.timestamp}
              </p>
           );
        }
        return null;
    }

    render() {
      if (this.props.activeUser.name == 'AuthError') {
        this.renderRedirect();
      }
      const { ...other } = this.props;
      return (
        <div>
          <Header activeUser={this.props.activeUser} version={process.env.VERSION} title={this.state.title} propsDescription={this.state.description} />
          <SideBar isReady={this.state.isReady} />
          <div id="main">
            <ErrorBoundary>
              {this.renderTimestamp}
              <Switch>
            
                <Route exact path="/" render={() => <HomeContent {...other} isGuest={this.state.isGuest} isReady={this.state.isReady} priv={this.state.priv} passMetaBack={this.passMetaBack} />} />
              </Switch>
            </ErrorBoundary>
          </div>
        </div>
      );
    }
}

// export default App;
function mapStateToProps(state) {
  if (state.activeUser.id > 0) {
    GA.set(state.activeUser.id);
  }
  return {
    title: state.title,s,
  };
}

// Anything returned from this function will end up as props
// on this container
function mapDispatchToProps(dispatch) {
  // Whenever getUser is called, the result should be passed
  // to all our reducers
  return bindActionCreators(
    {     
      updateTitle,
    },
    dispatch,
  );
}

// Promote component to a container - it needs to know
// about this new dispatch method, fetchActiveUser. Make it available
// as a prop
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

