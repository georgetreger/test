const hall = [
     {
       id: 1,
       name: '',
       img: 'https://www.course-api.com/images/people/person-1.jpeg',
       text: " ",
     },
     {
       id: 2,
       name: '',
       img: 'https://www.course-api.com/images/people/person-2.jpeg',
       text: '.',
     },
     {
       id: 3,
       name: '',
       img: 'https://www.course-api.com/images/people/person-4.jpeg',
       text: ' .',
     },
     {
       id: 4,
       name: '',
       img: 'https://www.course-api.com/images/people/person-3.jpeg',
       text: ' . ',
     },
   ];


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
