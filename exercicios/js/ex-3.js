document.getElementById('ex-3-calcular').addEventListener('click', function(){
    const numeroA = document.getElementById('ex-3-numero-a'),
        numeroB = document.getElementById('ex-3-numero-b'),
        resultado = document.getElementById('ex-3-resultado');
    let c = 0, calculo = 0, resultadoHTML;

    if ( numeroA.value == numeroB.value ) {
        calculo = parseInt(numeroA.value) + parseInt(numeroA.value);
        c = calculo;
        resultadoHTML = ''
            + 'Os números são iguais!<br><br>'
            + '<strong>Soma:</strong> ' + calculo + '<br>'
            + '<strong>Variável "c":</strong> ' + c
    } else {
        calculo = parseInt(numeroA.value) * parseInt(numeroA.value);
        c = calculo;
        resultadoHTML = ''
            + 'Os números são diferentes!<br><br>'
            + '<strong>Multiplicação:</strong> ' + calculo + '<br><br>'
            + '<strong>Variável "c":</strong> ' + c
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
