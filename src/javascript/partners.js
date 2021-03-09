$(document).ready(function(){
    bartarjeta = $('.bar-tarjeta')
    tarjeta = $(".tarjeta");
    tarjeta.hover(
        function() {
          $( this ).addClass( "t-hover" );
        }, function() {
          $( this ).removeClass( "t-hover" );
        }
      );
})
