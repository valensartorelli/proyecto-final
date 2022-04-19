// Declaraciones
let carritoDeCompras = []
const detalleProducto = document.getElementById('detalleProducto');
const descAmpliada = document.getElementById('descAmpliada');
const breadCrumb = document.getElementById('rutas');
let producto = localStorage.getItem('producto');
let esteProducto = JSON.parse(producto);




// Mostrar info producto
detalleProdu(stockProductos)

function detalleProdu(array){
    breadCrumb.innerHTML = ""
    detalleProducto.innerHTML= ""
    descAmpliada.innerHTML = ""

    let linkRuta = document.createElement('div')
    linkRuta.classList.add('container')
    linkRuta.classList.add('link-ruta')

    linkRuta.innerHTML += `
        <nav>
            <ul>
                <li><a href="index.html"><strong>Home</strong></a></li>
                <li>/</li>
                <li>${esteProducto.categoria}</li>
                <li>/</li>
                <li><a href="#">Indumentaria</a></li>   
            </ul>
        </nav>
    `
    breadCrumb.appendChild(linkRuta);

    
    let div = document.createElement('div')
    div.classList.add('producto')
  
    div.innerHTML += `
        <div class="pd_tit-categoria">Indumentaria para ${esteProducto.categoria}</div>
        <div class="pd_producto-img">
            <div class="pd_prod-left"><img src="${esteProducto.img}" alt="${esteProducto.nombre}"></div>
            <div class="pd_prod-rigt">
                <h1>${esteProducto.nombre}</h1>
                <p>${esteProducto.descripcion}</p>
                <p class="pd_prod-precio">$${esteProducto.precio}</p>
                <label for="color" class="pd_label">Elegir Color</label>
                <select name="color" id="color" placeholder="Seleccione un Color">
                    <option value="Negro">Negro</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Rojo">Rojo</option>
                    <option value="Azul">Azul</option>
                </select>
                <br><br><br>
                <label for="talles" class="pd_label">Elegir Talle</label>
                <div class="radio-talles">
                    <input type="radio" name="talle" id="S">
                    <label for="S" class="label-talle">S</label>
                    <input type="radio" name="talle" id="M">
                    <label for="M" class="label-talle">M</label>
                    <input type="radio" name="talle" id="L">
                    <label for="L" class="label-talle">L</label>
                    <input type="radio" name="talle" id="XL">
                    <label for="XL" class="label-talle">XL</label>
                </div>
                <div class="guias">
                    <div class="guia-left">
                        <a href="#">
                            <i class="pe-7s-bookmarks"></i> 
                            Guía de talles
                        </a>
                    </div>
                    <div class="guia-right">
                        <a href="#">
                            <i class="pe-7s-box1"></i> 
                            Envíos y cambios
                        </a>
                    </div>
                </div>
                <button type="button" id="addCart" class="pd_gl-cta pd_gl-cta--primary pd_gl-cta__content">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    `
    detalleProducto.appendChild(div)



    let otroDiv = document.createElement('div')
    otroDiv.classList.add('desc-ampliada')
    
    otroDiv.innerHTML += `
        <h2>Detalle del Producto</h2>
        <p>${esteProducto.descAmpliada}</p>
    `
    descAmpliada.appendChild(otroDiv)

}




let boton = document.getElementById('addCart');
let bolsa = document.querySelector('.fa-shopping-bag');
let notificacion = document.getElementById('circle');
let numero = 0;

// Notificacion en la bolsa del header
boton.addEventListener('click', addNotificacion)
// function addNotificacion() {
//     console.log(numero);
//     notificacion.classList.add('notificacion');
//     numero += 1
//     if (numero >= 1) {
//         notificacion.innerText = numero
//     }
// }
function addNotificacion(e) {
	let algo;
	algo = notificacion
    algo.classList.add('notificacion')

	console.log(algo)
}


