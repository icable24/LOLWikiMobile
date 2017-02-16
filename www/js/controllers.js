angular.module('app.controllers', [])
  
.controller('championsCtrl', ['$scope', '$stateParams', '$http', 
function ($scope, $stateParams, $http) {
	$http.get("https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.champion = response.data;
		console.log($scope.champion); 
	});
}])
   
.controller('normalCtrl', ['$scope', '$stateParams', 
function ($scope, $stateParams) {


}])
   
.controller('rankedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams){


}])
   
.controller('summaryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
	$http.get("https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/44690886/recent?api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.champion = response.games;
		console.log($scope.champion); 
	});
}])
 