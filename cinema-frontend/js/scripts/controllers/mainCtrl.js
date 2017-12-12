angular.module("cinemaApp")

    .controller('mainCtrl', function ($scope, dataService, $http) {

        $scope.helloConsole = dataService.helloConsole;

        $scope.getUsers = dataService.getUsers(function (response) {
            console.log(response.data);
            $scope.users = response.data;

        });

        // var user = {
        //     name : 'xovan',
        //     username : 'king',
        //     password : 'futbolchic',
        //     email : 'cococo@gmail.com'
        // };
        //
        // $http.post('http://localhost:8080/persons', user).
        // success(function(data, status, headers, config) {
        //     $scope.user = data;
        //     console.log(data);
        // }).
        // error(function(data, status, headers, config) {
        //     alert("error post data");
        // });
    });