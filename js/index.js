/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

jQuery.ajaxSetup({async:false});

var app = {
    apiServerUrl: 'http://1255053.ao306081.web.hosting-test.net/api.php',
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        this.loadMainPage();
        console.log('Received Event: ' + id);
    },

    loadMainPage: function () {
        $.get(this.apiServerUrl, function (response) {
            let table = $('<table>');
            for (let item of response) {
                let tr = $('<tr>');
                tr.append('<td>' + item.id + '</td>');
                tr.append('<td>' + item.player + '</td>');
                tr.append('<td>' + item.exp + '</td>');
                tr.append('<td>' + item.kredits + '</td>');
                table.append(tr);
                console.log(item);
            }
            $('.content').append(table);
        }, 'json');
    }
};
