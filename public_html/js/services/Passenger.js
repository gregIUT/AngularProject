app = angular.module("App");

app.service("Myservice", function(){
    var listPassenger=[];
    
    this.init=function(){
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
            listPassenger.push(passager);
        });
        
    }
    
                
                
    this.getPassenger = function() {
        return listPassenger;
        
    }
                
});

app.service("MyserviceData", function(){
    var classeList=[];
    var villesList=[];
    var nationsList=[];
    
    this.getClasses = function(){
        classes.forEach(function(classe){
            classeList.push(classe);
        });
        return classeList;
    }
    
    this.getVilles = function(){
        villes.forEach(function(ville){
            villesList.push(ville);
        });
        return villesList;
    }
    
    this.getNations = function(){
        nations.forEach(function(nation){
            nationsList.push(nation);
        });
        return nationsList;
    }
});