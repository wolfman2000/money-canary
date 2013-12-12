var moneyCanaryApp = angular.module('moneyCanaryApp', ['ngRoute','mcDice']);

moneyCanaryApp.controller('standardDieCtrl', ['$scope', 'simpleRngFactory', StandardDieCtrl]);
