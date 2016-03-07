(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('LancamentoService', LancamentoService);

    LancamentoService.$inject = ['$http'];

    function LancamentoService($http) {

        var service = {
            getLancamentos: getLancamentos
        };
        return service;

        function getLancamentos() {
            return $http.get('http://localhost/ControleEquipe/rest-api/lancamentos');
        }
    }

}());
