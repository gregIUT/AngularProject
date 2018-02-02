app = angular.module("App");

app.controller("controllerA", function($scope,Myservice){
        
                $scope.list=[];
                Myservice.init();
                $scope.list=Myservice.getPassenger();
               
                //console.log("%O",Myservice.getPassenger());
                //console.log("%O",$scope.list);
            });
            
app.controller ("controllerForm",function($scope,MyserviceData){
    $scope.classes=[];
    $scope.villes=[];
    $scope.nations=[];
    
   $scope.classes=MyserviceData.getClasses();
   $scope.villes=MyserviceData.getVilles();
   $scope.nations=MyserviceData.getNations();
   
    console.log("%O",$scope.villes);
});