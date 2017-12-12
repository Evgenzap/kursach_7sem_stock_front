angular.module("cinemaApp")

    .controller('ticketCtrl', function ($scope, $http, $window) {
        $scope.showId = localStorage.getItem(SHOW_ID);

        console.log("getTicketsByShowId");

        var req = {
            method: 'GET',
            url: ROUTE + '/ticket/getByShow?showId=' + localStorage.getItem(SHOW_ID)
        };
        $http(req).then(function (response) {
            if (response.data) {
                console.log(response.data);
                $scope.ticketList = response.data;
                console.log('ticketList' + $scope.ticketList);
            }
        },  function (response) {
            alert('error getTicketsByShowId');
        });
    });
