'use strict';

app.controller('DetailsController', function($scope, $stateParams, $http, $timeout, $state) {

    $scope.clickedQuestion = $stateParams.clickedQuestion;
    $scope.question = $stateParams.question;
    $scope.voting = false;
    $scope.successMessage = false;
    $scope.showNOKMessage = false;

    $scope.share = (clickedQuestion, question) => $state.go('share', {clickedQuestion:clickedQuestion, question:question});

    let submitVote = () => {
        $timeout(() => {
            $http.put('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions/' + $scope.clickedQuestion)
            .then(function(result) {
                if(result.status === 201) {
                    console.log("Status", result.status);
                    $scope.successMessage = true;
                } else if(result.status === 400) {
                    $scope.statusText = result.statusText;
                    $scope.showNOKMessage = true;
                }
                $scope.voting = false;
            });
        }, 1000);
    }

    $scope.vote = (choice) => {
        console.log('choice', choice);
        console.log('scope', $scope.choice);
        $scope.successMessage = false;
        $scope.showNOKMessage = false;
        $scope.voting = true;
        submitVote();
    }

    $scope.selectedAnswer = (choice) => {
        console.log('choice', choice);
        console.log('scope', $scope.choice);
        $scope.choice = choice;
    }

});
