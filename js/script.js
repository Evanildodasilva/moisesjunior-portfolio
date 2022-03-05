const botaoMobile = document.getElementById('menuMobile');

function ativarMenu(){
    const nav = document.getElementById('nav');  
    nav.classList.toggle('active')

}

botaoMobile.addEventListener('click', ativarMenu);
