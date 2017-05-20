app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/Address-List.html',
            controller: 'AddressListCtrl'
        })
        .when('/new', {
            templateUrl: 'partials/New-Add.html',
            controller: 'NewAddCtrl'
        })
        .when('/view/:id', {
            templateUrl: 'partials/address-view.html',
            controller: 'EditCtrl'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/New-Add.html',
            controller: 'EditCtrl'
        })
        .otherwise('/list');
});