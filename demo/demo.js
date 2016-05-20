

















// Initial state
// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     $scope.cheese="Gouda"
//   })
//   .directive('myDirective', function() {
//     return {
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });





// @ will pull a value from an attribute
//
// angular.module('app', [])
//   .controller('myController', function($scope) {
//     // $scope.test="Cats with Hats"
//   })
//   .directive('myDirective', function() {
//     return {
//       scope: {cheese: '@'},
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });


// = will bind a value to the parent scope.
// When the parent scope updates, the child updates

// angular.module('app', [])
//   .directive('repeat', function() {
//     return {
//       scope: {
//         cheese: '='
//       },
//       template: "<input ng-model='cheese' />{{cheese}}"
//     }
//   });


// Initial state
// angular.module('app', [])
//   .controller('cheeseController', function($scope) {
//     $scope.cheese="Gouda"
//   })
//   .directive('cheeseDirective', function() {
//     return {
//       scope: true,
//       // template: "Hello from the Cheese Directive: <input ng-model='cheese' />{{cheese}}"
//     }
//   });
