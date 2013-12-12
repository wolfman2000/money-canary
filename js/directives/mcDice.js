/**
 * Angular JS Dice directive
 *
 * 
 */

var dice = angular.module('mcDice',[])

dice.factory('simpleRngFactory', SimpleRngFactory);

dice.directive('simpleDice', ['$compile','simpleRngFactory',function($compile,simpleRngFactory){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
     scope: {
      diceOptions : '=',
      ngModel : '='

     }, // {} = isolate, true = child, false/undefined = no change
     controller : function($scope, $element, $attrs, $transclude) {

      $scope.rollDice = function(){

        $scope.diceDisplay = simpleRngFactory.random()
        console.log($scope.diceDisplay)

      }



     },
     require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
     restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
     template: '<div><button ng-click="rollDice()">Roll Dice</button> {{diceDisplay}}</div>',
    // templateUrl: '',
     replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
     link: function($scope, iElm, iAttrs, controller) {
      
     }
  };
}]);
