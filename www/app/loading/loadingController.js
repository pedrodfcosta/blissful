'use strict';

app.controller('LoadingController', function($scope, $http, $timeout, $state) {

    $scope.isLoading = true;
    $scope.showRetry = false;
    $scope.showNOKMessage = false;

    let getQuestions = () => {
        $timeout(() => {
            $http.get("https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/health").then(function(result) {
                if(result.status === 200) {
                    console.log("Status", result.status);
                    $scope.isLoading = false;
                    $state.go("questions");
                } else if(result.status === 503) {
                    $scope.statusText = result.statusText;
                    $scope.showRetry = true;
                    $scope.showNOKMessage = true;
                } else {
                    $scope.showRetry = true;
                }
            });
        }, 500);
    }
    getQuestions();

    $scope.retryAction = () => {
        $scope.showRetry = false;
        $scope.showNOKMessage = false;
        getQuestions();
    }

});
