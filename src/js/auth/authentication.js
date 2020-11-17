console.log("authentication");
/* class Authentication{ */
/* headerNav */
var   overley = document.getElementById('overley'),
        popup = document.getElementById('popup'),
        popupLogout = document.getElementById('popup-logout');

var header__nav =document.getElementById('header__nav');


var avatarImg = document.getElementById('avatarImg');
var displayName = document.getElementById('displayName');
    
const btnCloseSesion = document.getElementById('btn-close-sesion');

const swgoogle = document.getElementById('startWithGoogle'),
    swfacebook = document.getElementById('startWithFacebook');


/* Log Out */
btnCloseSesion.addEventListener('click',e =>{
    auth.signOut()
        .then(result => {
            /* cerrar las ventanas modales */
            overley.classList.remove('active');
            popup.classList.remove('active');
            popupLogout.classList.remove('active');
        })
        .catch(error=>{
            console.error(error);
        })
});


/*     Google login */
swgoogle.addEventListener('click',()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            /* header__nav.innerHTML=`
            <img 
                class="circular-image logged-in"
                id="avatarImg "
                src="${result.user.photoURL}" 
                alt="${result.user.displayName}" >
            `; */
/*             avatarImg.attr('src',result.user.photoURL)
            avatarImg.attr('alt',result.user.displayName)
            displayName.innerHTML=" jose ${result.user.displayName}" */
        })
        .catch(error=>{
            console.error(error);
        })

});


/*     Facebook login */
swfacebook.addEventListener('click',()=>{
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
    .then(result => {
/*         avatarImg.attr('src',result.user.photoURL)
        avatarImg.attr('alt',result.user.displayName)
        displayName.innerHTML="{result.user.displayName}" */
    })
    .catch(error=>{
        console.error(error);
    })
});
