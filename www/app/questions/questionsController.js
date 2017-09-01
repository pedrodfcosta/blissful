'use strict';

app.controller('QuestionsController', function($scope, $http, $state) {
    $http.get('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions?limit&offset&filter').then(function(result) {
        console.log("Questions", result.data);
        $scope.questions = result.data;
    });
});
