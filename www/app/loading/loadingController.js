'use strict';

app.controller('LoadingController', function($scope, $http, $timeout, $state) {

    $scope.isLoading = true;
    $scope.showRetry = false;

    let getQuestions = () => {
        $timeout(() => {
            $http.get("https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/health").then(function(result) {
                if(result.status === 200) {
                    console.log("Status", result.status);
                    $state.go("questions");
                } else {
                    $scope.showRetry = true;
                }
                $scope.isLoading = false;
            });
        }, 3000);
    }
    getQuestions();

    $scope.retryAction = () => {
        $scope.showRetry = false;
        getQuestions();
    }

});
