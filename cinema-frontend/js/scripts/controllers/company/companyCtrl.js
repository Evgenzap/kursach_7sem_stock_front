angular.module("cinemaApp")

    .controller('companyCtrl', function ($scope, $http, $window, dataService) {

        var getCompanyList = function () {
            dataService.getAllCompanyList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.companyList = response.data;
                }
            });
        };

        getCompanyList();

        $scope.deleteSafeCinemaShow = function($index) {
            console.log("deleteSafeCinemaShow");
            var req = {
                method: 'POST',
                url: ROUTE + '/hoard/company/delete',
                headers: {
                    'Authorization': getJwtToken()
                },
                data: {
                    id: $scope.companyList[$index].id
                }
            };
            $http(req).then(function (response) {
                if(response.data.success === true) {
                    console.log(response.data);
                    getCompanyList();
                } else {
                    alert(response.data.status);
                }
            },  function (response) {
                console.log('error deleteSafeCinemaShow');
            });
        };

    });