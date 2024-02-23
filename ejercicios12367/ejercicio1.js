/*1. Crea una clase con dos propiedades y dos métodos donde se evidencien los conceptos de abstracción y
encapsulamiento de la POO. Razona en los comentarios del código tu respuesta*/

class Usuario { //Abstaccion (se genera un usuario basandose en una persona real)

    constructor(nombre,apellido1) { 
        this.nombre = nombre;
        this.apellido1 = apellido1;
    }

    getDatos() { //Encapsulamiento (el metodo esta encapsulado en la clase Usuario)
        return `Soy el usuario ${this.nombre}, ${this.apellido1}.`
    }

}