//Declaraciones
let carrito = [];

const productos = document.querySelector('.prod');
const detalleProducto = document.querySelector('.detalleProducto');
let stockProductos =[]
fetch('js/stock.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(el=>{
        stockProductos.push(el)
    })
   mostrarProductos(data)
   recuperar()
});


function mostrarProductos(array) {
    productos.innerHTML = '';
    array.forEach(item =>  {
        let div = document.createElement('div');
        div.classList.add('col-md-3', 'col-sm-6', 'col-xs-12')
        div.setAttribute('id', `prod${item.id}`)

        div.innerHTML += `
                <article>
                    <a href="detalle-prod.html"> 
                        <img src="${item.img}" alt="${item.nombre}" class="pd_img-list">
                    </a>
                    <div class="pd_main-article">
                        <p class="pd_categoria">${item.categoria}</p>
                        <p class="pd_descripciones">
                            <a href="detalle-prod${item.id}.html">${item.nombre}</a>
                        </p>
                        <p class="pd_precios">$${item.precio}</p>
                    </div>
                </article>
        `
        productos.appendChild(div) 

        let capturar = document.getElementById(`prod${item.id}`)
        capturar.addEventListener('click', ()=>{
            let prod = stockProductos.find(x=> x.id == item.id)
            localStorage.setItem('producto', JSON.stringify(prod))
        })
        
    })
}