//validando e-mail 

$(document).ready(function (event) {
    $('#erro').hide();
    $('#email').blur(function (event) {
        var _email = $('.infobox').val();
        if (validar_email(_email)) {
            $('#erro').hide();
            $('.enviar').click(function(){
                alert("Enviado com sucesso!")
                event.preventDefault();
                
            })
        }
        else {
            $('#erro').show();
           
        }
        
    });
});
function validar_email(email) {
    var padrao = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return padrao.test(email);
}

//API CEP
const cep = $("#cep")
const button = $("#botao")
const endereco = $("#endereco")
const cidade = $("#cidade")
const email = $("#email")
const estado = $("#uf")
const bairro = $("#bairro")
const nome = $("#nome")
const rg = $("#rg")
const senha = $("#senha")
const confirmeSenha = $("#confirmeSenha")

cep.on("change", function (event) {
    const busca = cep.val() 
    $.getJSON(`https://viacep.com.br/ws/${busca}/json/`, ( dados ) => {
    
    endereco.val (dados.logradouro);
    bairro.val(dados.bairro);
    cidade.val(dados.localidade);
    estado.val(dados.uf);

})})

button.on("click", function (event) {
    event.preventDefault()
    if (email.val() != '' && nome.val() != '' && cep.val() != '' && rg.val() != '' && senha.val() != '' && confirmeSenha.val() != '' ) { 
    } else {
        alert ("Preencha os campos!")
    }
    
})

