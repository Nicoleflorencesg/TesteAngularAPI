(function () {
    'use strict';
    var myModule = angular.module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {

        var sucessoCalBack = function (response) {
			var x2js = new X2JS();
            $scope.detalhes = x2js.xml_str2json(response.data);
        };

        var erroCalBack = function (response) {
            $scope.error = response.data;
        };

		//não está funcionando
        $scope.getAll = function (idusuario) {
            var config = {
                method: 'GET',
                url: 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/' + idusuario
            };
            $http(config).then(sucessoCalBack, erroCalBack);
        };

		
        //passando o parametro direto 
		
        $http({
            method: 'GET',
            params: { idusuario: 23970 },
            url: 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/23970'})
            .then(sucessoCalBack,erroCalBack);
        });



})();