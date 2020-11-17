var   overley = document.getElementById('overley'),
        popup = document.getElementById('popup'),
        popupLogout = document.getElementById('popup-logout');

/* nav__Header */


const  headerNav= document.querySelector('.header__nav');



/* Links */
const  outLinks= document.querySelectorAll('.logged-out');
const  inLinks = document.querySelectorAll('.logged-in');
console.log(outLinks);
console.log(inLinks);

const loginCheck = user => {
    if (user) {
        inLinks.forEach(link=> link.style.display='block');
        outLinks.forEach(link=> link.style.display='none');
    } else {
        inLinks.forEach(link=> link.style.display='none');
        outLinks.forEach(link=> link.style.display='block');
    }
}





/* Cargar categorias */
const itemCard = document.querySelector('.slide__item-card')
const slideList = document.querySelector('.slide')
const setupCategories = data =>{
    if (data.length) {
        let html = '';
        data.forEach(doc => {

            const category = doc.data()
     /*        console.log(category); */



            const li = `
                <li >
                    <a class="slide__item-card" href="src/pages/category.html">
                        <h3> 
                            ${category.titulo} 
                        </h3> 
                    </a>
                </li>
            `;
            html += li;

        });

        slideList.innerHTML=html;
    }else{
        slideList.innerHTML=`<p>Hola agente secreto, es momento de registrarse</p>`;
    }
}


/* Cargar foto de perfil y nombre de usuario */


/* popup para cerrar sesion */
var popupLogout = document.getElementById('popup-logout');






/* eventos */
/* Mostrar los datos solo si el usuario esta logeado */

/* evento que se dispara cuando el usuario entra o sale, si el objeto user existe entonces esta logeado */
auth.onAuthStateChanged(user => {
    fs.collection('category')
    .get()
    .then((snapshot)=>{
        console.log(snapshot.docs);
        setupCategories(snapshot.docs)
    })
    
    if (user) {
        console.log('sign in ... dentro');
        loginCheck(user);

        /* cerrar las ventanas modales */
        popupLogout.classList.remove('active'); 
        overley.classList.remove('active')
        popup.classList.remove('active')



    } else {
        console.log('sign out ... fuera');   
        loginCheck(user);
    }
})



/* PopUp */
/* const btnOpenPopup = document.getElementById('btn-open-popup'); */
