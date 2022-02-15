//SUPER CLASE
class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = () =>{
            return _nombre;
        };
        this.getEdad = () => {
            return _edad;
        };
        this.getImg = () => {
            return _img;
        };
        this.getSonido = () => {
            return _sonido;
        };
        this.getComentarios = () =>{
            return _comentarios;
        }
        this.setComentarios = (nuevoComentario) =>{
            _comentarios = nuevoComentario;
        };
    };
    get traerNombre() {
        return this.getNombre();
    };
    get traerEdad(){
        return this.getEdad();
    };
    get traerImg(){
        return this.getImg();
    };
    get traerSonido(){
        return this.getSonido();
    };
    get traerComentarios(){
        return this.getComentarios();
    }
    set cambiarComentarios(nuevoComentario){
        this.setComentarios(nuevoComentario);
    };
};

export default {Animal}