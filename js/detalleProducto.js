// Declaraciones
const detalleProducto = document.getElementById('detalleProducto');
const descripcionAmpliada = document.getElementById('descAmpliada');
const breadCrumb = document.getElementById('rutas');


let producto = localStorage.getItem('producto');
let esteProducto = JSON.parse(producto);

const {id, nombre, categoria, descripcion, descAmpliada, precio, img, destacado} = esteProducto;

let boton = document.getElementById('addCart');
let numero = 0;

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const precioTotal = document.getElementById('precioTotal');



breadCrumb.innerHTML = ""
detalleProducto.innerHTML= ""
descripcionAmpliada.innerHTML = ""

// Agrego la seccion del breadcrumb
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

// Agrego la seccion Descripcion de producto
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
            <button type="button" id="addCart" class="pd_gl-cta pd_gl-cta--primary pd_gl-cta__content" >
                Agregar al Carrito
            </button>
        </div>
    </div>
`
detalleProducto.appendChild(div)

// Agrego la seccion Descripcion ampliada
let otroDiv = document.createElement('div')
otroDiv.classList.add('desc-ampliada')

otroDiv.innerHTML += `
    <h2>Detalle del Producto</h2>
    <p>${esteProducto.descAmpliada}</p>
`
descripcionAmpliada.appendChild(otroDiv)

//
let btnAgregar = document.getElementById('addCart')

btnAgregar.addEventListener('click',()=>{
    console.log(id);
    agregarAlCarrito(id)
})

//Agregar al carrito
function agregarAlCarrito(id) {
    let yaEsta = carritoDeCompras.find(item=> item.id == id)
    
    if(yaEsta){
        yaEsta.cantidad = yaEsta.cantidad + 1
        document.getElementById(`und${yaEsta.id}`).innerHTML =` <p id=und${yaEsta.id}>Und:${yaEsta.cantidad}</p>`
        actualizarCarrito()
    }else{
    let productoAgregar = stockProductos.find(elemento => elemento.id == id)
        
        productoAgregar.cantidad = 1
        
        carritoDeCompras.push(productoAgregar)
        
        actualizarCarrito()

        mostrarCarrito(productoAgregar) 
    }
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}