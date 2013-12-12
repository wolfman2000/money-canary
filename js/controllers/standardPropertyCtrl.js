var StandardPropertyCtrl = function($scope, $injector) {
  $injector.invoke(AbstractPropertyCtrl, this, {
    $scope: $scope
  });

  // this will change for each.
  $scope.buyingPrice = 60;

  $scope.baseRent = 2;

  $scope.mortgageValue = 30;

  $scope.improvementRents = [10, 30, 90, 160, 250, 750];

  $scope.numberOfImprovements = 0;

  // usually dependent on side of the board.
  $scope.improvementCost = 50;

  // dependent on player's cash and amount of pieces left. could be a shortage.
  $scope.canMakeImprovement = false;

  $scope.calculateRent = function() {
    if ($scope.numberOfImprovements > 0) {
      return $scope.improvementRents[$scope.numberOfImprovements - 1];
    }
    return $scope.baseRent;
  };
};

StandardPropertyCtrl.prototype = Object.create(AbstractPropertyCtrl.prototype);