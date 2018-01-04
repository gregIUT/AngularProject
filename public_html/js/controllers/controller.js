app = angular.module("App");

app.controller("controllerA", function($scope){
                $scope.list=[];
                data.forEach(function(user){
                    var passager = {
                    id: user.id,
                    genre : user.genre,
                    prenom : user.prenom,
                    nom : user.nom,
                    date_naissance : user.date_naissance,
                    email : user.email,
                    classeVol : user.classe,
                    nuemro_vol: user.vol,
                    nationalite : user.nationalite,
                    ville_depart: user.ville.depart,
                    ville_arrivee   : user.ville.arrivee,
                    getAge : function(){
                        var born = new Date(user.date_naissance);
                        return new Number((new Date().getTime() - born.getTime()) / 31536000000).toFixed(0);
                        
                    }
                }
                    $scope.list.push(passager);
                });
                console.log("%O",$scope.list);
            });