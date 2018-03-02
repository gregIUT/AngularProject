app = angular.module("App");

app.service("Myservice", function(){
    var listPassenger=[];
    
    this.init=function(){
        listPassenger=[];
        data.forEach(function(user){
            var passenger = {
                id: user.id,
                genre : user.genre,
                prenom : user.prenom,
                nom : user.nom,
                date_naissance : user.date_naissance,
                email : user.email,
                classeVol : user.classe,
                numeroVol: user.vol,
                nationalite : user.nationalite,
                villeDepart: user.ville.depart,
                villeArrivee   : user.ville.arrivee,
                getAge : function(){
                    var born = new Date(user.date_naissance);
                    return new Number((new Date().getTime() - born.getTime()) / 31536000000).toFixed(0);            
                }
            }
            listPassenger.push(passenger);
        });
    }
    
    this.creaPassenger = function(genre,prenom,nom,dateNaissance,email,classeVol,numeroVol,nationalite,villeDepart,villeArrivee){
        var passenger = {
                id: listPassenger.length,
                genre : genre,
                prenom : prenom,
                nom : nom,
                date_naissance : dateNaissance,
                email : email,
                classeVol : classeVol,
                numeroVol: numeroVol,
                nationalite : nationalite,
                villeDepart: villeDepart,
                villeArrivee   : villeArrivee,
                getAge : function(){
                    var born = new Date(dateNaissance);
                    return new Number((new Date().getTime() - born.getTime()) / 31536000000).toFixed(0);            
                }
            }
            return passenger;
    }            
                
    this.getPassenger = function() {
        return listPassenger;
    }
    
    this.getPassengerById = function(id){
        var indexSelected =-1;
        listPassenger.forEach(function (passenger,index,array){
           if(passenger.id==id){
               indexSelected=index;
           } 
        });
        if(indexSelected>=0){
            return listPassenger[indexSelected];
        }
    }
    
    this.deletePassenger = function(id){
        listPassenger.forEach(function (passenger,index,array){
           if(passenger.id==id){
               array.splice(index,1);
           }
        });
    }
    
    this.updatePassenger = function(user){
        listPassenger.forEach(function (passenger,index,array){
           if(passenger.id==user.id){
               array.splice(index,1,user);
           } 
        });
    }
    
    this.addPassenger = function(user){
        listPassenger.push(user);
    }
                
});

app.service("MyserviceData", function(){
    var classeList=[];
    var villesList=[];
    var nationsList=[];
    
    this.getVolClasses = function(){
       // console.log("%o",classes);
        classes.forEach(function(volClasse){
            classeList.push(volClasse);
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