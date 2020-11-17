console.log("Holas");
class Authentication{

    avatarImg = document.getElementById('avatarImg');
    displayName = document.getElementById('displayName');
    
    startWithGoogle(){
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
    }
}