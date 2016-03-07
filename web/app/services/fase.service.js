(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('FaseService', FaseService);

    FaseService.$inject = ['$http'];

    function FaseService($http) {

        var service = {
            getFases: getFases
        };
        return service;

        function getFases() {
            return $http.get('http://localhost/ControleEquipe/rest-api/fases');
        }
    }

}());
