document.getElementById('ex-8-iniciar').addEventListener('click', function(){
    const resultado = document.getElementById('ex-8-resultado');
    let contador = 0, soma = 0, numerosInformados = '', resultadoHTML = '';

    while ( contador < 20 ) {
        let promptNumero = prompt(
            "Número #" + (contador+1) + ":\nInforme um valor entre 0 e 1000"
        );

        promptNumero = ( promptNumero != null || promptNumero != '' ) ? parseFloat(promptNumero) : false;

        if ( ! promptNumero || promptNumero < 0 || promptNumero > 1000 ) {
            numerosInformados = numerosInformados + 'Número #' + (contador+1) + ': ' + (promptNumero||'-') + '<br>';
            resultadoHTML = 'Número #' + contador + ' inválido, reinicie o processo<br><br>' + numerosInformados;
            break;
        }

        promptNumero = parseInt(promptNumero);

        numerosInformados = numerosInformados + 'Número #' + (contador+1) + ': ' + promptNumero + '<br>';
        soma = promptNumero + soma;
        contador++;
    }

    if ( contador == 20 ) {
        resultadoHTML = ''
            + '<strong>Somatório:</strong> ' + soma + '<br><br>'
            + numerosInformados
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
