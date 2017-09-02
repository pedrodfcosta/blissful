'use strict';

app.controller('DetailsController', function($scope, $stateParams, $state) {

    $scope.clickedQuestion = $stateParams.clickedQuestion;
    $scope.question = $stateParams.question;

    $scope.share = (clickedQuestion, question) => $state.go('share', {clickedQuestion:clickedQuestion, question:question});

});
