angular.module("cinemaApp")
    .controller('userAuthCtrl', function ($scope, $http, $window) {
        var validateUserAuthForm = function () {
            var valid = true;

            if (document.contact_form_aut.contact_login_aut.value === "") {
                alert("Пожалуйста заполните поле 'login'.");
                valid = false;
            }
            if (document.contact_form_aut.password_aut.value === "") {
                alert("Пожалуйста заполните поле 'Пароль'.");
                valid = false;
            }
            return valid;
        };
        $scope.username = null;
        $scope.password = null;


        $scope.doAuth = function (username, password) {
            var valid = validateUserAuthForm();
            if (valid === true) {
                console.log("tada");
                var data = {
                    username: username,
                    password: password
                };

                $http.post(ROUTE + '/auth', JSON.stringify(data)).then(function (response) {
                    if (response.data) {
                        alert('success');
                        setJwtToken(response.data.token);
                        console.log("******");
                        console.log(response.data);
                        console.log(getJwtToken());
                        $scope.getUser();
                        $window.location.href = '#/home';
                    }
                }, function (response) {
                    alert('error auth');
                });
            }

        };


        $scope.logout = function () {
            removeJwtToken();
            console.log(getJwtToken());
            $window.location.href = '#/';
            alert("Уже выходите?");
        };


        $scope.getUser = function () {
            var req = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With':'XMLHttpRequest',
                    'Accept': 'application/json, text/javascript, */*',
                    'Authorization': getJwtToken()
                },
                url: ROUTE + '/user'
            };
            $http(req).then(function (response) {
                if (response.data) {
                    console.log(response.data.username);
                    $scope.gUsername = response.data.username;
                    console.log($scope.gUsername);
                    $scope.gName = response.data.name;
                    console.log(response.data.name);
                    alert('success getUser');
                }
            },  function (response) {
                alert('error');
            });
        };


        $scope.goToUserEdit = function () {
            $window.location.href = '#/userEdit';
        };



        $scope.goToUserCompany = function () {
            $window.location.href = '#/userCompany';
        };
        $scope.goToUserIndicators = function () {
            $window.location.href = '#/userCompanyIndicators';
        };
        $scope.goToUserShipment = function () {
            $window.location.href = '#/userShipment';
        };
        $scope.goToUserAcceptance = function () {
            $window.location.href = '#/userAcceptance';
        };
        $scope.goToUserStock = function () {
            $window.location.href = '#/userStock';
        };
        $scope.goToUserCommodity = function () {
            $window.location.href = '#/userCommodity';
        };
        $scope.goToUserAddCommodity = function () {
            $window.location.href = '#/userAddCommodity';
        };
        $scope.goToUserAddCompany = function () {
            $window.location.href = '#/userAddCompany';
        };
        $scope.goToUserAddStock = function () {
            $window.location.href = '#/userAddStock';
        };
        $scope.goToUserAddAcceptance = function () {
            $window.location.href = '#/userAddAcceptance';
        }
    });
