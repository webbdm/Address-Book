app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("MainCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
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

});
