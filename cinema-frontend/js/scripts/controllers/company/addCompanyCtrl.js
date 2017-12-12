angular.module("cinemaApp")

    .controller('addCompanyCtrl', function ($scope, $http, $window, dataService) {

        var checkAddCompanyForm = function () {

            if(document.userAddCompany.companyName.value === "") {
                alert("Заполните пожалуйста поле 'Название компании'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCompany.companyName.value)) {
                alert("Заполните пожалуйста поле 'Название компании'.");
                document.userAddCompany.companyName.value = "";
                return false;
            }
            if(document.userAddCompany.companyPhone.value === "") {
                alert("Заполните пожалуйста поле 'Телефонный номер компании'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCompany.companyPhone.value)) {
                alert("Заполните пожалуйста поле 'Телефонный номер компании'.");
                document.userAddCompany.companyPhone.value = "";
                return false;
            }
            if(document.userAddCompany.companyEmail.value === "") {
                alert("Заполните пожалуйста поле 'Адрес электронной почты компании'.");
                return false;
            }
            if(checkEmail(document.userAddCompany.companyEmail.value) === false) {
                alert ("Неверный формат поля 'Адрес электронной почты компании'.");
                document.userAddCompany.companyEmail.value = "";
                return false;
            }
            if(document.userAddCompany.companyBoss.value === "") {
                alert("Заполните пожалуйста поле 'Руководитель компании'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCompany.companyBoss.value)) {
                alert("Заполните пожалуйста поле 'Руководитель компании'.");
                document.userAddCompany.companyBoss.value = "";
                return false;
            }
            if(document.userAddCompany.requisiteName.value === "") {
                alert("Заполните пожалуйста поле 'Юридический адрес компании'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.userAddCompany.requisiteName.value)) {
                alert("Заполните пожалуйста поле 'Юридический адрес компании'.");
                document.userAddCompany.requisiteName.value = "";
                return false;
            }
            if(document.userAddCompany.requisiteTaxpayerNumber.value === "") {
                alert("Заполните пожалуйста поле 'УНП'.");
                return false;
            }
            if(document.userAddCompany.requisiteTaxpayerNumber.value.length !== 9) {
                alert("Формат поля 'УНП' - 9 цифр.");
                document.userAddCompany.requisiteTaxpayerNumber.value = "";
                return false;
            }
            return true;
        };

        $scope.addCompany = function () {
            if (checkAddCompanyForm() === true) {
                var req = {
                    method: 'POST',
                    headers: {
                        'Authorization': getJwtToken()
                    },
                    data: {
                        companyName: $scope.companyName,
                        telephone: $scope.companyPhone,
                        email: $scope.companyEmail,
                        boss: $scope.companyBoss,
                        requisiteName: $scope.requisiteName,
                        taxpayerNumber: $scope.requisiteTaxpayerNumber,
                        statusId: 1,
                        contractorId: 1
                    },
                    url: ROUTE + '/hoard/company/create'
                };
                $http(req).then(function (response) {
                    if (response.data) {
                        alert('Компания была успешно создана!');
                        clearFields();
                    }
                }, function (response) {
                    console.log('error addCompany');
                });
            }
        };

        var clearFields = function () {
            document.userAddCompany.companyName.value = "";
            document.userAddCompany.companyPhone.value = "";
            document.userAddCompany.companyEmail.value = "";
            document.userAddCompany.companyBoss.value = "";
            document.userAddCompany.requisiteName.value = "";
            document.userAddCompany.requisiteTaxpayerNumber.value = "";
        }
    });
