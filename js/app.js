var moneyCanaryApp = angular.module('moneyCanaryApp', ['ngRoute','ngDice']);

moneyCanaryApp.controller('standardDieCtrl', ['$scope', 'simpleRngFactory', StandardDieCtrl]);