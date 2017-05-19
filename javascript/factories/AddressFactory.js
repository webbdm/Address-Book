app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

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

    let deletez = (addressId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${addressId}.json`)
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    console.log("deletez error", error);
                });
        });
    };


    return { getAddresses: getAddresses, postNewAddress: postNewAddress, deletez: deletez };

});