console.log("authentication");
/* class Authentication{ */

var avatarImg = document.getElementById('avatarImg');
var displayName = document.getElementById('displayName');
    
/*     function startWithGoogle(){
        const provider = new firebaseConfig.authDomain.GoogleAuthProvider()
        firebaseConfig.auth().singInWithPopup(provider)
        .then(result => {
            avatarImg.attr('src',result.user.photoURL)
            avatarImg.attr('alt',result.user.displayName)
            displayName.innerHTML="{result.user.displayName}"
        })
        .catch(error=>{
            console.error(error);
        })
    }; */
/* } */


/* const objAuth = new Authentication() */


var swgoogle = document.getElementById('startWithGoogle'),
    swfacebook = document.getElementById('startWithFacebook');


/*     Google login */
swgoogle.addEventListener('click',()=>{
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(result => {
            avatarImg.attr('src',result.user.photoURL)
            avatarImg.attr('alt',result.user.displayName)
            displayName.innerHTML=" jose ${result.user.displayName}"
        })
        .catch(error=>{
            console.error(error);
        })

});

swfacebook.addEventListener('click',()=>{
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
    .then(result => {
        avatarImg.attr('src',result.user.photoURL)
        avatarImg.attr('alt',result.user.displayName)
        displayName.innerHTML="{result.user.displayName}"
    })
    .catch(error=>{
        console.error(error);
    })
});





auth.onAuthStateChanged(user => {

    
    if (user) {
        console.log('sign in ... dentro');
        loginCheck(user);
        headerNav.innerHTML=
        `
        <img 
                class="circular-image"
                id="avatarImg"
                src="https://lh3.googleusercontent.com/a-/AOh14Gj7w-zVx8L6cQB3L6j8Rpe7YkyZOaI-RcruLNGi=s96-c" 
                alt="foto de perfil">
        `;
/*         btnOpenPopup.innerHTML="Ingresa" */

    } else {
        console.log('sign out ... fuera');   
        
        loginCheck(user);
    }
})
