angular.module("cinemaApp")

    .controller('filmCtrl', function ($scope, $http, $window) {

        $scope.routeImg = ROUTE + "/news/images/night.jpg";

        $scope.getFilmsByCriteria = function (searchField) {
            if(document.searchFilmForm.nameFilm_search.value === '' && document.searchFilmForm.filmCrit.value === 'findByName') {
                $scope.getAllFilms();
            }
            if(document.searchFilmForm.nameFilm_search.value !== '' && document.searchFilmForm.filmCrit.value === 'findByName') {
                $scope.getFilmsByName(searchField);
            }
            if(document.searchFilmForm.nameFilm_search.value === '' && document.searchFilmForm.filmCrit.value === 'findByAge') {
                $scope.getAllFilms();
            }
            if(document.searchFilmForm.nameFilm_search.value !== '' && document.searchFilmForm.filmCrit.value === 'findByAge') {
                $scope.getFilmsByAge(searchField);
            }

        };


        $scope.getFilmsByName = function (name) {
            console.log("findByName");
            var req = {
                method: 'GET',
                url: ROUTE + '/films/find?Name=' + name
            };
            $http(req).then(function (response) {
                if (response.data.mockFilmList.length === 0) {
                    alert('not found ');
                    $scope.searchField = null;
                    $scope.films = null;
                } else {
                    console.log(response.data);
                    $scope.films = response.data.mockFilmList;
                }
            }, function (response) {
                alert('error');
            });
        };

        $scope.getFilmsByAge = function (name) {
            console.log("findByAge");
            var req = {
                method: 'GET',
                url: ROUTE + '/films/findByAge?Age=' + name
            };
            $http(req).then(function (response) {
                if (response.data.length === 0) {
                    alert('not found ');
                    $scope.searchField = null;
                    $scope.films = null;
                } else {
                    console.log(response.data);
                    $scope.films = response.data;
                }
            }, function (response) {
                alert('error');
            });
        };

        $scope.getAllFilms = function () {
            console.log("findAll");
            var req = {
                method: 'GET',
                url: ROUTE + '/films/findAll'
            };
            $http(req).then(function (response) {
                if (response.data.mockFilmList.length === 0) {
                    alert('not found');
                    $scope.searchField = null;
                    $scope.films = null;
                } else {
                    console.log(response.data);
                    $scope.films = response.data.mockFilmList;
                }
            },  function (response) {
                alert('error');
            });
        };

        $scope.goToCinemaShow = function ($index) {
            $window.location.href = '#/userSelectShow';
            console.log($index);
            console.log($scope.films[$index].id);
            localStorage.setItem(FILM_ID, $scope.films[$index].id);
        }
    });
