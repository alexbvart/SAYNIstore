console.log("main");



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
        console.log('sign in');

    } else {
        console.log('sign out');   
    }
})