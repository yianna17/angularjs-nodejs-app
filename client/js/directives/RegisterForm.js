'use strict';

angular.module('myApp.directives').directive('registerForm', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'views/registerForm.html',
    scope: {
      onSubmit: '&',
      formErrors: '='
    },
    link: function(scope) {

      scope.submitAccount = function() {
        scope.onSubmit({user: scope.register});
      };

    }
  }
});
