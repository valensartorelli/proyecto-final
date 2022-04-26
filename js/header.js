const header = document.getElementById('header')

header.innerHTML = `<div class="color-top">
<div class="container d-flex">
    <div class="copy-header">
        <marquee scrolldelay=200>
            6 cuotas sin interes - Envios gratis a partir de $5000
        </marquee>
    </div>
    <nav>
        <ul>
            <li><a href="#">Ayuda </a></li>
            <li>|</li>
            <li><a href="users/login"> Iniciar Sesión </a></li>
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
            <a href="listado-h.html"><li>Hombres</li></a>
            <a href="listado-m.html"><li>Mujeres</li></a>
            <a href="listado-n.html"><li>Niños</li></a>
            <a href="listado.html"><li>Ver todo</li></a>
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
            <a href="/users/add" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Registrate">
                <i class="fas fa-user"></i>
            </a>
        </li>
        <li>
            <a href="carrito.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Carrito">
                <i class="fas fa-shopping-bag"></i>
                <span id="circle" class=""></span>
            </a>
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
            <li><a href="listado-h.html">Hombres</a></li>
            <li>|</li>
            <li><a href="listado-m.html">Mujeres</a></li>
            <li>|</li>
            <li><a href="listado-n.html">Niños</a></li>
            <li>|</li>
            <li><a href="listado.html">Ver todo</a></li>
            <li>|</li>
        </ul>
    </nav>
    <nav class="main-navbar">
        
        <ul>
            <li>
                <a href="/users/add" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Registrate">
                    <i class="fas fa-user"></i>
                </a>
            </li>
            <li>
                <a href="carrito.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Carrito">
                    <i class="fas fa-shopping-bag"></i>
                    <span id="circle" class=""></span>
                </a>
            </li>
        </ul> 
    </nav>
</div>
</div>`




let boton = localStorage.getItem('boton')
let notificacion = document.getElementById('circle');
let numero = 0;

// Notificacion en la bolsa del header
boton.addEventListener('click', addNotificacion)

function addNotificacion() {
    notificacion.classList.add('notificacion');
    numero += 1
    if (numero >= 1) {
        notificacion.innerText = numero
    }
}