const navlinks=document.querySelector('.nav-links')

function ontoggleMenu (e){
    
    e.name= e.name === 'menu'? 'close' : 'menu'
    navlinks.classList.toggle('myClass');
}