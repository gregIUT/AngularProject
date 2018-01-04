app = angular.module("App");

app.controller("controllerA", function($scope){
                $scope.list=[];
                data.forEach(function(user){
                    $scope.list.push(user)
                });
                console.log("%O",$scope.list);
            });