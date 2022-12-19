const menuLinksMobile = document.querySelector('.menuLinksMobile');
const menu = document.querySelector('.menu-line');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');


menu.addEventListener('click',toggleMenu);


function toggleMenu(){
    menuLinksMobile.classList.toggle('hidden');
    menuLinksMobile.classList.toggle('flex');
    
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');
}