/**
 * Created by Administrator on 2017/3/20.
 */

var appModule = angular.module('scotchApp', ['ngRoute']);
appModule.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .otherwise('/');
});

var mainCtrl = function($scope){
};

var aboutCtrl = function($scope,$rootScope){
    $rootScope.data = {
        current: "1" // 默认为1
    };
    $rootScope.actions =
    {
        setCurrent: function (param) {
            $rootScope.data.current = param;
        }
    }
};

var contactCtrl = function($scope){
};


appModule.controller('mainController', mainCtrl);
appModule.controller('aboutController', aboutCtrl);
appModule.controller('contactController', contactCtrl);