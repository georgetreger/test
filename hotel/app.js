const faEl = document.querySelector('.fa-bars');

const menuEl = document.querySelector('.menu-links')
  const searchEl = document.querySelector('.search-fa')

  const search = document.querySelector('.search')
         
faEl.addEventListener('click', ()=>{
     menuEl.classList.toggle('show-menu')
})

searchEl.addEventListener('click', ()=>{
     search.style.display = 'block'
})
