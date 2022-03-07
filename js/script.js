const botaoMobile = document.getElementById('menuMobile');

function ativarMenu(event){
    if(event.type==='touchstart') event.preventDefault();
    
    const nav = document.getElementById('nav');  
    nav.classList.toggle('active')

}

botaoMobile.addEventListener('click', ativarMenu);
botaoMobile.addEventListener('touchstart', ativarMenu);
