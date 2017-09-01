'use strict';

app.controller('LoadingController', function($scope, $http, $timeout, $state) {

    $scope.isLoading = true;
    $scope.retry = false;

    $timeout( () => {
        $http.get("https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/health").then(function(result) {
            if(result.status === 200) {
                console.log("Status", result.status);
                $state.go("questions");
            } else {
                $scope.retry = true;
            }
            $scope.isLoading = false;
        });
    }, 2000);

});
