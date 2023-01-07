const pintarCarrito= ()=>{
    modalbody.innerHTML=""
    carrito.forEach((product)=>{
        let modalbody = document.createElement("div");
        modalbody.className="modal-body"
        modalbody.innerHTML=`
            <img src="${product.img} class="d-inline-block">    
            <h6 class="card-title ps-1">${product.brand}</h3>
            <h6 class ="card-title ps-1">${product.model}</h5>
            <p class="card-text">$ ${product.price}</p>
            `
    modalcontainer.append(modalbody)

    let eliminar = document.createElement("span")
    eliminar.innerHTML= "BORRAR"
    eliminar.style.cursor="pointer"
    eliminar.className="btn btn-danger"
    modalcontainer.append(eliminar)
    eliminar.addEventListener("click", eliminarproducto)
    });

    const total = carrito.reduce((acc,totalprecio) => acc + totalprecio.price,0);
    
    const totalbuying = document.createElement("div");
    totalbuying.className= "modal-footer";
    totalbuying.innerHTML =`Total:$ ${total}`
    modalbody.append(totalbuying)
};
vercarrito.addEventListener("click",pintarCarrito)

const eliminarproducto=()=>{

  const foundID = carrito.find((element)=> element.id);

  carrito=carrito.filter((carritoID)=>{
     return carritoID !== foundID
  });

  pintarCarrito()
};