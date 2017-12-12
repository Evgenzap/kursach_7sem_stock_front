angular.module("cinemaApp")
    .controller('userRegistrationCtrl', function ($scope, $http) {
        $scope.username = null;
        $scope.name = null;
        $scope.email = null;
        $scope.password = null;

        var validateUserRegForm = function () {
            if (document.contact_form_regist.contact_login_regist.value === "") {
                alert ( "Пожалуйста заполните поле 'login'." );
                return false;
            }
            if(hasWhiteSpace(document.contact_form_regist.contact_login_regist.value)) {
                alert ("Пожалуйста заполните поле 'login'.");
                clearLogin();
                return false;
            }
            if(document.contact_form_regist.contact_name_regist.value === "") {
                alert ("Пожалуйста заполните поле 'ФИО'.");
                return false;
            }
            if(hasOnlyWhiteSpace(document.contact_form_regist.contact_name_regist.value)) {
                alert ("Пожалуйста заполните поле 'ФИО'.");
                clearName();
                return false;
            }
            if(document.contact_form_regist.contact_email_regist.value === "") {
                alert ("Пожалуйста заполните поле 'Адрес электронной почты'.");
                return false;
            }
            if(checkEmail(document.contact_form_regist.contact_email_regist.value) === false) {
                alert ("Неверный формат поля 'Адрес электронной почты'.");
                clearEmail();
                return false;
            }
            if (document.contact_form_regist.password_regist.value === "") {
                alert ("Пожалуйста заполните поле 'Пароль'.");
                return false;
            }
            if (hasWhiteSpace(document.contact_form_regist.password_regist.value)) {
                alert ("Пожалуйста заполните поле 'Пароль'.");
                clearPassword();
                return false;
            }
            if (document.getElementById('password_regist').value !==
                document.getElementById('confirm_password_regist').value) {
                alert ("Поле 'Пароль' подтверждено неправильно.");
                clearPassword();
                return false;
            }

            var x = document.forms["contact_form_regist"]["contact_email_regist"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                alert("Неверный формат у поля 'Адрес электронной почты'.");
                return false;
            }
            return true;
        };

        $scope.userRegistration = function (username, name, email, password) {
            var valid = validateUserRegForm();
            if(valid === true){
                console.log("userRegistration");
                var data = {
                    username: username,
                    name: name,
                    email: email,
                    password: password
                };
                $http.post(ROUTE + '/createUser', JSON.stringify(data)).then(function (response) {
                    if (response.data.success === true) {
                        alert('Поздравляем с регистрацией!');
                    } else if (response.data.status === 'name already exist') {
                        alert('Данный логин занят, выберите пожалуйста другой.');
                    } else {
                        console.log(response.data.status);
                    }
                    clearFields();
                }, function (response) {
                    console.log("error UserRegistration");
                });
            }
        };

        var clearEmail = function () {
            document.contact_form_regist.contact_email_regist.value = "";
        };

        var clearPassword = function () {
            document.contact_form_regist.password_regist.value = "";
            document.contact_form_regist.confirm_password_regist.value = "";
        };

        var clearName = function () {
            document.contact_form_regist.contact_name_regist.value = "";
        };

        var clearLogin = function () {
            document.contact_form_regist.contact_login_regist.value = "";
        };

        var clearFields = function () {
            document.contact_form_regist.contact_login_regist.value = "";
            document.contact_form_regist.contact_name_regist.value = "";
            document.contact_form_regist.contact_email_regist.value = "";
            document.contact_form_regist.password_regist.value = "";
            document.contact_form_regist.confirm_password_regist.value = "";
        };

    });

