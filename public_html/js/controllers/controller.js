app = angular.module("App");

app.controller("controllerA", ['$scope', 'Myservice', function($scope,srv){
        
                $scope.list=[];
                srv.init();
                $scope.list=srv.getPassenger();
                
            }]);
            
app.controller ("controllerForm",['$scope', 'MyserviceData',function($scope,srvData){
    $scope.classes=[];
    $scope.villes=[];
    $scope.nations=[];
    
    $scope.classes=srvData.getVolClasses();
    $scope.villes=srvData.getVilles();
    $scope.nations=srvData.getNations();
    
    
    var _selected;

  $scope.selected = undefined;
  $scope.states = srvData.getNations();

  $scope.ngModelOptionsSelected = function(value) {
    if (arguments.length) {
      _selected = value;
    } else {
      return _selected;
    }
  };

  $scope.modelOptions = {
    debounce: {
      default: 500,
      blur: 250
    },
    getterSetter: true
  };
   
}]);