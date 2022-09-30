


$(document).ready(function(){
   
    /* EVENTO CLICK */

    /* Primero hay que detectar el click:*/

    var parrafo = $('#resultado p');

    $('.btn-primary').click(function(){
    parrafo.addClass('display-4')
    })

    $('.btn-danger').click(function(){
    parrafo.removeClass('display-4')
    })

    /* OTGGLE es una palabra reservada OJO! */
    $('.btn-warning').click(function(){
      parrafo.toggleClass('display-4');
      
    })



/* INVENTO MIO */
/* quiero que al darle al boton se escriba un parrago h1 */

$('.alerta').click(function(){

  alert('coño')
  $('.alerta').append('<h1>me cago en todo</h1>');
  $('.alerta').append('<h1>he añadido un H1 con appen!</h1>');


})



});