'use strict';

app.controller('DetailsController', function($scope, $stateParams) {

    $scope.clickedQuestion = $stateParams.clickedQuestion;
    $scope.question = $stateParams.question;

});
