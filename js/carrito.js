recuperar()
let stockProductos =[]
let totalCarrito = document.getElementById('total_carrito');
let productoEnCarrito = document.getElementById('productoEnCarrito');
let resumenPedido = document.getElementById('resumen_pedido_carrito')

totalCarrito.innerHTML = `
    Cantidad de productos: ${carritoDeCompras.length}
`
carritoDeCompras.forEach( item => {
	let div = document.createElement('div');
    div.classList.add('producto-en-carro');

    div.innerHTML += `
    	<div class="prod-cart">
            <div class="prod-left">
                <img src="${item.img}" alt="${item.nombre}" >
            </div>
            <div class="prod-right">
                <p>${item.categoria}</p>
                <h1>${item.nombre}</h1>
                <p class="prod-color">Color: ${item.color}</p>
                <p class="prod-talle">Talle: ${item.talle}</p>
                <p class="prod-cantidad">Cantidad: ${item.cantidad}</p>  
                <p class="prod-precio">Precio: $${item.precio}</p>  
            </div>
        </div>
    `

    productoEnCarrito.appendChild(div) 

    let li = document.createElement('li');
    div.classList.add('resProd');

    li.innerHTML += `
        <span>${item.nombre}</span>
        <span>$${item.precio}</span>
    `

    resumenPedido.appendChild(li)
})