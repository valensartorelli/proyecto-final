let modal = document.getElementById('modal');

function mostrarModal() {
    modal.innerHTML += `
        <div class="modal fade" id="modalCarrito" tabindex="-1" aria-labelledby="modalCarritoLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalCarritoLabel">Carrito</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="card modal-body">
                        <ul class="list-group list-group-flush" id="carrito-contenedor">
                        </ul>
                    </div>
                    <p class="precioProducto">Precio total: $<span id="precioTotal">0</span></p>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

mostrarModal();

