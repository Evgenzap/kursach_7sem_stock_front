angular.module("cinemaApp")
    .controller('cinemaCommentCtrl', function ($scope,  dataService, $http, $window) {

        getCinemaCommentsList = function () {
            $scope.getCinemaComments = dataService.getCinemaComments(function (response) {
                console.log(response.data);
                $scope.cinemaComments = response.data.cinemaCommentMockList;

            });
        };

        getCinemaCommentsList();
        $scope.createCinemaComment = function (comment) {
            var date = new Date();
            console.log('date ' + date.getTime());
            var req = {
                method: 'POST',
                headers: {
                    'Authorization': getJwtToken()
                },
                data : {
                    comment: $scope.comment,
                    date: date.getTime()
                },
                url: ROUTE + '/users/createCinemaComment'
            };
            $http(req).then(function (response) {
                if (response.data) {
                    alert('success createCinemaComment');
                    getCinemaCommentsList();
                }
            },  function (response) {
                alert('error');
            });
        };
    });