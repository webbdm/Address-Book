app.controller("NewAddCtrl", ($routeParams, $scope, AddressFactory) => {
    $scope.addresses = [];

    let getAddresses = () => {
        let itemz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
                .then((fbItems) => {
                    let itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        itemz.push(itemCollection[key]);
                    });
                    resolve(itemz);
                }).catch((error) => {
                    reject(error);
                });
        });

    };

    let getItems = () => {
        getAddresses().then((itemz) => {
            $scope.addresses = itemz;
            console.log($scope.addresses);
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

    let postNewAddress = (newAddress) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    console.log("Post newAddress error", error);
                });
        });
    };

    $scope.addNewAddress = () => {

        //$scope.newAddress.isCompleted = false;
        postNewAddress($scope.newAddress).then((response) => {
            $scope.newAddress = {};
            //$scope.showListView = true;
            getItems();
        }).catch((error) => {
            console.log("addNewAddress error", error);
        });

        //postNewItem
    };

});