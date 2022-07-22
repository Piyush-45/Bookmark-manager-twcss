const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#menu-btn')
const logo = document.getElementById('logo')

// event listners for hamburger

menuBtn.addEventListener('click', navToggle);

function navToggle(){
    menuBtn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if(menu.classList.contains('flex')){
        logo.setAttribute('src', '/images/logo-bookmark-white.png')
    }
    else{
        logo.setAttribute('src', '/images/logo-bookmark.svg')
    }

}

