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

console.log("popup");


var avatarImg = document.getElementById('avatarImg'),
    popupLogout = document.getElementById('popup-logout');

avatarImg.addEventListener('click',function(){
    popupLogout.classList.toggle('active');
    console.log("presionar la foto");
});
