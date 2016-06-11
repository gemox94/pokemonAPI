'use strict';
(function(){

    angular.module('pokeapi')
        .directive('layoutDirective', layoutDirective);

    function layoutDirective(){
        let directiva ={
            restrict: 'EA',
            controller: layoutController,
            controllerAs: 'layout'
        };

        return directiva;
    }
    layoutController.inject = ['$http'];
    function layoutController($http){
        let layout = this;

        layout.hola = 'Hola';
        layout.pokeId = null;

        layout.getPokemon = function(){
            $http({
                method: 'POST',
                url: '/pokemon ',
                data: {
                    pokeId: layout.pokeId
                }
            }).then(postSuccess, postError);

            function postSuccess(response){
                layout.pokemon = response;
                console.log(response);
            }

            function postError(error){
                console.log(error);
            }
        }//Closing layout.getPokemon()


    }// Closing layoutController

})();