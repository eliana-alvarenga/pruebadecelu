 const btn_hamburguesa = document.querySelector('.menu')
const menu_hamburguesa = document.querySelector('.menudenav')
 
 btn_hamburguesa.addEventListener('click' , (e) =>{
    menu_hamburguesa.classList.toggle('btn-visible')
 })