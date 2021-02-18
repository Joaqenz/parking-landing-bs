let burger = document.querySelector('.burger');
let cross = document.querySelector('.close');
let menu = document.querySelector('.side-nav');

burger.addEventListener('click', function(){
    menu.style.transform = 'translateX(0%)';
})
cross.addEventListener('click', function(){
    menu.style.transform = 'translateX(-200%)';
})