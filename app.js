


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


});