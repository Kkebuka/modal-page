const openModal = document.querySelector('.open');
const modalDiv = document.querySelector('.modal-open');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click',function(){
    modalDiv.style.visibility = 'visible';
})

closeModal.addEventListener('click',function(){
    modalDiv.style.visibility = 'hidden';
})
