angular.module("cinemaApp")

    .controller('addStockCtrl', function ($scope, $http, $window, dataService) {

        var checkAddStockForm = function () {

            if(document.userAddStock.stockName.value === "") {
                alert("Заполните пожалуйста поле 'Название склада'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddStock.stockName.value)) {
                alert("Заполните пожалуйста поле 'Название склада'.");
                document.userAddStock.stockName.value = "";
                return false;
            }
            if(document.userAddStock.stockAddress.value === "") {
                alert("Заполните пожалуйста поле 'Адрес склада'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddStock.stockAddress.value)) {
                alert("Заполните пожалуйста поле 'Адрес склада'.");
                document.userAddStock.stockAddress.value = "";
                return false;
            }
            if(document.userAddStock.stockVolume.value === "") {
                alert("Заполните пожалуйста поле 'Объем склада (в метрах кубических)'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddStock.stockVolume.value)) {
                alert("Заполните пожалуйста поле 'Объем склада (в метрах кубических)'.");
                document.userAddStock.stockVolume.value = "";
                return false;
            }
            return true;
        };

        $scope.addStock = function () {
            if (checkAddStockForm() === true) {
                var req = {
                    method: 'POST',
                    headers: {
                        'Authorization': getJwtToken()
                    },
                    data: {
                        stockName: $scope.stockName,
                        stockAddress: $scope.stockAddress,
                        stockVolume: $scope.stockVolume,
                        statusId: 1
                    },
                    url: ROUTE + '/hoard/stock/create'
                };
                $http(req).then(function (response) {
                    if (response.data) {
                        alert('Склад был успешно создан!');
                        clearFields();
                    }
                }, function (response) {
                    console.log('error addStock');
                });
            }
        };

        var clearFields = function () {
            document.userAddStock.stockName.value = "";
            document.userAddStock.stockAddress.value = "";
            document.userAddStock.stockVolume.value = "";
        }

    });