let ubicacionPrincipal = window.pageYOffset; //0

//animación de las cajas
  AOS.init();

// todo el codigo del if- sirve para el scrol, cuando se vea el contenido de abajo (en esta parte no se ve el menu) al regresar un poco hacia arriba aparezca el menu
window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menú en celular > 

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

// el color abre menu
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        //color del icono (barras) sera al principio de color negro
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
          //color del icono (barras) sera color blanco cuando este en celulares porque la pantalla es mas pequeña y se abrira con los efectos de color azul
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})