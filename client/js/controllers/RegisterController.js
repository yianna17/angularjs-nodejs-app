'use strict';

angular.module('myApp.controllers').controller('RegisterController', function($scope, $location, userService) {

  $scope.errors = {};

  var register = function(user) {
    userService.register(user).then(function() {
      $location.path('/dashboard');
    }, function(resp) {
      $scope.errors.extra = 'There was an error creating the user';
    });

  };

  $scope.register = register;

});
