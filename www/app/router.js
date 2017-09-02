app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('loading', {
            url: "",
            templateUrl: "app/loading/loading.html",
            controller: "LoadingController"
        })
        .state('questions', {
            url: "",
            templateUrl: "app/questions/questions.html",
            controller: "QuestionsController"
        })
        .state('details', {
            url: "",
            params: {
                clickedQuestion: undefined,
                question: undefined
            },
            templateUrl: 'app/details/details.html',
            controller: "DetailsController"
        });
});
