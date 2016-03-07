(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('ProjetoService', ProjetoService);

    ProjetoService.$inject = ['$http'];

    function ProjetoService($http) {

        var service = {
            getProjetos: getProjetos
        };
        return service;

        function getProjetos() {
            return $http.get('http://localhost/ControleEquipe/rest-api/projetos');
        }
    }

}());
