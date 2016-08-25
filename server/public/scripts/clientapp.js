var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    }).
    when('/frodo', {
      templateUrl: '/views/frodo.html',
      controller: "FrodoController"
    }).
    when('/harryPotter', {
      templateUrl: '/views/harryPotter.html',
      controller: "HarryPotterController"
    }).
    when('/indianaJones', {
      templateUrl: '/views/indianaJones.html',
      controller: "IndianaJonesController"
    }).
    otherwise({
      redirectTo: 'home'
    })
}]);
