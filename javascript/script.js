function validar() {

    var formValido = true;

    var nome = document.getElementById("nome");
    var spanNome = document.getElementById("spanNome");

    var fone = document.getElementById("fone");
    var spanFone = document.getElementById("spanFone");

    var idade = document.getElementById("idade");
    var spanIdade = document.getElementById("spanIdade")

    var email = document.getElementById("email");
    var spanEmail = document.getElementById("spanEmail");

    var valor = document.getElementById("valor");
    var spanValor = document.getElementById("spanValor")

    var spanPag = document.getElementById("spanPag");

    var radio;

    spanNome.textContent = "";
    spanFone.textContent = "";
    spanIdade.textContent = "";
    spanEmail.textContent = "";
    spanValor.textContent = "";

    if (nome.value == "") {
        spanNome.textContent = 'Nome obrigatório';
        formValido = false;
    }

    if (fone.value == "") {
        spanFone.textContent = 'Telefone obrigatório';
        formValido = false;
    }

    if (idade.value == "") {
        spanIdade.textContent = 'Idade Invalida';
        formValido = false;
    }

    if (email.value == "") {
        spanEmail.textContent = 'Email obrigatório';
        formValido = false;
    }

    if (valor.value == "") {
        spanValor.textContent = 'Valor invalido';
        formValido = false;
    }

    if ((!document.getElementById('pix').checked) && (!document.getElementById('boleto').checked) && (!document.getElementById('cd').checked) && (!document.getElementById('cc').checked)) {
        spanPag.textContent = 'Selecione uma das opções acima!';
        formValido = false;
    }else{
        document.getElementById("spanPag").style.display = 'none';
    }


    if (formValido) {


        const radios = document.getElementsByName('button');
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                radio = radios[i].value
                break;
            }
        }

        document.getElementById("doacao").textContent = 'Formulario de Doação'
        document.getElementById("d1").textContent = `Nome: ${nome.value}`;
        document.getElementById("d2").textContent = `Telefone: ${fone.value}`;
        document.getElementById("d3").textContent = `Idade: ${idade.value}`;
        document.getElementById("d4").textContent = `Email: ${email.value}`;
        document.getElementById("d5").textContent = `Valor: ${valor.value}`;
        document.getElementById("d6").textContent = `Area para Doação: `;
        if (document.getElementById('elegante').checked) {
            document.getElementById("d6").textContent += document.getElementById("elegante").value;
        }
        if (document.getElementById('gifa').checked) {
            document.getElementById("d6").textContent += ' ' + document.getElementById("gifa").value;
        }
        if (document.getElementById('golira').checked) {
            document.getElementById("d6").textContent += ' ' + document.getElementById("golira").value;
        }
        if (document.getElementById('mufasa').checked) {
            document.getElementById("d6").textContent += ' ' + document.getElementById("mufasa").value;
        }
        if (document.getElementById('riconeronte').checked) {
            document.getElementById("d6").textContent += ' ' + document.getElementById("riconeronte").value;
        }
        document.getElementById("d7").textContent = `Metodo de Pagamento: ${radio}`;
        $("#modal-mensagem").modal();
    }
}

function resetar(){
    document.getElementById("formulario").reset();
}