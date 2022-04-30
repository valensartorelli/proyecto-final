//Declaraciones
let carrito = [];

const productos = document.querySelector('.prod');
const detalleProducto = document.querySelector('.detalleProducto');



// Mostrar los productos
mostrarProductos(stockProductos)

function mostrarProductos(array) {
    productos.innerHTML = '';

    array.forEach(element => {

        let div = document.createElement('div');
        div.classList.add('col-md-3', 'col-sm-6', 'col-xs-12')
        div.setAttribute('id', `prod${element.id}`)

        div.innerHTML += `
                <article>
                    <a href="detalle-prod.html"> 
                        <img src="${element.img}" alt="${element.nombre}" class="pd_img-list">
                    </a>
                    <div class="pd_main-article">
                        <p class="pd_categoria">${element.categoria}</p>
                        <p class="pd_descripciones">
                            <a href="detalle-prod${element.id}.html">${element.nombre}</a>
                        </p>
                        <p class="pd_precios">$${element.precio}</p>
                    </div>
                </article>
        `
        productos.appendChild(div) 

        let capturar = document.getElementById(`prod${element.id}`)
        capturar.addEventListener('click', ()=>{
            let prod = stockProductos.find(x=> x.id == element.id)
            localStorage.setItem('producto', JSON.stringify(prod))
        })
    });
}