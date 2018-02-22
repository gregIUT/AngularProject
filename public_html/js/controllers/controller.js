app = angular.module("App");

app.controller("controllerA", ['$scope', 'Myservice', function($scope,srv){
        
        
    if (typeof $scope.list == "undefined") {
        $scope.list=[];
        srv.init();
        $scope.list=srv.getPassenger();
    }
            
    $scope.maxSize = 4;
    $scope.bigTotalItems = $scope.list.length;
    $scope.bigCurrentPage = 1;
}]);
            
app.controller ("controllerForm",['$scope', 'MyserviceData',function($scope,srvData){
    $scope.classes=[];
    $scope.villes=[];
    $scope.nations=[];
    
    $scope.classes=srvData.getVolClasses();
    $scope.villes=srvData.getVilles();
    $scope.nations=srvData.getNations();
    
    
    var _selected;

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

app.controller("controllerB", ['$scope','$routeParams', 'Myservice', function($scope,$routeParams,srv){
        
    if (typeof $scope.list == "undefined") {
        $scope.list=[];
        srv.init();
    }
    
    $scope.passenger= srv.getPassengerById($routeParams.id);
    
    console.log("%O",$scope.passenger);
                
}]);


/*
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});
     */