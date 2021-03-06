// Declaraciones
let carrito = [];
let stockProductos =[]
let carouselItem = document.getElementById('carruDes')
let carouselItem2 = document.getElementById('carruDes2')
fetch('js/stock.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(el=>{
        stockProductos.push(el)
    })
   let arrayN =  data.filter(x=> x.destacado == true)
   mostrarProductosDestacados(arrayN.splice(0,4))
   destacados(arrayN)
   recuperar()
});

// Mostrar los productos destacados
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


function destacados(arrayN) {
    arrayN.forEach(item => {
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