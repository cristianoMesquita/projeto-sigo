app.controller('novaOcorrenciaCtrl', function($scope,alunoOcorrencia,alunoAPI){
	//$scope.alunosOcorrencia = alunoOcorrencia.data.result;
	$scope.ocorrenciaAlunosEnvolvidos = [];
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = alunoAPI.tableOrder($scope.direcaoDaOrdenacao);
	};
    $scope.addAlunoOcorrencia = function(ocorrencia){
    	//delete $scope.alunoOcorrencia;
    	$scope.criterioDeBusca = "";
    	$scope.alunosOcorrencia = alunoOcorrencia.data.result;
        if($scope.ocorrenciaAlunosEnvolvidos.length > 0){
            //TODO
        }
        $('#alunoOcorrenciaModal').modal("show");//verificar se existe problema em usar jquery para a chamada da modal
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