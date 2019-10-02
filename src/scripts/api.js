import $ from 'jquery'

//To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

var api = {
        markets : function(callback){
            $.get( "/api/user/exemption/types/format/json", function( msg ) {
                data = msg.body.recordset.record;
                callback(data);
            });
        },
        service_domains: function(callback){
            $.get( "/api/user/service/domains/format/json", function( msg ) {
                data = msg.body.recordset.record;
                callback(data);
            });
        },
        exemption_types : function(callback){
            $.get( "/api/user/exemption/types/format/json", function( msg ) {
                data = msg.body.recordset.record;
                callback(data);
            });
        },
        get_fw_network_objects : function(){
            return $.get( "/api/user/fw/network/objects/format/json",{'method': 'view_firewall_network_objects'});
        },
        get_fw_service_objects : function(){
            return $.get( "/api/user/fw/service/objects/format/json",{'method': 'view_firewall_service_objects'});
        },
        get_cmd_statuses : function(){
            return $.get( "/api/user/list/comms/matrix/data/format/json", {select: 'distinct(status)' });
        },
        get_template_data: function(){
            return $.get('/api/user/templates/format/json');
        },
        get_template_placeholder: function(id){
            return $.get('/api/user/get/templates/method/placeholders/format/json',{cm_template_id: id});
        },
        get_template_filters: function(id, column){
            return $.get('/api/user/get/templates/method/placeholder/filters/format/json',{cm_template_id: id, column: column});
        },
        get_locations : function(select){
            return $.get('/api/user/locations/format/json',select);
        },
        get_protocols : function(){
            return $.get('/api/user/list/sys/list/protocols/format/json?orderby=name');
        },
        get_os_types : function(select){
            return $.get('/api/user/os/format/json',select);
        },
        get_routing_zones : function(select){
            return $.get('/api/user/routing/zones/format/json',select);
        },
        get_app_services : function(select){
            return $.get('/api/user/application/services/format/json',select);
        },
        get_environments : function(select){
            return $.get('/api/user/environments/format/json',select);
        }
}

var HTMLFormTag = (function() {
    
    var selectList;

    var generateSelectHTMLArray = function(data, column, selectedKey, newRow){
        selectList = document.createElement("select");
        selectList.setAttribute("class", "form-control");

        if(newRow){
            var option = document.createElement("option");
            option.setAttribute("value", '');
            option.text = '--select--';
            selectList.appendChild(option);
        }
        $.each(data, function( index, value ) {
            var selected = '';
            var option = document.createElement("option");
            if(selectedKey.length > 0){
                if(value.id == selectedKey){
                    selected = 'selected';
                    option.setAttribute("selected", selected);
                }else{
                    selected = '';
                }
            }

            option.setAttribute("value", value.id);
            option.text = value[column];
            selectList.appendChild(option);
        });
    }
    
    var generateSelectHTML = function(data, keySameAsValue, addselectvalue, selectedValue){
        selectList = document.createElement("select");
        selectList.setAttribute("class", "form-control");
        
        if(addselectvalue){
            var option = document.createElement("option");
            option.setAttribute("value", '');
            option.text = '--select--';
            selectList.appendChild(option);
        }
        $.each(data, function( index, value ) {
            var selected = '';
            var option = document.createElement("option");
            if(selectedValue.length > 0){
                if(value == selectedValue){
                    selected = 'selected';
                    option.setAttribute("selected", selected);
                }else{
                    selected = '';
                }
            }
            
            if(keySameAsValue){
                option.setAttribute("value", value);
            }else{
                option.setAttribute("value", index);
            }
            option.text = value;
            selectList.appendChild(option);
        });
    }
    
    return {
        createSelect : function(data,keySameAsValue, addselectvalue, selectedValue){
            generateSelectHTML(data,keySameAsValue, addselectvalue, selectedValue);
            return selectList;
        },
        createSelectArray : function(data, column, selectedKey, newRow){
            generateSelectHTMLArray(data, column, selectedKey, newRow);
            return selectList;
        },
    }
})();


const CommsMatrix = {
    getCMDStatuses: function(){
        return fetch('/api/user/list/comms/matrix/data/format/json?select=distinct(status)&orderby=status', {
          // body: new URLSearchParams({  select:
            // 'distinct(status)', orderby: 'status' })
            credentials: 'include'
        })
        .then(function(response) {
          return response.headers.error ? Promise.reject(response.headers.error) : response.json();
        }).then(function(body) {
          return body.body.recordset.record.map(function (el) { return el.status})
        })
  },
  getSupportedProtocols: function(){
    return fetch('/api/user/list/sys/list/protocols/format/json?orderby=name', {
      // body: new URLSearchParams({  orderby:
        // 'name' })
        credentials: 'include'
    })
    .then(function(response) {
      return response.headers.error ? Promise.reject(response.headers.error) : response.json();
    }).then(function(body) {
      return body.body.recordset.record.map(function (el) { return el.name})
    })
  }
}

const Exemptions = {
    getTypes : function(){
        return fetch("/api/user/exemption/types/format/json?quiet=1", {
            credentials: 'include'
        })
        .then(function(response) {
            return response.headers.error ? Promise.reject(response.headers.error) : response.json();
        }).then(function(body) {
            return body.body.recordset.record
        })
    }
}

const Market = {
    getMarkets : function(){
        return fetch("/api/user/markets/format/json?quiet=1", {
            credentials: 'include'
        })
        .then(function(response) {
            return response.headers.error ? Promise.reject(response.headers.error) : response.json();
        }).then(function(body) {
            return body.body.recordset.record
        })
    }
}


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
    })
    .done(function( response ) {
    })
    .fail(function(error) {
        console.log(error);
        
    });
    
    
    jQuery.ajax({
        url: "https://jira.sp.com/s/bfced4bd0cef107c834025cb84451921-T/-tm94sq/72009/a6079f3bcf0cf348b823ac9cfefd2762/2.0.23/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=0798d0d6",
        type: "get",
        cache: true,
        dataType: "script"
    })
    .done(function( response ) {
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
    })
    .fail(function(error) {
        console.log(error);
        
    });
})();


$(document).ready(function() {
    $.xhrPool = [];
    $.xhrPool.abortAll = function() {
        $(this).each(function(i, jqXHR) {   //  cycle through list of recorded connection
            jqXHR.abort();  //  aborts connection
            $.xhrPool.splice(i, 1); //  removes from list by index
        });
    }
    $.ajaxSetup({
        beforeSend: function(jqXHR) {           
            $.xhrPool.push(jqXHR); 
        }, //  and connection to list
        complete: function(jqXHR) {
            var i = $.xhrPool.indexOf(jqXHR);   //  get index for current connection completed
            if (i > -1) $.xhrPool.splice(i, 1); //  removes from list by index
        }
    });
});


function addClass(el, newClass) {
  if(el.className.indexOf(newClass) !== -1) {
    return;
  }

  if(el.className !== '') {
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

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
        '<div class="modal-dialog modal-m">' +
        '<div class="modal-content">' +
            '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
            '<div class="modal-body">' +
                '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
            '</div>' +
        '</div></div></div>');

    return {
        /**
         * Opens our dialog
         * @param message Custom message
         * @param options Custom options:
         *                options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
         *                options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
         */
        show: function (message, options) {
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
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);
export default waitingDialog;
    
    
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
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error("Network Error"));
        };

        req.send();
    });
}
