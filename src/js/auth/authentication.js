console.log("authentication");
/* class Authentication{ */

    avatarImg = document.getElementById('avatarImg');
    displayName = document.getElementById('displayName');
    
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
            displayName.innerHTML="{result.user.displayName}"
        })
        .catch(error=>{
            console.error(error);
        })

});

swfacebook.addEventListener('click',()=>{
    const provider = n
});