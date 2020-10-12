document.getElementById('ex-10-iniciar').addEventListener('click', function(){
    const resultado = document.getElementById('ex-10-resultado');
    let promptSelecao, soma = 0, numerosInformados = '', resultadoHTML = '';

    while (promptSelecao!=0) {
        promptSelecao = prompt("Bem vindo à lanchonete do Vitor !"
            + "\nEscolha entre as opções do nosso menu, caso deseje encerrar digite 0"
            + "\n100 - Cachorro Quente"
            + "\n101 - Bauru simples"
            + "\n102 - Bauru com ovo"
            + "\n103 - Hamburguer"
            + "\n104 - Cheeseburguer"
            + "\n105 - Refrigerante"
            + "\n0 - Finalizar"
        );

        console.log(promptSelecao);
        promptSelecao = ( promptSelecao != null || promptSelecao != '' ) ? parseFloat(promptSelecao) : false;

        promptSelecao = parseInt(promptSelecao);
        if ( promptSelecao === 0 ) {
            resultadoHTML = ''
                + '<strong>Pedido encerrado</strong><br><br>'
                + 'Itens do pedido:<br>'
                + numerosInformados + '<br>'
                + '<strong>Total do pedido:</strong> ' + soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        } else {
            if ( ! promptSelecao || promptSelecao < 100 || promptSelecao > 105 ) {
                alert('Informe uma opção válida.');
                continue
            }

            switch(promptSelecao)
            {
                case 100:
                    numerosInformados = numerosInformados + '1 Cachorro Quente - R$ 1,70<br>';
                    soma = soma + 1.70;
                    break;
                case 101:
                    numerosInformados = numerosInformados + '1 Bauru simples - R$ 2,30<br>';
                    soma = soma + 2.30;
                    break;
                case 102:
                    numerosInformados = numerosInformados + '1 Bauru com ovo - R$ 2,60<br>';
                    soma = soma + 2.60;
                    break;
                case 103:
                    numerosInformados = numerosInformados + '1 Hamburguer - R$ 2,40<br>';
                    soma = soma + 2.40;
                    break;
                case 104:
                    numerosInformados = numerosInformados + '1 Cheeseburguer - R$ 2,50<br>';
                    soma = soma + 2.50;
                    break;
                case 105:
                    numerosInformados = numerosInformados + '1 Refrigerante - R$ 1,00<br>';
                    soma = soma + 1.00;
                    break;
            }
        }
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});
