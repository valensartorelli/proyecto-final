// Declaraciones
let carrito = [];

let carouselItem = document.getElementById('carruDes')
let carouselItem2 = document.getElementById('carruDes2')


// Mostrar los productos destacados
// mostrarProductosDestacados(stockProductos.filter(x=> x.destacado == true))
let arrayN = stockProductos.filter(x=> x.destacado == true)
mostrarProductosDestacados(arrayN.splice(0,4))

function mostrarProductosDestacados(arrayProductosDestacados) {
     
    arrayProductosDestacados.forEach(item => {
        //console.log(item);
        let otroDiv = document.createElement('div');
        otroDiv.classList.add('novedad')
        otroDiv.setAttribute('id', `prod${item.id}`)

        otroDiv.innerHTML += `
                <a href="detalle-prod.html">
                    <figure>
                        <img src="${item.img}" class="d-block w-100" alt="${item.nombre}" class="img-fluid">
                    </figure>
                    <div class="prod-info">
                        <div class="section">${item.categoria}</div>
                        <h4>${item.nombre}</h4>
                        <div class="precio">$${item.precio}</div>
                    </div>
                </a>
        `
        carouselItem.appendChild(otroDiv) 

        let capturar = document.getElementById(`prod${item.id}`)
        capturar.addEventListener('click', ()=>{
            let prod = stockProductos.find(x=> x.id == item.id)
            localStorage.setItem('producto', JSON.stringify(prod))
        })
    });
}

destacados(arrayN)

function destacados(arrayN) {
    //console.log(arrayN);
    arrayN.forEach(item => {
        //console.log(item);
        let otroDiv = document.createElement('div');
        otroDiv.classList.add('novedad')
        otroDiv.setAttribute('id', `prod${item.id}`)

        otroDiv.innerHTML += `
                <a href="detalle-prod.html">
                    <figure>
                        <img src="${item.img}" class="d-block w-100" alt="Buzo canguro Star bicolor WeByte" class="img-fluid">
                    </figure>
                    <div class="prod-info">
                        <div class="section">${item.categoria}</div>
                        <h4>${item.nombre}</h4>
                        <div class="precio">$${item.precio}</div>
                    </div>
                </a>
        `
        carouselItem2.appendChild(otroDiv) 

        let capturar = document.getElementById(`prod${item.id}`)
        capturar.addEventListener('click', ()=>{
            let prod = stockProductos.find(x=> x.id == item.id)
            localStorage.setItem('producto', JSON.stringify(prod))
        })
    });
}
                                   