$(document).ready(function(){
    // var part1 = $(".part-1"), part2= $(".part-2"), part3= $(".part-3");
    
    // primerBoton = $("[data-contactar]");
    // formulario  = $(".contact-form");

    // primerBoton.on("click", function(){
    //     part1.addClass("part-hidden");
    //     part2.removeClass("part-hidden");
    //     // part1.hide(500);
    //     // part2.show(500);
    // })

    // formulario.on("submit",function(e){
    //     e.preventDefault();
    //     part2.addClass("part-hidden");
    //     part3.removeClass("part-hidden");
    //     // part2.hide(500);
    //     // part3.show(500);
    // })


    // Opcion2
    var slickContainer = $('.part-container');
    slickContainer.slick({
        dots: false,
        arrows:false,
        speed: 500,
        adaptiveHeight:true,
        fade: true,
        cssEase: 'linear',
        draggable:false
      });

      primerBotonpart = $("[slick-contactar]");
      formulario = $(".slick-contact-form");
      
      primerBotonpart.on("click",function(){
            console.log("Aca");
            slickContainer.slick("slickGoTo",1)
      })

      formulario.on("submit",function(e){
            e.preventDefault();
            // $.ajax({
                // url:"/",
                // type:"get",
                // data:formulario.serialize(),
                // error:function(errors){
                    // Mostrarías los errores de validación desde el backend
                    // console.error(errors)
                // },
                // success:function(data){
                    // Cuando la url a la que pega ajax devuelve 200
                    // if(data.success){
                        slickContainer.slick("slickGoTo", 2);
                    // }
                // }
            // });
      })

      inputs = formulario.find(".form-control");
      console.log(inputs);
      inputs.on("blur",function(){
          console.log($(this));
            if($(this).val().length){
                // Tiene info
                $(this).addClass("filled")
            }else{
                // No tiene info
                $(this).removeClass("filled")
  
            }
      })
})

// document.querySelector
// $ => document
// $(".row").first()
// $(".row").get()
// $("#parking")
// $("[parking]")
// $("input[name=email]")
// $("input[name=email]").val()