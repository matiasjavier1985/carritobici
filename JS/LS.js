/*
const guardar = document.getElementById("guardar")
const mostrar= document.getElementById("mostrar")
const borrar= document.getElementById("borrar")
const mostrarinput= document.getElementById("mostrarinput")


function crearls(){
    const ingreso = document.getElementById("ingreso");
    localStorage.setItem("ingreso", ingreso.value); 
}
function mostrarls(){
    mostrarinput.innerHTML= localStorage.getItem("ingreso")
}
function borrarls(){
    localStorage.removeItem("ingreso")
    mostrarinput.innerHTML=``
}
guardar.addEventListener("click",crearls)
mostrar.addEventListener("click",mostrarls)
borrar.addEventListener("click",borrarls)
//recorrer el storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    console.log("clave: "+clave+" valor: "+localStorage.getItem(clave));
}

//JSON
const product={nombre: "Fideos",precio: 300}
//obj a json
const aJON = JSON.stringify(product)

localStorage.setItem("producto", aJON)

// json a obj

let deJsonaObj = JSON.parse(localStorage.getItem("producto"))

console.log(deJsonaObj);
console.log(deJsonaObj.nombre);
console.log(deJsonaObj.precio);

bike.push(bike)
console.log(carrito);
*/