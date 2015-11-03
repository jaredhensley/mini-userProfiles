angular.module("userProfiles").controller('mainController', function ($scope, mainService) {
  $scope.test = 'testdfdfdf';

  $scope.getUsers = function () {
    $scope.users = mainService.getUsers();
  }();
});