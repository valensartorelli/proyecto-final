const footer = document.getElementById('footer');

footer.innerHTML = `<section>
<div class="container lgrey">
    <div class="ico-contactenos">
        <a href="https://api.whatsapp.com/send?phone=5493416123456&text=Me contacto desde la web" target="_blank">
            <img src="img/ico-contacto.png" alt="" >
        </a>
    </div>
    <div class="logo-footer">
        <a href="index.html">
            <img src="img/logo-weByte.png" alt="WeByte Indumentaria deportiva" class="logo-xs"> 
        </a>
    </div>
    <nav class="main-navbar-bottom">
        <ul>
            <li><a href="nosotros.html">Sobre Nosotros</a></li>
            <li>|</li>
            <li><a href="como-comprar.html">¿Cómo Comprar?</a></li>
            <li>|</li>
            <li><a href="listado.html">Productos</a></li>
            <li>|</li>
            <li><a href="mailto:hola@webyte.com">Contactenos </a></li>
            <li>|</li>
        </ul>
    </nav>
    <nav class="main-navbar-social">
        <ul>
            <li class="ico-network">
                <a href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
            <li class="ico-network">
                <a href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                </a>
            </li>
            <li class="ico-network">
                <a href="https://www.youtube.com/" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
            </li>
            <li class="ico-network">
                <a href="https://www.twitter.com/" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
        </ul>
    </nav>
</div>
<div class="color-bottom dgrey">
    <div class="container d-flex">
        <p>Av Siempre Viva 742 - Springfield - 341 123 456</p>
        <p>Copyright 2021 - Todos los derechos reservados</p>
    </div>
</div>
</section>`