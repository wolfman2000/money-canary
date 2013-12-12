var SpecialDieCtrl = function($scope, $injector, simpleRngFactory) {

  $injector.invoke(StandardDieCtrl, this, {
    $scope: $scope,
    simpleRngFactory: simpleRngFactory
  });

	$scope.display = function() {
    if ($scope.currentRoll <= 3) {
      return $scope.currentRoll;
    }
    if ($scope.currentRoll == 6) {
      return "M";
    }
    return "B";
  };
}

SpecialDieCtrl.prototype = Object.create(StandardDieCtrl.prototype);