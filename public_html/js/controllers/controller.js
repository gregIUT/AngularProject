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
    
   // console.log("%O",classes);
    
    $scope.classes=srvData.getVolClasses();
    $scope.villes=srvData.getVilles();
    $scope.nations=srvData.getNations();
   
}]);