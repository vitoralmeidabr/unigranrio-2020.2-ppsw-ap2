document.getElementById('ex-5-calcular').addEventListener('click', function(){
    const nome = document.getElementById('ex-5-nome'),
        notas = document.getElementsByClassName('ex-5-notas'),
        resultado = document.getElementById('ex-5-resultado');
    let soma = 0, media = 0, resultadoHTML = '';

    if ( nome.value == '' ) {
        resultadoHTML = 'Preencha o nome do aluno';
    } else {
        for(var i = 0; i < notas.length; i++)
        {
            soma += parseInt(notas[i].value||0);
        }

        media = soma / notas.length;
        media = Math.round(media * 10) / 10;
        resultadoHTML = ''
            + '<strong>Aluno:</strong> ' + nome.value + '<br><br>'
            + '<strong>Média:</strong> ' + media + '<br>'
            + '<strong>Situação:</strong> ' + (( media >= 8 ) ? 'Aprovado' : 'Reprovado');
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
