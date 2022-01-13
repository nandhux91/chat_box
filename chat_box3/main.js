const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const chatheadBtn = document.querySelector('.close');
// const submitBtn =document.querySelector('.submit');


chatBtn.addEventListener('click',()=>{
    popup.classList.toggle('show')
})

