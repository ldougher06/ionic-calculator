angular.module('starter')
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.message = "hello"
    $scope.display = 0;
    $scope.updateDisplay = true;
    $scope.pendingOperation = null;
    $scope.operationBtn = "";
    $scope.runningTotal = null;
    $scope.pendingValue = null;
    $scope.lastOperation = null;

    $scope.updateDisplay = function(button) {
      if($scope.display == 0) {
        $scope.display = button;
        //$scope.displayUpdate = true;
      } else {
        // leave above commented and uncomment just below for multiple values.
        $scope.display += String(button);
      }
      //$scope.pendingValue = toNumber($scope.display);
    }

  }]);
