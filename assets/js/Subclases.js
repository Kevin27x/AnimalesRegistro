import Superclass from "./Superclass.js";

export class Leon extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
        sonido = "rugir";
        this.rugir = () =>{
            return sonido;
        };
    };
};
export class Lobo extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        sonido = "aullar";
        this.aullar = () =>{
            return sonido;
        };
    };
};
export class Oso extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        sonido = "grunir";
        this.grunir = () =>{
            return sonido;
        };
    };
};
export class Serpiente extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        sonido = "sisear";
        this.sisear = () =>{
            return sonido;
        };
    };
};
export class Aguila extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        sonido = "chillar";
        this.chillar = () =>{
            return sonido;
        };
    };
};
