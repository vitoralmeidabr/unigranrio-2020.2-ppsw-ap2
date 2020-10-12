document.getElementById('ex-11-iniciar').addEventListener('click', function(){
    const resultado = document.getElementById('ex-11-resultado');
    let resultadoHTML = '';

    for (let i = 2; i <= 100; i = i+2) {
        resultadoHTML = resultadoHTML + '<strong>' + i + ' ao quadrado</strong> = ' + (i * i).toLocaleString('pt-br') + '<br>';
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
