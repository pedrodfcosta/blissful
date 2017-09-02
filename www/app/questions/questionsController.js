'use strict';

app.controller('QuestionsController', function($scope, $http, $state) {

    $scope.emptyList = true; // to show 'load more' button after question's list is loaded

    let limit = 10; // the app should fetch 10 records at a time
    let offset = 10; // the app should fetch 10 records at a time
    let filter = '';

    $http.get('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions?' + limit + '&' + offset + '&filter').then(function(result) {
        console.log('Questions', result.data);
        $scope.questions = result.data;
        $scope.emptyList = false;
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

    // the app should start loading 10 additional records if the user shows intent to browse additional records
    $scope.loadMoreRecords = () => {
        limit += 10;
        offset += 10;
        $http.get('https://private-anon-fc1b5cfd0c-blissrecruitmentapi.apiary-mock.com/questions?' + limit + '&' + offset + '&filter').then(function(result) {
            console.log('Loaded questions', result.data);
            $scope.questions = result.data;
        });
    }

});
