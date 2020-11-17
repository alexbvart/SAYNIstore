var btnOpenPopup = document.getElementById('btn-open-popup'),
    btnClosePopup = document.getElementById('btn-close-popup'),
    overley = document.getElementById('overley'),
    popup = document.getElementById('popup');

btnOpenPopup.addEventListener('click',function(){
    overley.classList.add('active');
    popup.classList.add('active');
});

btnClosePopup.addEventListener('click',function(){
    overley.classList.remove('active');
    popup.classList.remove('active');
});

console.log("Holas");