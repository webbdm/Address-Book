app.controller("AddressListCtrl", function($routeParams, $scope, AddressFactory) {

    //Get Address List
    let getItems = () => {
        AddressFactory.getAddresses().then((itemz) => {
            $scope.addresses = itemz;
            console.log($scope.addresses);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

    //Edit Address

    //Delete Address

    $scope.deleteAddress = (addressId) => {
        AddressFactory.deletez(addressId).then(() => {
            getItems();
        }).catch(() => {
            console.log("deleteItem error", error);
        });

    };


});
