app.run(function(FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'partials/Address-list.html',
            controller: 'AddressListCtrl'
        })
        .when('/new', {
            templateUrl: 'partials/New-Add.html',
            controller: 'NewAddCtrl'
        })
        .when('/', {
            templateUrl: 'partials/Main.html',
            controller: 'MainCtrl'
        })
        .otherwise('/main');
});