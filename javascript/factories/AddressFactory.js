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

    let getSingleAddress = (addressID) => {
        console.log("test id",addressID);
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${addressID}.json`)
                .then((results) => {
                    let addressToEdit = results.data;
                    //console.log(results.data);
                    resolve(addressToEdit);
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

    let editAddress = (editedAddress) => {
        console.log("PUT factory", editedAddress);
        return $q((resolve, reject) => {
            $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${editedAddress.id}.json`,
                JSON.stringify({
                    first_name: editedAddress.first_name,
                    last_name: editedAddress.last_name,
                    mobile: editedAddress.mobile,
                    email: editedAddress.email,
                    id: editedAddress.id
                })
            ).then((resultz) => {
                resolve(resultz);
            }).catch((error) => {
                reject(error);
            });
        });
    };


    return { getAddresses: getAddresses, postNewAddress: postNewAddress, deletez: deletez, editAddress: editAddress, getSingleAddress: getSingleAddress };

});
