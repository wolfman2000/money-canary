var RailroadPropertyCtrl = function($scope, $injector) {
  $injector.invoke(AbstractPropertyCtrl, this, {
    $scope: $scope
  });

  // all railroads are the same.
  $scope.buyingPrice = 200;

  $scope.baseRent = 25;

  $scope.mortgageValue = 100;

  // unique stuff here.
  $scope.hasDepot = false;

  $scope.depotPrice = 100;

  $scope.canPlaceDepot = function() {
    // This may require a Player object for cash.
    return false;
  };

  $scope.calculateRent = function() {
    // This may require a Player object to identify how many railroads are owned.
    return $scope.baseRent * ($scope.hasDepot ? 2 : 1);
  };

};

RailroadPropertyCtrl.prototype = Object.create(AbstractPropertyCtrl.prototype);