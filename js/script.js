var botaoCriptografia = document.getElementById('botao-criptografia');
var botaoDescriptografia = document.getElementById('botao-desciptografia');
var botaoCopiar = document.getElementById('botao-copiar');
var resultado = document.getElementById('saida');
var teste = document.getElementsByClassName('secao-resultado')

//Ocultar botao de copiar antes de criptografar/descriptografar
botaoCopiar.style.display = "none";

function criptografar() {

    var entrada = document.getElementById('entrada').value;
    var entradaCriptografada = entrada;

    entradaCriptografada = entradaCriptografada.replaceAll('e', 'enter');
    entradaCriptografada = entradaCriptografada.replaceAll('i', 'imes');
    entradaCriptografada = entradaCriptografada.replaceAll('a', 'ai');
    entradaCriptografada = entradaCriptografada.replaceAll('o', 'ober');
    entradaCriptografada = entradaCriptografada.replaceAll('u', 'ufat');

    mostrarResultado(entradaCriptografada);
}

function descriptografar() {

    var entradaCriptografada = document.getElementById('entrada').value;
    var entradaDescriptografada = entradaCriptografada;

    entradaDescriptografada = entradaDescriptografada.replaceAll('enter', 'e');
    entradaDescriptografada = entradaDescriptografada.replaceAll('imes', 'i');
    entradaDescriptografada = entradaDescriptografada.replaceAll('ai', 'a');
    entradaDescriptografada = entradaDescriptografada.replaceAll('ober', 'o');
    entradaDescriptografada = entradaDescriptografada.replaceAll('ufat', 'u');

    mostrarResultado(entradaDescriptografada);
}

function mostrarResultado(palavra) {

    //Revelar botao de copiar
    botaoCopiar.style.display = 'initial';

    //Estilo da area para exibir o resultado
    resultado.textContent = '';
    resultado.style.position = 'static';
    resultado.style.height = '80%';

    //Textarea usado para mostrar o resultado
    var areaResultado = document.createElement('textarea');
    areaResultado.setAttribute('id', 'resultado');
    areaResultado.readOnly = true;

    //Adcionar resultado no textarea
    areaResultado.innerHTML = palavra;
    
    //Adcionar textarea na página
    resultado.appendChild(areaResultado);
    areaResultado.style.height = ajustarAlturaDoResultado();
}

function ajustarAlturaDoResultado() {

    var altura = document.getElementById('resultado').scrollHeight;

    if(altura <= '500') {
        return altura + 'px';
    } else {
        return '500px';
    }
}

function copiarTexto() {

    let textoCopiado = document.getElementById('resultado');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

botaoCriptografia.onclick = criptografar;
botaoDescriptografia.onclick = descriptografar;
botaoCopiar.onclick = copiarTexto;