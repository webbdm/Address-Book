app.controller("EditCtrl", function($location, $routeParams, $scope, AddressFactory) {

    $scope.newAddress = {};

    AddressFactory.getSingleAddress($routeParams.id).then((itemz) => {
        
        $scope.newAddress = itemz;
        console.log("get single address", $scope.newAddress);
        console.log("to edit", $scope.newAddress);
        $scope.newAddress.id = $routeParams.id;
    }).catch((error) => {
        console.log("edit Error", error);
    });


    $scope.addNewAddress = () => {
        console.log("TEST PUT",$scope.newAddress);
        AddressFactory.editAddress($scope.newAddress).then(() => {
            $location.url('/list');
        }).catch((error) => {
            console.log(error);
        });
    };


    // $scope.EditNewItem = () => {
    //     ItemFactory.editItem($scope.editItem).then(() => {
    //         $location.url('/list');
    //     }).catch((error) => {
    //         console.log("editItem error", error);
    //     });
    // };



});
