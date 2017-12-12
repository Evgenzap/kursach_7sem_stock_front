angular.module("cinemaApp")
    .controller('userEditCtrl', function ($scope, $http, $window) {

        var validateUserEditForm = function () {
            if (document.contact_form_edit_user.contact_name_edit_user.value === "") {
                alert("Пожалуйста заполните поле 'ФИО'.");
                return false;
            }
            if (document.contact_form_edit_user.contact_login_edit_user.value === "") {
                alert("Пожалуйста заполните поле 'Логин'.");
                return false;
            }
            if (document.contact_form_edit_user.password_edit_user.value === "") {
                alert("Пожалуйста заполните поле 'Пароль'.");
                return false;
            }
            var x = document.forms["contact_form_edit_user"]["contact_email_edit_user"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                alert("Неверный формат поля 'Адрес электронной почты'.");
                return false;
            }
            return true;
        };

        var req = {
            method: 'GET',
            headers: {
                'Authorization': getJwtToken()
            },
            url: ROUTE + '/user'
        };
        $http(req).then(function (response) {
            if (response.data) {
                $scope.name = response.data.name;
                $scope.username = response.data.username;
                $scope.email = response.data.email;
            }
        }, function (response) {
            console.log('error userEditCtrl:GET:/user');
        });

        $scope.editUser = function (username, name, email, password) {
            if(validateUserEditForm() === true) {
                var req = {
                    method: 'PUT',
                    headers: {
                        'Authorization': getJwtToken()
                    },
                    data : {
                        id : $scope.gId,
                        username: username,
                        name: name,
                        email: email,
                        password: password
                    },
                    url: ROUTE + '/user'
                };
                $http(req).then(function (response) {
                    if (response.data.success === true) {
                        removeJwtToken();
                        alert('Данные успешно изменены!');
                        $window.location.href = '#/userAvtorization';
                    } else {
                        if(response.data.status === "name already exist") {
                            alert("Данный логин занят, выберите пожалуйста другой.");
                            clearFields();
                        }
                        alert(response.data.status);
                        clearFields();
                    }
                },  function (response) {
                    console.log('error');
                    clearFields();
                });
            }
        };

        var clearFields = function () {
            document.contact_form_edit_user.contact_name_edit_user.value = "";
            document.contact_form_edit_user.contact_login_edit_user.value = "";
            document.contact_form_edit_user.password_edit_user.value = "";
            document.contact_form_edit_user.contact_email_edit_user.value = "";
        };


    });