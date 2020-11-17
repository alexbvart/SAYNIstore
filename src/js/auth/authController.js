const objAuth = new Authentication()


var swgoogle = document.getElementById('startWithGoogle'),
    swfacebook = document.getElementById('startWithGoogle');
    /* swnumber = document.getElementById('startWithNumber') */

swgoogle.addEventListener('click',function(){
    objAuth.startWithGoogle()
});

swfacebook.addEventListener('click',function(){

});