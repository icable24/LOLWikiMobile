angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('champions', {
    url: '/champions',
    templateUrl: 'templates/champions.html',
    controller: 'championsCtrl'
  })

  .state('casual', {
    url: '/page3',
    templateUrl: 'templates/casual.html',
    controller: 'casualCtrl'
  })

  .state('ranked', {
    url: '/page4',
    templateUrl: 'templates/ranked.html',
    controller: 'rankedCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('summary', {
    url: '/page5',
    templateUrl: 'templates/summary.html',
    controller: 'summaryCtrl'
  })

  .state('home', {
    url: '/page6',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

$urlRouterProvider.otherwise('')

  

});