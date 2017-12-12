angular.module("cinemaApp")

    .service('dataService', function ($http) {
        this.helloConsole = function () {
            console.log('this is the hello console service');
        };

        this.getUsers = function (callback) {
            $http.get('http://localhost:8080/users').then(callback)
        };

        this.getCinemaComments = function (callback) {
            var req = {
                method: 'GET',
                headers: {
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/cinemaComments/getAll'
            };
            $http(req).then(callback);
        };

        this.getCinemaComments = function (callback) {
            var req = {
                method: 'GET',
                headers: {
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/user'
            };
            $http(req).then(callback);
        };


        this.getFilms = function (callback) {
            var req = {
                method: 'GET',
                url: ROUTE + '/'
            };
            $http(req).then(callback);
        };

        this.getAllCompanyList = function (callback) {
            var req = {
                method: 'GET',
                headers: {
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/hoard/company/all'
            };
            $http(req).then(callback);
        };

        this.getAllStockList = function (callback) {
            var req = {
                method: 'GET',
                headers: {
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/hoard/stock/all'
            };
            $http(req).then(callback);
        };


        this.getAllCommodityList = function (callback) {
            var req = {
                method: 'GET',
                headers: {
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/hoard/commodity/all?route=' + ROUTE
            };
            $http(req).then(callback);
        };
    });
