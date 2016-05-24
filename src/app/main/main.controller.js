'use strict';

angular
    .module('Demo', ['ngMap', 'google.places'])
    .controller('MainController', MainController);

MainController.$injector = ['$scope', 'NgMap'];

function MainController($scope, NgMap) {



    $scope.place = null;

    NgMap.getMap().then(function (map) {
        console.log("getMap");
        $scope.map = map;
    });

    $scope.$on('g-places-autocomplete:select', function (event, place) {
        console.log('new location: ' + JSON.stringify(place));
        $scope.position = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        };
        $scope.map.setCenter(place.geometry.location);
    });

}