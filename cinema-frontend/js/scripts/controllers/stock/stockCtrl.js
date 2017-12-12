angular.module("cinemaApp")

    .controller('stockCtrl', function ($scope, $http, $window, dataService) {

        var getStockList = function () {
            dataService.getAllStockList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.stockList = response.data;
                }
            });
        };

        getStockList();

        $scope.deleteStock = function($index) {
            console.log("deleteStock");
            var req = {
                method: 'POST',
                url: ROUTE + '/hoard/stock/delete',
                headers: {
                    'Authorization': getJwtToken()
                },
                data: {
                    id: $scope.stockList[$index].id
                }
            };
            $http(req).then(function (response) {
                if(response.data.success === true) {
                    console.log(response.data);
                    getStockList();
                } else {
                    alert(response.data.status);
                }
            },  function (response) {
                console.log('error deleteStock');
            });
        };

    });