const pintarCarrito= ()=>{
    modalbody.innerHTML=""
    carrito.forEach((product)=>{
        let modalbody = document.createElement("div");
        modalbody.className="modal-body"
        modalbody.innerHTML=`
        <img class="card-img-top" src="${product.img}">    
            <h6 class="card-title ps-1 d-inline-block ">${product.brand}</h3>
            <h6 class ="card-title ps-1 d-inline-block">${product.model}</h5>
            <p class="card-text d-inline-block">Cant.: ${product.amount}</p>
            <p class="card-text"><strong>$</strong> ${product.price}</p>
            <p class="badge bg-success">Sub-Total: $ ${product.amount * product.price}</p>
            `
    modalcontainer.append(modalbody)
    console.log(carrito.length);
    let img= document.createElement("img")
    img.setAttribute("src", product.img)
    let eliminar = document.createElement("div")
    eliminar.innerHTML= "X"
    eliminar.style.cursor="pointer"
    eliminar.className="btn btn-danger d-inline-block"
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
  amountcarrito()
  totalgastado()  
  pintarCarrito()
};

const amountcarrito=()=>{
  cantcarrito.className="translate-middle badge rounded-pill bg-danger"
  cantcarrito.innerHTML= carrito.length;
}
const totalgastado=()=>{
  const total = carrito.reduce((acc,totalprecio) => acc + totalprecio.price * totalprecio.amount,0); 
  totalmoney.innerHTML=`$ ${total}`
}