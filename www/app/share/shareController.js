'use strict';

app.controller('ShareController', function($scope, $stateParams, $http, $timeout) {

    $scope.urlShared = false;
    $scope.notSending = true;
    $scope.showNOKMessage = false;

    $scope.destinationEmail = undefined;
    $scope.clickedQuestion = $stateParams.clickedQuestion;
    $scope.question = $stateParams.question;
    $scope.contentUrl = 'https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions/' + $scope.clickedQuestion;

    let shareToEmail = () => {
        $timeout(() => {
            $http.post('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/share?' + $scope.destinationEmail + '&' + $scope.contentUrl)
            .then(function(result) {
                if(result.status === 200) {
                    console.log("Status", result.status);
                    $scope.urlShared = true;
                } else if(result.status === 400) {
                    $scope.statusText = result.statusText;
                    $scope.showNOKMessage = true;
                }
                $scope.notSending = true;
            });
        }, 3000);
    }

    $scope.share = () => {
        $scope.urlShared = false;
        $scope.notSending = false;
        $scope.showNOKMessage = false;
        shareToEmail();
    }
});
