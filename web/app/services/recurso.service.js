(function () {
    'use strict';
    angular.module('ControleEquipeApp').factory('RecursoService', RecursoService);

    RecursoService.$inject = ['$http'];

    function RecursoService($http) {

        var service = {
            getRecursos: getRecursos
        };
        return service;

        function getRecursos() {
            return $http.get('http://localhost/ControleEquipe/rest-api/recursos');
        }
    }

}());
