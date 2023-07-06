function girar(){
    document.querySelector(".girar").classList.toggle("loop")
}

function generarGato(){
    document.querySelector(".contenedor").innerHTML += '<div class="circulo"></div>'
}