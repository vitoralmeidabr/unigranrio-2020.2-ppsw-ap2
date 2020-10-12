document.getElementById('ex-4-calcular').addEventListener('click', function(){
    const precoProduto = document.getElementById('ex-4-preco-produto'),
        parcelas = document.getElementById('ex-4-parcelas'),
        resultado = document.getElementById('ex-4-resultado');
    let precoProdutoAVista = 0, precoProdutoParcelado, parcela = 0, resultadoHTML = '';

    precoProdutoAVista = precoProduto.value;
    precoProdutoAVista = precoProdutoAVista != '' ? parseFloat(precoProdutoAVista.replace('.', '').replace(',','.')) : 0;

    if ( precoProdutoAVista > 0 ) {
        if ( parcelas.value == 3 ) {
            precoProdutoParcelado = precoProdutoAVista + ( precoProdutoAVista * 0.10 );
        } else if ( parcelas.value == 5 ) {
            precoProdutoParcelado = precoProdutoAVista + ( precoProdutoAVista * 0.20 );
        } else {
            precoProdutoParcelado = precoProdutoAVista;
        }
        parcela = precoProdutoParcelado / parseInt(parcelas.value);
        parcela = Math.round(parcela * 100) / 100;

        resultadoHTML = ''
            + '<strong>Preço Produto à Vista:</strong> ' + precoProdutoAVista.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<br>'
            + '<strong>Pagamento:</strong> ' + ( ( parcelas.value > 1 ) ? 'Parcelado' : 'À Vista' );

        if ( parcelas.value > 1 ) {
            resultadoHTML = resultadoHTML
            + '<br><strong>Nº Parcelas:</strong> ' + parcelas.value + '<br>'
            + '<strong>Valor Parcela:</strong> ' + parcela.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<br>'
            + '<strong>Total Parcelado:</strong> ' + precoProdutoParcelado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + '<br>';
        }

    } else {
        resultadoHTML = 'Informe o valor do produto';
    }

    resultado.innerHTML = resultadoHTML;
    resultado.style.display = 'block';
});

// formatação monetária básica
document.getElementById('ex-4-preco-produto').addEventListener('blur', function(){
    let formataPreco = ( this.value == "" ) ? 0.00 : parseFloat(this.value.replace('.', '').replace(',','.'));
    this.value = formataPreco.toLocaleString('pt-br', {minimumFractionDigits: 2});

    return true;
});
