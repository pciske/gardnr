'use strict';

gardnrControllers.controller( 'GardenController', [ '$scope', '$http', '$routeParams',
	function( $scope, $http, $routeParams ) {
		if ( typeof $routeParams.mode !== 'undefined' ) {
			$scope.mode = $routeParams.mode;
		} else {
			$scope.mode = 'edit';
		}

		if ( $routeParams.gardenID > 0 ) {
			$http.get( 'data/garden-' + $routeParams.gardenID + '.json' ).success( function( data ) {
				$scope.garden = data;
			} );
		}
	} ] );