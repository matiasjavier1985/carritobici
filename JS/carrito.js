
const pintarCarrito= ()=>{
    modalbody.innerHTML=""
    btnfinalizar.attr('disabled', false);
    carrito.forEach((product)=>{
    let modalbody = document.createElement("div");
      modalbody.className="modal-body shadow  fondocarrito"
      modalbody.innerHTML=`
            <img class="img-thumbnail w-25 shadow" src="${product.img}">   
            <h6 class="card-title ps-1 d-inline-block">${product.brand}</h3>
            <h6 class ="card-title ps-1 d-inline-block">${product.model}</h5>
            <p class="card-text text-center"><strong>Precio: $</strong> ${product.price}</p>
            <button class="btn btn-warning d-inline-block restarproduct">➖</button>
            <p class="border rounded scard-text d-inline-block p-2">Cant: ${product.amount}</p>
            <button class="btn btn-warning d-inline-block sumarproduct">➕</button>
            <p class="badge bg-success">Sub-Total: $ ${product.amount * product.price}</p>
            `
    modalcontainer.append(modalbody)

    let restar = modalbody.querySelector(".restarproduct")
  
    restar.addEventListener("click",()=>{
      if(product.amount !==1){
         product.amount--
      }
      guardarLS()
      totalgastado()
      pintarCarrito()
    })
    let sumar = modalbody.querySelector(".sumarproduct")

    sumar.addEventListener("click",()=>{
      product.amount++
      guardarLS()
      totalgastado()
      pintarCarrito()
    })

    let eliminar = document.createElement("div")
    eliminar.innerHTML=`Eliminar Producto: ${product.brand}-${product.model}`
    eliminar.style.cursor="pointer"
    eliminar.className="btn btn-danger d-flex flex-row-reverse bd-highlight"
    modalcontainer.append(eliminar)
    eliminar.addEventListener("click", eliminarproducto)

  });
    const total = carrito.reduce((acc,totalprecio) => acc + totalprecio.price * totalprecio.amount,0);
    
    const totalbuying = document.createElement("div");
    totalbuying.className= "modal-footer";
    totalbuying.innerHTML =`🛒 Total a pagar:$ ${total}`
    modalbody.append(totalbuying)
  
};
vercarrito.addEventListener("click",pintarCarrito)

const eliminarproducto=()=>{
  const foundID = carrito.find((element)=> element.id);
  carrito=carrito.filter((carritoID)=>{
  return carritoID !== foundID;
  });

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: 'Producto eliminado'
  })

  totalgastado()
  pintarCarrito()
  guardarLS()
  amountcarrito()
//   Toastify({
//     text: "🚴Producto eliminado",
//     duration: 2000,
//     newWindow: true,
//     close: false,
//     gravity: "bottom", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//     background:"linear-gradient(to right, #ff416c, #ff4b2b);",
//     },
//     onClick: function(){} // Callback after click
//   }).showToast();
};
const amountcarrito=()=>{
  cantcarrito.className="translate-middle badge rounded-pill bg-danger"
  const carritolength = carrito.length
  localStorage.setItem("carritolength",JSON.stringify(carritolength));
  cantcarrito.innerText= localStorage.getItem("carritolength")
}

const totalgastado=()=>{
  const total = carrito.reduce((acc,totalprecio) => acc + totalprecio.price * totalprecio.amount,0); 
  const moneygastado= total
  localStorage.setItem("moneygastado",JSON.stringify(moneygastado))
  totalmoney.innerText = `$ ${localStorage.getItem("moneygastado")}`
}
const btnfinalizar= document.getElementById("btnfinalizarcompra")
btnfinalizar.addEventListener("click",()=>{
  Swal.fire({
    title: 'BIKESHOP',
    text: "Desea finalzar la Compra?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI'
  }).then((result) => {
    if (result.isConfirmed) {
    localStorage.removeItem("carrito")
    localStorage.removeItem("moneygastado")
    localStorage.setItem("carritolength", 0);
    modalbody.innerHTML=""
      Swal.fire(
        'Success',
        'Compra Exitosa',
      )
      setTimeout(function(){
        window.location.reload();
     }, 2000);
    }
  }) 
})

amountcarrito()



