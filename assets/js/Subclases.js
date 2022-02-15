import Superclass from "./Superclass.js";

export class Leon extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
        
        this.rugir = () =>{
            return sonido;
        };
    };
};
export class Lobo extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        
        this.aullar = () =>{
            return sonido;
        };
    };
};
export class Oso extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        
        this.grunir = () =>{
            return sonido;
        };
    };
};
export class Serpiente extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        
        this.sisear = () =>{
            return sonido;
        };
    };
};
export class Aguila extends Superclass.Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
        
        this.chillar = () =>{
            return sonido;
        };
    };
};
