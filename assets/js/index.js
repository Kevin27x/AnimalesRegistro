import {Leon, Lobo, Oso, Serpiente, Aguila} from "./Subclases.js";

//Variables protegidas con IIFE
//"imagenPreview": Almacena la última imagen del evento "change" en select. 
//"listaRegistrados": arreglo que almacena todos los objetos de animales registrados.
const variablesInicio = (()=>{
    var imagenPreview;
    var listaRegistrados = [];
    return {
        imagenPreview,
        listaRegistrados
    }
})();

//FUNCIONES------------------
//Función asíncrona que realiza la petición al documento JSON, mediante FETCH.
const mostrarPreview = async() => {
    let url = "http://127.0.0.1:5500/JS-AVANZADO2/AnimalesSalvajes/animales.json";
    let getData = await fetch(url);
    let parsearData = await getData.json();
    let seleccionado = document.getElementById("animal").value;
    //Captura el objeto del animal seleccionado con .find y la imagen con .imagen
    let imagenData = parsearData.animales.find( e => e.name == seleccionado).imagen;
    //Pinta la imagen en cuadro de preview
    document.getElementById("preview").innerHTML = `
    <img id="imgPreview" src="./assets/imgs/${imagenData}"/>
    `
    //Limpia los resultados anteriores y deposita la última imagen
    variablesInicio.imagenPreview = "";
    variablesInicio.imagenPreview = imagenData;
};

//Función que captura los inputs del formulario y genera los objetos "animales" de forma dinámica. Inserta el objeto en el array vacío de "listaRegistrados". Al finalizar, dispara función reloadAnimales
const registrar = () => {
    
    let edad = document.getElementById("edad").value;
    let seleccionado = document.getElementById("animal").value;
    //recoge la última imagen seleccionada del "preview"
    let imagen = variablesInicio.imagenPreview;
    let comentarios = document.getElementById("comentarios").value;
    if(seleccionado === "Leon"){
        let objetoNuevo = new Leon("Leon", edad, imagen, comentarios, "Rugido");
        variablesInicio.listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Lobo"){
        let objetoNuevo = new Lobo("Lobo", edad, imagen, comentarios, "Aullido");
        variablesInicio.listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Oso"){
        let objetoNuevo = new Oso("Oso", edad, imagen, comentarios, "Gruñido");
        variablesInicio.listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Serpiente"){
        let objetoNuevo = new Serpiente("Serpiente", edad, imagen, comentarios, "Siseo");
        variablesInicio.listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Aguila"){
        let objetoNuevo = new Aguila("Aguila", edad, imagen, comentarios, "Chillido");
        variablesInicio.listaRegistrados.push(objetoNuevo);
    };
    reloadAnimales();
};

//Función que genera laS cartaS de TODOS los animales registrado en el arreglo "listaRegistrados"
const reloadAnimales = () => {
    let contenedorAnimales = document.getElementById("Animales");
    contenedorAnimales.innerHTML = "";
    //Recorre el arreglo de los animales registrados, para capturar sus imagenes y pintarlos en pantalla.
    //Genera el botón de sonido, con valor correspondiente al animal 
    variablesInicio.listaRegistrados.forEach( e => {
        contenedorAnimales.innerHTML += `<div class="cartas">
        <img class="imagenCartas" src="./assets/imgs/${e.traerImg}"/>
        <div class="btnSonido" value="${e.traerSonido}" ><img src="./assets/imgs/audio.svg"></div>
        <audio src=""></audio>
        </div>
        `
    });
    reloadForm()
};
//Función para limpiar el formulario

const reloadForm = () =>{
    document.getElementById("comentarios").value = "";
    document.getElementById("imgPreview").remove();
    document.getElementById("edad").value = "-1";
    document.getElementById("animal").value = "-1";
};

//EVENTOS DE ESCUCHA, BOTÓN REGISTRAR Y EVENTO CHANGE DEL "SELECT" ANIMAL ------------------------------------
document.getElementById("animal").addEventListener("change", mostrarPreview);
document.getElementById("btnRegistrar").addEventListener("click", registrar);
