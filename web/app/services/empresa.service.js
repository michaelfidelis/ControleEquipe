(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('EmpresaService', EmpresaService);

    EmpresaService.$inject = ['$http'];

    function EmpresaService($http) {

        var service = {
            getEmpresas: getEmpresas
        };
        return service;

        function getEmpresas() {
            return $http.get('http://localhost/ControleEquipe/rest-api/empresas');
        }
    }

}());
