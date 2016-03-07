(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('CelulaService', CelulaService);

    CelulaService.$inject = ['$http'];

    function CelulaService($http) {

        var service = {
            getCelulas: getCelulas
        };
        return service;

        function getCelulas() {
            return $http.get('http://localhost/ControleEquipe/rest-api/celulas');
        }
    }

}());
