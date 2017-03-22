/**
 * Created by Administrator on 2017/3/20.
 */

var appModule = angular.module('scotchApp', ['ngRoute']);

// configure our routes
appModule.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .otherwise('/home');
});

var mainCtrl = function($scope){
    $scope.message = 'Everyone come and see how good I look!';
};

var aboutCtrl = function($scope,$rootScope){
    $scope.message = 'Look! I am an about page.';
    $rootScope.data = {
        current: "1" // 1代表张三，2代表李四，3代表王五
    };
    $rootScope.actions =
    {
        setCurrent: function (param) {
            $rootScope.data.current = param;
        }
    }
};

var contactCtrl = function($scope){
    $scope.message = 'Contact us! JK. This is just a demo.';
};


appModule.controller('mainController', mainCtrl);
appModule.controller('aboutController', aboutCtrl);
appModule.controller('contactController', contactCtrl);