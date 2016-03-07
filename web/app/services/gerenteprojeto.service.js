(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('GerenteProjetoService', GerenteProjetoService);

    GerenteProjetoService.$inject = ['$http'];

    function GerenteProjetoService($http) {

        var service = {
            getGerentesProjeto: getGerentesProjeto
        };
        return service;

        function getGerentesProjeto() {
            return $http.get('http://localhost/ControleEquipe/rest-api/gerentesProjeto');
        }
    }

}());
