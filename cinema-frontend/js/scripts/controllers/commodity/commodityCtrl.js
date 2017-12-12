angular.module("cinemaApp")

    .controller('commodityCtrl', function ($scope, $http, $window, dataService) {

        var getCommodityList = function () {
            dataService.getAllCommodityList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.commodityList = response.data;
                }
            });
        };

        getCommodityList();

        $scope.deleteCommodity = function($index) {
            console.log("deleteCommodity");
            var req = {
                method: 'POST',
                url: ROUTE + '/hoard/commodity/delete',
                headers: {
                    'Authorization': getJwtToken()
                },
                data: {
                    id: $scope.commodityList[$index].id
                }
            };
            $http(req).then(function (response) {
                if(response.data.success === true) {
                    console.log(response.data);
                    getCommodityList();
                } else {
                    alert(response.data.status);
                }
            },  function (response) {
                console.log('error deleteCommodity');
            });
        };
    });
