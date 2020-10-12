document.getElementById('ex-1-calcular').addEventListener('click', function(){
    const numeros = document.getElementsByClassName('ex-1-numeros'),
        resultado = document.getElementById('ex-1-resultado');
    let soma = 0, media = 0, resultadoHTML = 'O Salário deve ser maior que zero';

    for(var i = 0; i < numeros.length; i++)
    {
        soma += parseInt(numeros[i].value||0);
    }


    if ( soma >= 0 ) {
        media = soma / numeros.length;
        media = Math.round(media * 100) / 100;
        resultadoHTML = ''
            + '<strong>Soma:</strong> ' + soma + '<br><br>'
            + '<strong>Média aritmética:</strong> ' + media;
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
