(function () {
    'use strict';
    angular.module('ControleEquipeApp').controller('CadastroRecursoController', CadastroRecursoController);

    CadastroRecursoController.$inject = ['CelulaService', 'FaseService', 'GerenteProjetoService', 'ProjetoService'];

    function CadastroRecursoController(CelulaService, FaseService, GerenteProjetoService, ProjetoService) {
        var vm = this;

        vm.celulas = [];
        vm.fases = [];
        vm.gerentesProjeto = [];

        vm.getCelulas = getCelulas;
        vm.getFases = getFases;
        vm.getGerentesProjeto = getGerentesProjeto;

        vm.getCelulas();
        vm.getFases();
        vm.getGerentesProjeto();

        function getCelulas() {
            CelulaService.getCelulas().then(isSuccess, isError);

            function isSuccess(response) {
                vm.celulas = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as celulas.");
            }
        }

        function getFases() {
            FaseService.getFases().then(isSuccess, isError);

            function isSuccess(response) {
                vm.fases = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar as fases.");
            }
        }

        function getGerentesProjeto() {
            GerenteProjetoService.getGerentesProjeto().then(isSuccess, isError);

            function isSuccess(response) {
                vm.gerentesProjeto = response.data;
            }

            function isError(response) {
                console.log("Erro ao carregar os gerentes de projeto.");
            }
        }
    }
}());
