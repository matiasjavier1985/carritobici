
let carrito= []
const shopcontent = document.getElementById("shopcontent");
const vercarrito = document.getElementById("vercarrito")
const modalcontainer=document.getElementById("modalbody")

bike.forEach(product => {
    let content= document.createElement("div");
    content.className="card d-inline-block m-1"
    content.style="width: 15rem;"
     content.innerHTML=`
                            <img class="card-img-top" src="${product.img}">    
                            <h4 class="card-title">${product.brand}</h3>
                            <h6 class ="card-title">${product.model}</h5>
                            <p class="card-text">$ ${product.price}</p>
                        
                            `
    let comprar = document.createElement("button");
    comprar.innerText="COMPRAR";
    comprar.className="btn btn-dark m-1"
    shopcontent.append(content)
    content.append(comprar)
 
    comprar.addEventListener("click",()=>{
      carrito.push({
        id:product.id,
        brand:product.brand,
        model:product.model,
        price:product.price
      })
      console.log(carrito);
    })   
});
