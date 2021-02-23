// let burger = document.querySelector('.burger');
// let cross = document.querySelector('.close');
// let menu = document.querySelector('.side-nav');

// burger.addEventListener('click', function(){
//     menu.style.transform = 'translateX(0%)';
// })
// cross.addEventListener('click', function(){
//     menu.style.transform = 'translateX(-200%)';
// })


var burger =  $(".burger") //document.querySelector('.burger');
var cross =  $(".close") //document.querySelector('.close');
var menu =  $(".side-nav") //document.querySelector('.side-nav');

function toggleMenu()
{
    menu.toggleClass("opened");
}

burger.on("click", toggleMenu);
cross.on("click", toggleMenu);

// burger.on("click",() => {
//     menu.addClass("opened");
//     // menu.style.transform = 'translateX(0%)';
// });

// cross.on("click", () => {
//     menu.removeClass("opened");
//     // menu.style.transform = 'translateX(-200%)';
// })
