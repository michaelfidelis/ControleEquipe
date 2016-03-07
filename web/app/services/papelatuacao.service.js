(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('PapelAtuacaoService', PapelAtuacaoService);

    PapelAtuacaoService.$inject = ['$http'];

    function PapelAtuacaoService($http) {

        var service = {
            getPapeisAtuacao: getPapeisAtuacao
        };
        return service;

        function getPapeisAtuacao() {
            return $http.get('http://localhost/ControleEquipe/rest-api/papeisAtuacao');
        }
    }

}());
