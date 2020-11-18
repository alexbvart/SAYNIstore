
/* headerNav */
var     overley = document.getElementById('overley'),
        popup = document.getElementById('popup'),
        popupLogout = document.getElementById('popup-logout');

/* Elementos a cargar imagenes y nombres */
var avatarImg = document.getElementById('avatarImg'),
    displayName = document.getElementById('displayName'),
    avatarImgPop = document.getElementById('avatarImg-pop'),
    displayNamePop = document.getElementById('displayName-pop');
    

/* sesiones */
const   btnCloseSesion = document.getElementById('btn-close-sesion');

const   swgoogle = document.getElementById('startWithGoogle'),
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

            avatarImg.alt= result.user.displayName
            avatarImg.src= result.user.photoURL
            displayName.innerHTML=`${result.user.displayName}`

            avatarImgPop.alt= result.user.displayName
            avatarImgPop.src= result.user.photoURL 
            displayNamePop.innerHTML=`${result.user.displayName}` 
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
        avatarImg.alt= result.user.displayName
        avatarImg.src= result.user.photoURL
        displayName.innerHTML=`${result.user.displayName}` 

        avatarImgPop.alt= result.user.displayName
        avatarImgPop.src= result.user.photoURL
        displayNamePop.innerHTML=`${result.user.displayName}` 
    })
    .catch(error=>{
        console.error(error);
    })
});
