angular.module("cinemaApp")

    .controller('addCommodityCtrl', function ($scope, $http, $window, dataService) {

        var checkAddCommodityCtrl = function () {

            if(document.userAddCommodity.commodityName.value === "") {
                alert("Заполните пожалуйста поле 'Название товара'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCommodity.commodityName.value)) {
                alert("Заполните пожалуйста поле 'Название товара'.");
                document.userAddCommodity.commodityName.value = "";
                return false;
            }
            if(document.userAddCommodity.vendorCode.value === "") {
                alert("Заполните пожалуйста поле 'Код производителя'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCommodity.vendorCode.value)) {
                alert("Заполните пожалуйста поле 'Код производителя'.");
                document.userAddCommodity.vendorCode.value = "";
                return false;
            }
            if(document.userAddCommodity.commodityWeight.value === "") {
                alert("Заполните пожалуйста поле 'Вес товара (в кг)'.");
                return false;
            }
            if(document.userAddCommodity.commodityVolume.value === "") {
                alert("Заполните пожалуйста поле 'Объем товара'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCommodity.commodityVolume.value)) {
                alert("Заполните пожалуйста поле 'Объем товара'.");
                document.userAddCommodity.commodityVolume.value = "";
                return false;
            }
            if(document.userAddCommodity.purchasePrice.value === "") {
                alert("Заполните пожалуйста поле 'Закупочная цена'.");
                return false;
            }
            if(document.userAddCommodity.sellingPrice.value === "") {
                alert("Заполните пожалуйста поле 'Цена продажи'.");
                return false;
            }
            if(document.userAddCommodity.valueAddedTax.value === "") {
                alert("Заполните пожалуйста поле 'НДС %'.");
                return false;
            }
            if(document.userAddCommodity.description.value === "") {
                alert("Заполните пожалуйста поле 'Описание продукта'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCommodity.description.value)) {
                alert("Заполните пожалуйста поле 'Описание продукта'.");
                document.userAddCommodity.description.value = "";
                return false;
            }
            return true;
        };

        $scope.uploadImg = function(image) {
            if(checkAddCommodityCtrl() === true) {
                var file = $scope.myFile;
                console.log('file is ' );
                console.dir(file);
                var uploadUrl = ROUTE + "/news/images/upload";
                var fd = new FormData();
                fd.append('file', file);
                $http.post(uploadUrl, fd, {
                    transformRequest: angular.identity,
                    headers: {'Authorization': getJwtToken(),
                        'Content-Type': undefined}
                }).then(function (response) {
                    console.log(response.data.link);
                    $scope.addCommodity(response.data.link);
                }, function (response) {
                    console.log('error upload');
                });
            }
        };

        $scope.addCommodity = function (link) {
            if (checkAddCommodityCtrl() === true) {
                var req = {
                    method: 'POST',
                    headers: {
                        'Authorization': getJwtToken()
                    },
                    data: {
                        commodityName: $scope.commodityName,
                        vendorCode: $scope.vendorCode,
                        weight: $scope.commodityWeight,
                        volume: $scope.commodityVolume,
                        valueAddedTax: $scope.valueAddedTax,
                        commodityImagePath: link,
                        statusId: 1,
                        description: $scope.description,
                        purchasePrice: $scope.purchasePrice,
                        sellingPrice: $scope.sellingPrice
                    },
                    url: ROUTE + '/hoard/commodity/create'
                };
                $http(req).then(function (response) {
                    if (response.data) {
                        alert('Товар был успешно создан!');
                        clearFields();
                    }
                }, function (response) {
                    console.log('error addCommodity');
                });
            }
        };

        var clearFields = function () {
            document.userAddCommodity.commodityName.value = "";
            document.userAddCommodity.vendorCode.value = "";
            document.userAddCommodity.commodityWeight.value = "";
            document.userAddCommodity.commodityVolume.value = "";
            document.userAddCommodity.valueAddedTax.value = "";
            document.userAddCommodity.description.value = "";
            document.userAddCommodity.purchasePrice.value = "";
            document.userAddCommodity.sellingPrice.value = "";
            document.getElementById('fImg').value = '';
        }
    });