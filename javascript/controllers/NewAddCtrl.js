app.controller("NewAddCtrl", function($routeParams, $scope, AddressFactory) {
    $scope.addresses = [];

    $scope.addNewAddress = () => {

        //$scope.newAddress.isCompleted = false;
        AddressFactory.postNewAddress($scope.newAddress).then((response) => {
            $scope.newAddress = {};
            //$scope.showListView = true;
            getItems();
        }).catch((error) => {
            console.log("addNewAddress error", error);
        });

        //postNewItem
    };

});
