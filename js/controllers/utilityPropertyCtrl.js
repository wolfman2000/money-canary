var UtilityPropertyCtrl = function($scope, $injector) {
  $injector.invoke(AbstractPropertyCtrl, this, {
    $scope: $scope
  });

  // all utilities are the same.
  $scope.buyingPrice = 150;

  $scope.baseRent = 4;

  $scope.mortgageValue = 75;

  $scope.calculateRent = function() {
    // If rolled to here, it is dice shown * utilities owned.
    // If sent here, usually a flat fee of 10 * standard dice shown.
    // Should the dice be injected?
    return $scope.baseRent * 7;
  };
};

UtilityPropertyCtrl.prototype = Object.create(AbstractPropertyCtrl.prototype);