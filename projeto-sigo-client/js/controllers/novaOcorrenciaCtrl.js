app.controller('novaOcorrenciaCtrl', function($scope,alunoOcorrencia,alunoAPI){
	$scope.ocorrenciaAlunosEnvolvidos = [];
    $scope.alunosOcorrencia = alunoOcorrencia.data.result;
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = alunoAPI.tableOrder($scope.direcaoDaOrdenacao);
	};
    $scope.addAlunoOcorrencia = function(ocorrencia){
    	$scope.criterioDeBusca = "";
        $('#alunoOcorrenciaModal').modal("show");
    };
    $scope.alunoSelecionadoOcorrencia = function(alunosOcorrencia) {

         $scope.alunosOcorrencia = alunosOcorrencia.filter(function(aluno) {
            if (aluno.selecionado){
                $scope.ocorrenciaAlunosEnvolvidos.push(aluno);
                console.log($scope.ocorrenciaAlunosEnvolvidos);
            }
            else{
                return aluno;
            }
        });
    };
});