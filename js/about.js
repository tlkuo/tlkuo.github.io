(function () {
  'use strict';

  angular
    .module('myBlog')
    .controller('GitHubController', ['$scope', '$http', GitHubController]);

  function GitHubController ($scope, $http) {

    $scope.commits = [];

    $http.get('https://api.github.com/repos/tlkuo/tlkuo.github.io/commits?per_page=5').then(success, error);

    function success(response) {

      if (response.status == 200) {

        angular.forEach(response.data, function (value) {
          $scope['commits'].push({
            date: value.commit.author.date,
            message: value.commit.message
          });
        });

      }
    }

    function error(response) {

    }
  }


})();