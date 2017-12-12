angular.module("cinemaApp")

    .controller('testCtrl', function ($scope, $http, $window) {
        $scope.filmId = localStorage.getItem(FILM_ID);

        console.log("getShowByFilmId");

        var req = {
            method: 'GET',
            url: ROUTE + '/show/getByFilm?filmId=' + localStorage.getItem(FILM_ID)
        };
        $http(req).then(function (response) {
            if (response.data) {
                console.log(response.data);
                $scope.cinemaShowList = response.data;
                console.log('cinemaShowList' + $scope.cinemaShowList);
            }
        },  function (response) {
            alert('error ShowByFilmId');
        });

        $scope.goToTickets = function ($index) {
            console.log('he');
            console.log($index);
            console.log($scope.cinemaShowList[$index].id);
            localStorage.setItem(SHOW_ID, $scope.cinemaShowList[$index].id);
            $window.location.href = '#/userSelectTicket';
        };
    });