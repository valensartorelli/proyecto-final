const header = document.getElementById('header')

header.innerHTML = `<div class="color-top">
<div class="container d-flex">
    <div class="copy-header">
        <marquee scrolldelay=200>
            6 cuotas sin interés - Envíos gratis a partir de $5000
        </marquee>
    </div>
    <nav>
        <ul>
            <li><a href="#">Ayuda </a></li>
            <li>|</li>
            <li><a href="login.html"> Iniciar Sesión </a></li>
        </ul>
    </nav>
</div>
</div>
<div class="cont-logo-xs">
<a href="/">
    <img src="img/logo-weByte.png" alt="" class="logo header-logo-xs">
</a>
</div>

<!-- Menu mobile -->
<div class="header-top-bar">
<!-- / burguer menu -->
<nav role="navigation">
    <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
    
        <ul id="menu">
            <a href="index.html"><li><img src="img/logo-weByte.png" alt="" style="width: 55px; text-align: left;"></li></a>
            <a href="nosotros.html"><li>Sobre Nosotros</li></a>
            <a href="como-comprar.html"><li>¿Cómo Comprar?</li></a>
            <a href="listado.html"><li>Productos</li></a>
        </ul>
    </div>
</nav>
<!-- / burguer menu -->

<div class="header-logo">
    <a href="index.html">
        <img src="img/logo-weByte.png" alt="" class="logo">
    </a>
</div>

<nav class="main-navbar">
    <ul>
        <li>
            <a href="register.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Registrate">
                <i class="fas fa-user"></i>
            </a>
        </li>
        <li>
            <i class="fas fa-shopping-bag"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Carrito"></i>
            <span id="circleMob" class=""></span>
        </li>
        <!-- <li class="add-prod">
            <a href="/product/add">
                <i class="fas fa-folder-plus"></i>
            </a>
        </li> -->
    </ul>
    <!-- <ul class="nav">
        <li class="menu"><a href=""><img src="/avatars/<%= locals.userLogged.avatar %>" style="border-radius: 100%;" class="avatar-xs"></a>
          <ul>
              <li><a href="/users/profile">Mi perfil</a></li>
              <li><a href="/admin">Administrador</a></li>
              <li><a href="/users/logout">Logout</a></li>               
          </ul>
      </li>
    </ul> -->
</nav>
</div>
<!-- Fin Menu mobile -->

<!-- Menu desktop -->
<div class="header-top-bar-desktop">
<div class="container d-flex">
    <div class="header-logo-desk">
        <a href="index.html">
            <img src="img/logo-weByte.png" alt="" class="logo">
        </a>
    </div>
    <nav class="main-navbar-left">
        <ul>
            <li><a href="nosotros.html">Sobre Nosotros</a></li>
            <li>|</li>
            <li><a href="como-comprar.html">¿Cómo Comprar?</a></li>
            <li>|</li>
            <li><a href="listado.html">Productos</a></li>
            <li>|</li>
        </ul>
    </nav>
    <nav class="main-navbar">
        
        <ul>
            <li>
                <a href="register.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Registrate">
                    <i class="fas fa-user"></i>
                </a>
            </li>
            <li>
                <button class="bolsa" data-bs-toggle="modal" data-bs-target="#modalCarrito">
                    <i id="bolsaCompra" class="fas fa-shopping-bag" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Carrito"></i>
                    <span id="circle" class="notificacion">0</span>
                </button>
            </li>
            <li id="clima">

            </li>
        </ul> 
    </nav>
</div>
</div>`

let carritoDeCompras = []

let temperatura = 19;
let clima = document.getElementById('clima')
temperatura > 25 ? clima.innerHTML += `<i class="fas fa-temperature-high"></i> ` + temperatura + '&deg;' : clima.innerHTML += `<i class="fas fa-temperature-low"></i>` + temperatura + '&deg;'

const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('circle');



// Mostrar carrito
function mostrarCarrito(productoAgregar) {
    if (carritoDeCompras.length == 0){
        let li = document.createElement('li')

        li.className = 'list-group-item';
        li.innerHTML=`
            <p>El carrito esta vacio</p>
        `
        contenedorCarrito.appendChild(li)
        
    } else {
        let li = document.createElement('li')

        li.className = 'list-group-item';
        li.innerHTML=`
                        <p>${productoAgregar.nombre}</p>
                        <p>Precio: $${productoAgregar.precio}</p>
                        <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `   
        contenedorCarrito.appendChild(li)
        
    }
    

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
            Swal.fire({
                title: 'Atencion',
                text: 'Estas seguro que quieres eliminar este producto?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then((result) => {
                if(result.isConfirmed) {
                    btnEliminar.parentElement.remove()
                    carritoDeCompras = carritoDeCompras.filter(item=> item.id != productoAgregar.id)
                    actualizarCarrito()
                    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
                }
            });
        } else{
            Swal.fire({
                title: 'Atencion',
                text: 'Estas seguro que quieres eliminar este producto?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then((result) => {
                if(result.isConfirmed) {
                    productoAgregar.cantidad = productoAgregar.cantidad - 1
                    document.getElementById(`und${productoAgregar.id}`).innerHTML =` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
                    actualizarCarrito()
                    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
                }
            });
            
        }
    })
}

// Actualizar carrito
function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
}

function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    
    if(recuperarLS){
        recuperarLS.forEach(el=> {
        
            carritoDeCompras.push(el)
            mostrarCarrito(el)
            actualizarCarrito()
        })
    }
}