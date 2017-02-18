angular.module('app.controllers', [])
  
.controller('championsCtrl', ['$scope', '$stateParams', '$http', '$state',
function ($scope, $stateParams, $http, $state) {
	$http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.champion = response.data;
		$scope.whichChampion = $state.params.champId;
		console.log($scope.champion); 
	});

	$scope.getChampion = function(championId){
		for(var i = 0; i < $scope.champion.length; i++){
			if($scope.champion[i].id == champion){
				return $scope.champion[i]; 
			}
		}
	}
}])
   
.controller('normalCtrl', ['$scope', '$stateParams', '$http', '$state',
function ($scope, $stateParams, $http, $state) {
	$http.get("https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/35803435/recent?api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.games = response.games;
		console.log($scope.games);
	});

	$http.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.champion = response.data;
		$scope.whichChampion = $state.params.champId;
		console.log($scope.champion); 
	});
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
   
.controller('homeCtrl', ['$scope', '$stateParams', '$http', 
function ($scope, $stateParams, $http) {
	$http.get("https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/35803435/summary?season=SEASON2016&api_key=RGAPI-d93f964b-45bf-4dde-ae5d-27ad98f130d9").success(function(response){
		$scope.summary = response;
		console.log($scope.summary);
	});
}])
 