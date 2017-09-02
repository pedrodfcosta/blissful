'use strict';

app.controller('QuestionsController', function($scope, $http, $state) {
    $http.get('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions?limit&offset&filter').then(function(result) {
        console.log("Questions", result.data);
        $scope.questions = result.data;
    });

    $scope.viewQuestion = question => {
        // save question id
        let clickedQuestion = question.id;
        // get data from api using question query with the respective question id
        $http.get('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions/' + question.id)
        .then(result => {
            let questionDetails = result.data;
            $state.go('details', {clickedQuestion:clickedQuestion, question:questionDetails});
        });
    }

});
