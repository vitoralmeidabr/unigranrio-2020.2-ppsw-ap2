document.getElementById('ex-6-iniciar').addEventListener('click', function(){
    const numeroUm = document.getElementById('ex-6-numero-1'),
        numeroDois = document.getElementById('ex-6-numero-2'),
        selecao = document.getElementById('ex-6-selecao'),
        resumo = document.getElementById('ex-6-resumo'),
        resultado = document.getElementById('ex-6-resultado');
    let promptNumeroUm, promptNumeroDois, promptSelecao, tipoCalculo, calculo = 0, resultadoHTML = '';

    resumo.style.display = 'none';
    resultado.style.display = 'none';

    promptNumeroUm = prompt(
        "Número #1\nInforme um valor entre 0 e 1000"
    );
    promptNumeroUm = ( promptNumeroUm != null || promptNumeroUm != '' ) ? parseFloat(promptNumeroUm.replace(",", ".")) : false;

    if ( ! promptNumeroUm || promptNumeroUm < 0 || promptNumeroUm > 1000 ) {
        resultadoHTML = 'Número #1 inválido';
    } else {
        numeroUm.value = promptNumeroUm;

        promptNumeroDois = prompt(
            "Número #2\nInforme um valor entre 0 e 1000"
        );
        promptNumeroDois = ( promptNumeroDois != null || promptNumeroDois != '' ) ? parseFloat(promptNumeroDois.replace(",", ".")) : false;

        if ( ! promptNumeroDois || promptNumeroDois < 0 || promptNumeroDois > 1000 ) {
            resultadoHTML = 'Número #2 inválido'
        } else {
            numeroDois.value = promptNumeroDois;

            promptSelecao = parseInt(prompt(
                "Por favor, agora escolha uma opção entre:\n1 - Somar\n2 - Multiplicar\n3 - Dividir #1 por #2"
            ));

            if ( ! promptSelecao || promptSelecao < 1 || promptSelecao > 3 ) {
                resultadoHTML = 'Opção escolhida é inválida';
            } else {
                selecao.value = promptSelecao;
                resumo.style.display = 'flex';

                switch (promptSelecao) {
                    case 1:
                        tipoCalculo = 'Somar';
                        calculo = promptNumeroUm + promptNumeroDois;
                        break;
                    case 2:
                        tipoCalculo = 'Multiplicar';
                        calculo = promptNumeroUm * promptNumeroDois;
                        break;
                    case 3:
                        tipoCalculo = 'Dividir #1 por #2';
                        calculo = promptNumeroUm / promptNumeroDois;
                        calculo = Math.round(calculo * 100) / 100;
                        break;
                }

                resultadoHTML = ''
                    + '<strong>Tipo do cálculo:</strong> ' + tipoCalculo + '<br>'
                    + '<strong>Resultado do cálculo:</strong> ' + calculo;

            }
        }
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
