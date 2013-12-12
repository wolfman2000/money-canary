var AbstractPropertyCtrl = function($scope) {
  $scope.name = '';

  // must be an integer.
  $scope.buyingPrice = 0;

  // must be an integer.
  $scope.baseRent = 0;

  // must be an integer.
  $scope.mortgageValue = 0;

  // must be a bool.
  $scope.isMortgaged = false;

  // Unsure of this property: may want another approach instead of a player.
  $scope.owner = null;

  // abstract
  $scope.calculateRent = function() {
    return undefined;
  };
};