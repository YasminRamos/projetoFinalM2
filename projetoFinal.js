//validando e-mail 

$(document).ready(function () {
    $('#erro').hide();
    $('#email').blur(function (event) {
        var _email = $('.infobox').val();
        if (validar_email(_email)) {
            $('#erro').hide();
            $('.submit').click(function(){
                alert("Mensagem enviada com sucesso!")
            })
        }
        else {
            $('#erro').show();
            event.preventDefault();
        }
    });
});
function validar_email(email) {
    var padrao = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    return padrao.test(email);
}
