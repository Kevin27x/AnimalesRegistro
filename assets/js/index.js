import {Leon, Lobo, Oso, Serpiente, Aguila} from "./Subclases.js";

var imagenPreview;
var sonidoPreview;
const mostrarPreview = (async() => {
    let url = "http://127.0.0.1:5500/JS-AVANZADO2/AnimalesSalvajes/animales.json";
    let getData = await fetch(url);
    let parsearData = await getData.json();
    let seleccionado = document.getElementById("animal").value;
    let imagenData = parsearData.animales.find( e => e.name == seleccionado).imagen;
    let sonidoData = parsearData.animales.find( e => e.name == seleccionado).sonido;
    document.getElementById("preview").innerHTML = `
    <img id="imgPreview" src="./assets/imgs/${imagenData}"/>
    `
    imagenPreview = "";
    sonidoPreview = "";
    imagenPreview = imagenData;
    sonidoPreview = sonidoData;
});
document.getElementById("animal").addEventListener("change", mostrarPreview);
///---------------------------------
var listaRegistrados = [];
const registrar = () => {
    let edad = document.getElementById("edad").value;
    let seleccionado = document.getElementById("animal").value;
    let imagen = imagenPreview;
    let comentarios = document.getElementById("comentarios").value;
    let sonido = sonidoPreview;
    if(seleccionado === "Leon"){
        let objetoNuevo = new Leon("Leon", edad, imagen, comentarios, sonido)
        console.log(objetoNuevo)
        listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Lobo"){
        let objetoNuevo = new Lobo("Lobo", edad, imagen, comentarios, sonido)
        console.log(objetoNuevo);
        listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Oso"){
        let objetoNuevo = new Oso("Oso", edad, imagen, comentarios, sonido)
        console.log(objetoNuevo);
        listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Serpiente"){
        let objetoNuevo = new Serpiente("Serpiente", edad, imagen, comentarios, sonido)
        console.log(objetoNuevo);
        listaRegistrados.push(objetoNuevo);

    } else if(seleccionado === "Aguila"){
        let objetoNuevo = new Aguila("Aguila", edad, imagen, comentarios, sonido)
        console.log(objetoNuevo);
        listaRegistrados.push(objetoNuevo);
    } 
    reloadAnimales()
}
document.getElementById("btnRegistrar").addEventListener("click", registrar);

const reloadAnimales = () => {
    console.log(listaRegistrados)
    let contenedorAnimales = document.getElementById("Animales");
    contenedorAnimales.innerHTML = "";
    
    listaRegistrados.forEach( e => {
        contenedorAnimales.innerHTML += `<div class="cartas">
        <img class="imagenCartas" src="./assets/imgs/${e.traerImg}"/>
        <div class="btnSonido" onclick="funcSonido(${e.traerSonido})"><img src="./assets/imgs/audio.svg"></div>
        </div>
        `
    })

};
