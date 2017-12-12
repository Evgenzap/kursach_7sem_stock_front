var scotchApp = angular.module('cinemaApp', ['ngRoute', 'ngResource']);


var TOKEN_KEY = "jwtToken";
var ROUTE = "http://192.168.0.106:8080";
var FILM_ID;
var SHOW_ID;

//var ROUTE = "http://localhost:8080";

    getJwtToken = function () {
        return localStorage.getItem(TOKEN_KEY);
    };

    setJwtToken = function (token) {
        localStorage.setItem(TOKEN_KEY, token);
    };

    removeJwtToken = function () {
        localStorage.removeItem(TOKEN_KEY);
    };

    createAuthorizationTokenHeader = function () {
        var token = getJwtToken();
        if (token) {
            return {"Authorization": token};
        } else {
            return {};
        }
    };

    hasWhiteSpace = function (s) {
        return s.toString().indexOf(' ') >= 0;
    };

    hasOneWhiteSpace = function (s) {
        return s.length === 1 && s.indexOf(' ') === 0;
    };

    isNegative = function (s) {
        return s < 0;
    };

    inputInteger = function (evn, pattern) {
        evn = evn || window.event;
        var sender = evn.target || evn.srcElement;
        var isIE = document.all;

        if (sender.tagName.toUpperCase() === 'INPUT') {

            var keyPress = isIE ? evn.keyCode : evn.which;

            if (keyPress < 32 || evn.altKey || evn.ctrlKey) {
                return true;
            }
            var symbolPress = String.fromCharCode(keyPress);
            if (!pattern.test(symbolPress)) {
                console.log('int check 0');
                return false;
            }
        }
        return true;
    };

    checkReg = function (evn, pattern) {
        evn = evn || window.event;
        var sender = evn.target || evn.srcElement;
        var isIE = document.all;

        if (sender.tagName.toUpperCase() === 'INPUT') {

            var keyPress = isIE ? evn.keyCode : evn.which;

            if (keyPress < 32 || evn.altKey || evn.ctrlKey) {
                return true;
            }
            var symbolPress = String.fromCharCode(keyPress);
            if (!pattern.test(symbolPress)) {
                console.log('miss 5');
                return false;
            }
        }
        return true;
    };

    filterInput = function (e, regexp) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var isIE = document.all;

        if (target.tagName.toUpperCase() === 'INPUT') {
            var code = isIE ? e.keyCode : e.which;
            if (code < 32 || e.ctrlKey || e.altKey) {
                return true;
            }
            var char = String.fromCharCode(code);
            if (!regexp.test(char)) {
                console.log('filter');
                return false;
            }
        }
        return true;
    };

    hasOnlyWhiteSpace = function (s) {
        var pattern = /^[\s]+$/;
        return pattern.test(s);
    };

    isInteger = function (s) {
        var pattern = /[0-9]/;
        return pattern.test(s);
    };

    isFloat = function (s) {
        var pattern = /^\d{0,3}(\.\d{0,2}){0,1}$/;
        var logic = pattern.test(s);
        console.log(logic);
        return pattern.test(s);
    };

    isNumeric = function (value) {
        var logic = !isNaN(value) && isFinite(value);
        console.log('isNumeric = ' + logic);
        return logic;
    };

    checkEmail = function (email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    var check = function (newPassword, confirmPassword) {
        if (document.getElementById(newPassword).value ===
            document.getElementById(confirmPassword).value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'matching';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'not matching';
        }
    };


// configure our routes
scotchApp.controller('mainController', function ($scope) {

});
scotchApp.config(function ($routeProvider) {
    $routeProvider

    // route for the start page
        .when('/', {
            templateUrl: 'pages/StartPage.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the user page

        // route for the user company
        .when('/userCompany', {
            templateUrl: 'pages/company/userCompany.html'
        })
        .when('/userAddCompany', {
            templateUrl: 'pages/company/userAddCompany.html'
        })
        .when('/userCompanyIndicators', {
            templateUrl: 'pages/company/userStartPage.html'
        })

        // route for the user stock
        .when('/userStock', {
            templateUrl: 'pages/stock/userStock.html'
        })
        .when('/userAddStock', {
            templateUrl: 'pages/stock/userAddStock.html'
        })

        // route for the user commodity
        .when('/userCommodity', {
            templateUrl: 'pages/commodity/userCommodity.html'
        })
        .when('/userAddCommodity', {
            templateUrl: 'pages/commodity/userAddCommodity.html'
        })

        // route for the user shipment
        .when('/userShipment', {
            templateUrl: 'pages/shipment/userShipment.html'
        })

        // route for the user acceptance
        .when('/userAcceptance', {
            templateUrl: 'pages/acceptance/userAcceptance.html'
        })
        .when('/userAddAcceptance', {
            templateUrl: 'pages/acceptance/userAddAcceptance.html'
        })


        .when('/userAboutPage', {
            templateUrl: 'pages/userAboutPage.html'
        })
        .when('/commentFilm', {
            templateUrl: 'pages/commentFilm.html'
        })
        .when('/userStartPage', {
            templateUrl: 'pages/userStartPage.html'
        })
        .when('/userRegistration', {
            templateUrl: 'pages/userRegistration.html'
        })
        .when('/userAvtorization', {
            templateUrl: 'pages/userAuthorization.html'
        })
        .when('/userSelectShow', {
            templateUrl: 'pages/userSelectShow.html'
        })
        .when('/userSelectTicket', {
            templateUrl: 'pages/userSelectTicket.html'
        })
        .when('/home', {
            templateUrl: 'pages/company/userStartPage.html'
        })
        .when('/userEdit', {
            templateUrl: 'pages/userEdit.html'
        })
        .when('/userOwnTicket', {
            templateUrl: 'pages/userOwnTickets.html'
        })

        // route for the admin page
        .when('/adminAddFilm', {
            templateUrl: 'pages/adminAddFilm.html'
        })
        .when('/adminSelectFilm', {
            templateUrl: 'pages/adminSelectFilm.html'
        })
        .when('/adminSelectRoomAndTime', {
            templateUrl: 'pages/adminSelectRoomAndTime.html'
        })
        .when('/addRoom', {
            templateUrl: 'pages/adminAddRoom.html'
        })
        .when('/seeUsers', {
            templateUrl: 'pages/adminSeeUsers.html'
        })
        .when('/adminRegistration', {
            templateUrl: 'pages/adminRegistration.html'
        });

});


scotchApp.controller('aboutController', function ($scope) {

});

