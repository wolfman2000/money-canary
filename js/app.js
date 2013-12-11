var moneyCanaryApp = angular.module('moneyCanaryApp', ['ngRoute']);

moneyCanaryApp.factory('simpleRngFactory', SimpleRngFactory);

moneyCanaryApp.controller('standardDieCtrl', ['$scope', 'simpleRngFactory', StandardDieCtrl]);