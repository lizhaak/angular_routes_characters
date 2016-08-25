myApp.controller('FrodoController', ['$scope', function($scope) {
  console.log('frodo controller running');
  $scope.message = "Frodo";
  $scope.image = "https://critiqueen5.files.wordpress.com/2013/01/frodo.jpg";
  $scope.description = "Frodo Baggins, son of Drogo Baggins, was a Hobbit of the Shire during the Third Age. He was and still is most renowned for his leading role in the Quest of the Ring in which he bore the One Ring to Mount Doom, where it was ultimately destroyed."
}]);
