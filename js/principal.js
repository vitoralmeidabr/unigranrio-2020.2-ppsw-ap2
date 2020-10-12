// função para incluir arquivo HTML do exercício
var obtemHTML = function(arquivo, selector) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            const responseHTML = xhr.responseText;
            let child = document.createElement('div');
            child.innerHTML = responseHTML;
            document.getElementById(selector).prepend( child);

            inputMaxValue();
            obtemJS(arquivo.replace(/html/g, 'js'));
        }
    };

    xhr.open('GET', arquivo);
    xhr.send();
};

// função para incluir arquivo JS do exercício
var obtemJS = function(arquivo) {
    var s = document.createElement('script')
    s.src = arquivo;
    document.body.appendChild(s);
}

// função para o evento de input para evitar números maiores que os permitido no input[max=x]
var redefineInputMaxValue = function(e) {
    const max = parseInt(this.max);
    if (parseInt(this.value) > max) {
        this.value = max;
    }
};

// função para mapear os input
var inputMaxValue = function(){
    let numeros = document.getElementsByTagName("input");
    for(var i = 0; i < numeros.length; i++)
    {
        if ( numeros[i].hasAttribute('max') ) {
            numeros[i].removeEventListener('input', redefineInputMaxValue);
            numeros[i].addEventListener("input", redefineInputMaxValue);
        }
    }

};

(function() {
    // configura plugin de code style
    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
        //'break-lines': 80,
        //'indent': 2,
        'remove-initial-line-feed': false,
        //'tabs-to-spaces': 4,
        'spaces-to-tabs': 4
    });

    const exercicios = [1,2,3,4,5,6,8,9,10,11];
    for (let i = 0; i < exercicios.length; i++) {
        obtemHTML('exercicios/html/ex-' + exercicios[i] + '.html', 'ex-' + exercicios[i] + '-html');
    }
}());
