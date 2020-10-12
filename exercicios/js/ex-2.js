document.getElementById('ex-2-calcular').addEventListener('click', function(){
    const nome = document.getElementById('ex-2-nome'),
        salario = document.getElementById('ex-2-salario'),
        resultado = document.getElementById('ex-2-resultado'),
        aumento = 0.10;

    let salarioInicial = 0, salarioAtualizado = 0, resultadoHTML = 'O Salário deve ser maior que zero';

    if ( nome.value == '' ) {
        resultadoHTML = 'Preencha o nome do funcionário';
    } else if ( salario.value != '' ) {
        salarioInicial = salario.value;
        salarioInicial = parseFloat(salarioInicial.replace('.', '').replace(',','.'));

        salarioAtualizado = salarioInicial + (salarioInicial * aumento);
        salarioAtualizado = Math.round(salarioAtualizado * 100) / 100;

        if ( salarioAtualizado > 0 ) {
            resultadoHTML = ''
                + '<strong>Nome:</strong> ' + nome.value + '<br>'
                + '<strong>Salário inicial:</strong> ' + salarioInicial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<br>'
                + '<strong>Salário atualizado:</strong> ' + salarioAtualizado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<br>';
        }
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});

// formatação monetária básica
document.getElementById('ex-2-salario').addEventListener('blur', function(){
    let formataSalario = ( this.value == "" ) ? 0.00 : parseFloat(this.value.replace('.', '').replace(',','.'));
    this.value = formataSalario.toLocaleString('pt-br', {minimumFractionDigits: 2});

    return true;
});
