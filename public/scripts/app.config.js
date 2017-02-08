angular.module('animalApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateURL: 'views/home.html',
      controller: 'MainController as main'
    }).when('/home',{
          templateUrl: 'views/home.html',
          controller: 'MainController as main'
        }).otherwise('/',{
          templateUrl: 'views/home.html',
          controller:'MainController as main'
        });
        $locationProvider.html5Mode(true);
      });
