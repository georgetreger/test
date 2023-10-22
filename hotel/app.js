const hall = [
     {
       id: 1,
       img: './images/hall2.jpg',
       text: "ceremonies",
     },
     {
       id: 2,
       
       img: './images/hall3.jpg',
       text: 'after deck.',
     },
     {
       id: 3,
       
       img: './images/hall4.jpg',
       text: 'garden hall.',
     },
     {
       id: 4,
       
       img: './images/hall5.jpg',
       text: ' corporate event. ',
     },
   ];


const faEl = document.querySelector('.fa-bars');

const menuEl = document.querySelector('.menu-links')
  const searchEl = document.querySelector('.search-fa')

  const search = document.querySelector('.search')

  const textEl = document.querySelector('.text');
  const imgEl = document.querySelector('.hall-mg');
  
  const chevronLeft = document.querySelector('.fa-chevron-left');
  const chevronRight = document.querySelector('.fa-chevron-right');
        
                  // fa-left and fa-right //
   const faLeft = document.querySelector('.fa-left');
   const faRight = document.querySelector('.fa-right');
     const aboutEl = document.querySelector('.about')

             // A & //

            const questions = document.querySelectorAll('.question')
                        
                            questions.forEach((question)=>{
                                   const btn = question.querySelector('.question-btn');
                                     btn.addEventListener('click', ()=>{
                                          question.classList.toggle('show-text')
                                     })   
                            })
                        
     //   button-fa // 
faEl.addEventListener('click', ()=>{
     menuEl.classList.toggle('show-menu')
})

searchEl.addEventListener('click', ()=>{
     search.style.display = 'block'
})

           // fa-left and fa-right //
     faLeft.addEventListener('click', ()=>{
      // aboutEl.style.transform = "translate(-2%)"    
     })
     faRight.addEventListener('click', ()=>{
            
           
     })

                 
     
//    event //

let currentItem = 0;

 window.addEventListener('DOMContentLoaded', ()=>{
     showContent()
 })

    function showContent(){
     const Item = hall[currentItem];
     imgEl.src = Item.img;
     textEl.textContent = Item.text
    }


      chevronLeft.addEventListener('click', function(){
            currentItem--;
            if (currentItem < 0){
                currentItem = hall.length -1;
            }
              showContent()
      })

      chevronRight.addEventListener('click', function(){
            currentItem++;
            if (currentItem > hall.length -1){
               currentItem = 0;
            }
               
              showContent()
      })