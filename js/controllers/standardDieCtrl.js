var StandardDieCtrl = function($scope, simpleRngFactory) {
  var currentRoll = 1;

  function GetRandomRoll() {
    return Math.floor(simpleRngFactory.random() * 6) + 1;
  }

  // other dice may override this.
  function GetDisplay() {
    return currentRoll;
  }

  $scope.roll = function() {
    currentRoll = GetRandomRoll();
  };

  $scope.display = GetDisplay;
}