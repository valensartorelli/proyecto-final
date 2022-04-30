// Declaraciones
let carritoDeCompras = []

const detalleProducto = document.getElementById('detalleProducto');
const descripcionAmpliada = document.getElementById('descAmpliada');
const breadCrumb = document.getElementById('rutas');
const contenedorCarrito = document.getElementById('carrito-contenedor');

let producto = localStorage.getItem('producto');
let esteProducto = JSON.parse(producto);

const {id, nombre, categoria, descripcion, descAmpliada, precio, img, destacado} = esteProducto;

let boton = document.getElementById('addCart');
let numero = 0;

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('circle');
const precioTotal = document.getElementById('precioTotal');


// Logica de mi e-commerce

// Mostrar los productos
detalleProdu(stockProductos)

function detalleProdu(){
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
                <li>${categoria}</li>
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
        <div class="pd_tit-categoria">Indumentaria para ${categoria}</div>
        <div class="pd_producto-img">
            <div class="pd_prod-left"><img src="${img}" alt="${nombre}"></div>
            <div class="pd_prod-rigt">
                <h1>${nombre}</h1>
                <p>${descripcion}</p>
                <p class="pd_prod-precio">$${precio}</p>
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
        <p>${descripcionAmpliada}</p>
    `
    descripcionAmpliada.appendChild(otroDiv)

    //
    let btnAgregar = document.getElementById('addCart')

    btnAgregar.addEventListener('click',()=>{
        console.log(id);
        agregarAlCarrito(id)
    })

}


// Agregar al carrito
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

// Mostrar carrito
function mostrarCarrito(productoAgregar) {
    let li = document.createElement('li')

    li.className = 'list-group-item';
    li.innerHTML=`
                    <p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(li)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
           btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
            }
        

    })
}

// Actualizar carrito
function actualizarCarrito() {
    //contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}

// Recuperar
function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
 
    if(recuperarLS){
        recuperarLS.forEach(el=> {
            mostrarCarrito(el)
            carritoDeCompras.push(el)
            actualizarCarrito()
        })
    }
}

recuperar()