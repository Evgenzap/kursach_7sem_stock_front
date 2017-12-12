angular.module("cinemaApp")

    .controller('addAcceptanceCtrl', function ($scope, $http, $window, dataService) {

        var checkAddAcceptanceForm = function () {
            return true;
        };

        var getCompanyList = function () {
            dataService.getAllCompanyList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.companyList = response.data;
                }
            });
        };

        var getStockList = function () {
            dataService.getAllStockList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.stockList = response.data;
                }
            });
        };

        getStockList();
        getCompanyList();

        $scope.addAcceptance = function () {
            if (checkAddAcceptanceForm() === true) {
                var req = {
                    method: 'POST',
                    headers: {
                        'Authorization': getJwtToken()
                    },
                    data: {
                        consumerId: $scope.consumerCompany.id,
                        supplierId: $scope.supplierCompany.id,
                        stockId: $scope.selectedStock.id,
                        statusId: 1,
                        acceptanceDate: "2017-12-12 18:00"
                    },
                    url: ROUTE + '/hoard/acceptance/create'
                };
                $http(req).then(function (response) {
                    if (response.data) {
                        alert('Приемка была успешно создана!');
                        clearFields();
                    }
                }, function (response) {
                    console.log('error addAcceptance');
                });
            }
        };

        $scope.modalWindow = function () {
            console.log("modal window");
            getCommodityList();
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        };

        var getCommodityList = function () {
            dataService.getAllCommodityList(function (response) {
                if (response.data) {
                    console.log(response.data);
                    $scope.commodityList = response.data;
                }
            });
        };

        $scope.validatebits = [];
        $scope.RejectRequest = function () {
            var inc = 0;
            $scope.selectedId = [];
            angular.forEach($scope.commodityList, function (i, index) {

                if ((!!i.selected) && (!!i.commodityCount)) {

                    $scope.selectedId.push(i.id);
                    $scope.validatebits[index] = false;
                    //No Color Change

                } else if ((!!i.selected) && (!i.commodityCount)) {

                    inc = 1;
                    $scope.validatebits[index] = true;
                    //Color Change for the text box.

                }

                else {

                    //No Color Change
                    $scope.validatebits[index] = false;
                    $scope.validatebit = true;

                }

            });
        };
    });
