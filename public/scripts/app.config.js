angular.module('animalApp')
  .config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateURL: 'views/main.html',
      controller: 'MainController as main'
    }).when('/main',{
          templateUrl: 'views/main.html',
          controller: 'MainController as main'
        }).otherwise('/',{
          templateUrl: 'views/main.html',
          controller:'MainController as main'
        });
        $locationProvider.html5Mode(true);
      });
