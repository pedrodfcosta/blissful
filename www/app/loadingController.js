'use strict';

app.controller('LoadingController', function($scope, $http, $timeout, $state) {

    $scope.retry = false;

    $http.get("https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/health").then(function(result) {
        if(result.status === 200) {
            console.log("Status", result.status);
        } else {
            $scope.retry = true;
        }
    });

});
