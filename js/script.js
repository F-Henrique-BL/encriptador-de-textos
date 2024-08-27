const digiteTexto = document.getElementById ("digiteTexto");
const botaoCriptografar = document.getElementById ("botaoCriptografar");
const botaoDescriptografar = document.getElementById ("botaoDescriptografar");
const botaoCopiar = document.getElementById ("botaoCopiar");
const paragrafoFinal = document.getElementById ("paragrafoFinal");
const direitaImagem = document.getElementById ("direitaImagem");
const informacaoFinal = document.getElementById ("informacaoFinal");
const direita = document.getElementById ("direita");

let substituir = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

const mudar = (novoValor) => {
    paragrafoFinal.innerHTML = novoValor;

    digiteTexto.value="";
    direitaImagem.classList.add("oculto");
    informacaoFinal.style.display = "none";
    botaoCopiar.style.display = "block";
    direita.classList.add("ajustar");
    paragrafoFinal.classList.add("ajustar");

}

function reset() {
    paragrafoFinal.innerHTML = "";
    direitaImagem.classList.remove("oculto");
    informacaoFinal.style.display = "block";
    botaoCopiar.style.display = "none";
    direita.classList.remove("ajustar");
    paragrafoFinal.classList.remove("ajustar");
    digiteTexto.focus();
}

botaoCriptografar.addEventListener("click", () =>{
    const texto = digiteTexto.value.toLowerCase()
    function encriptar(newText) {
        for (let i = 0; i < substituir.length; i++){
            if (newText.includes(substituir[i][0])) {
                newText = newText.replaceAll(substituir[i][0], substituir[i][1]);
            };
        };
        return newText
    };
    mudar(encriptar(texto));       
});

botaoDescriptografar.addEventListener("click", () => {
    const texto = digiteTexto.value.toLowerCase()
    function descriptografar(newText) {
        for (let i = 0; i < substituir.length; i++){
            if (newText.includes(substituir[i][1])){
                newText = newText.replaceAll(substituir[i][1], substituir[i][0]);
            };
        };
        return newText
    }
    mudar(descriptografar(texto));
});

botaoCopiar.addEventListener("click", () => {
    let texto = paragrafoFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    reset();    
})

document.getElementById("digiteTexto").addEventListener("input", function(event) {
    var textarea = event.target;
    var text = textarea.value;
    var regex = /[A-ZÁ-Úá-úÀ-Ùà-ùÃ-Õã-õÂ-Ûâ-ûÄ-Üä-ü]/g;
    if (regex.test(text)) {
        alert("Por favor, digite apenas letras minúsculas e sem acento.");
        textarea.value = text.replace(regex, "");
    }
});