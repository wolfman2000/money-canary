var StandardDieCtrl = function($scope, simpleRngFactory) {
  $scope.currentRoll = 5;

  function GetRandomRoll() {
    return Math.floor(simpleRngFactory.random() * 6) + 1;
  }

  // other dice may override this.
  function GetDisplay() {
    return $scope.currentRoll;
  }

  $scope.roll = function() {
    $scope.currentRoll = GetRandomRoll();
  };

  $scope.display = GetDisplay;
}