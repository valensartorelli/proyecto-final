recuperar()

let btnPagar = document.getElementById('finCompra');

btnPagar.addEventListener('click',()=>{
    Swal.fire({
        title: 'Gracias',
        text: 'Tu compra se realizo con exito',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Ok'
    }).then((result) => {
        if(result.isConfirmed) {
            localStorage.clear() 
            window.location.replace("index.html");
        }
    });
    
})