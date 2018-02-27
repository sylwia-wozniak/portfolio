angular.
    module('questionColor').
    component('questionColor', {
        templateUrl: 'js/question-color/question-color.template.html',
        controller: ['$scope', '$http', function ($scope, $http) {
            var questions = [];
            var step = 0;

            $scope.progress = '0%';
            $scope.quizAnswers = [];
            $scope.currentQuestion = {};
            $scope.currentIndex = 0;
            $scope.currentPosition = 0;
            $scope.result = false;
            $scope.biggest = {
                description:'',
                name:'',
                score: 0
            };
            var colors = [];
            $scope.currentColor = {};

            function calculateResult() {
                var answers = $scope.quizAnswers.reduce(function (object, item) {
                    if (!object.hasOwnProperty(item)) {
                        object[item] = 0;
                    }
                    object[item] += 1;
                    return object;
                }, {});

                for (var key in answers) {
                    if (answers[key] > $scope.biggest.score) {
                        $scope.biggest.name = key;
                        $scope.biggest.description = colors[key];
                        $scope.biggest.score = answers[key];
                    }
                }
            };

            $scope.nextQuestion = function (answer){
                console.log(answer);
                if($scope.currentIndex+1 < questions.length){
                    $scope.currentIndex = $scope.currentIndex + 1;
                    $scope.currentQuestion = questions[$scope.currentIndex];
                    $scope.progress = $scope.currentIndex * step + '%';
                } else {
                    calculateResult();
                    $scope.result = true;
                }
            };
        
            $http.get('questions.json').then(function(response) {
                questions = response.data;
                $scope.currentQuestion = questions[$scope.currentIndex];
                step = 100 / questions.length;
            });

            $http.get('colors.json').then(function(response) {
                colors = response.data;
            });

        }]
    });
