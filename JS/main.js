let carrito= JSON.parse(localStorage.getItem("carrito"))||[];

let searchbike= document.getElementById("searchbike");


function filtrarbike(filtro) {
  let filtrado = bike.filter((bici) => {
    return bici.brand.includes(filtro.toUpperCase());
  });
  return filtrado;
}

const shopcontent = document.getElementById("shopcontent");
const vercarrito = document.getElementById("vercarrito")
const modalcontainer=document.getElementById("modalbody")
const cantcarrito= document.getElementById("cantcarrito")

function crearhtml(bike){
  shopcontent.innerHTML=``
  bike.forEach(product => {
      content= document.createElement("div");
      content.className="card d-inline-block m-2"
      content.innerHTML=`
                              <img class="card-img-top" src="${product.img}">    
                              <h4 class="card-title text-light bg-danger">${product.brand}</h3>
                              <h6 class ="card-title">${product.model}</h5>
                              <p class="card-text">$ ${product.price}</p>
                              `
      let comprar = document.createElement("button");
      comprar.innerText="COMPRAR";
      comprar.className="btn btn-primary m-1 shadow"
      shopcontent.appendChild(content)
      content.appendChild(comprar)

  comprar.addEventListener("click",()=>{

      const repeat = carrito.some((repeatproduct)=> repeatproduct.id === product.id);

        if (repeat){
          carrito.map((prod)=>{
            if(prod.id === product.id){
              prod.amount++
            }
          });
        }else{
        carrito.push({
          id:product.id,
          brand:product.brand,
          model:product.model,
          price:product.price,
          amount: product.amount,
          img:product.img        
        });    
      }
      totalgastado() 
      guardarLS()
      amountcarrito()

      }) 
  });
}
crearhtml(bike)

let selectbrand = document.getElementById("selectbrand")
searchbike.addEventListener("input",()=>{
  let filtro= filtrarbike(searchbike.value)
  console.log(filtro);
  crearhtml(filtro)
});

bike.forEach((bicis) => {
  let option = document.createElement("option");
  option.value =bicis.brand;
  option.innerText =bicis.brand;
  selectbrand.appendChild(option);
});

btnborrarselect = document.getElementById("borrarselect")

btnborrarselect.addEventListener("click",()=>{
  crearhtml(bike)
})


selectbrand.addEventListener("change", () => {
  let opcion = selectbrand.options[selectbrand.selectedIndex].value;
  let filtro= selectbike(opcion)
  crearhtml(filtro)
  
});

function selectbike(filtro) {
  let filtrado = bike.filter((bici) => {
    return bici.model.includes(filtro);
  });
  return filtrado;
}
//LocalStorage
//setitem
const guardarLS = ()=>{
  localStorage.setItem("carrito", JSON.stringify(carrito))
}
//getitem

