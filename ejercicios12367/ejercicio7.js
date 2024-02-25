/*Crea una clase película que permita gestionar esta información: nombre de la película, año de estreno, duración,género, los seis actores o actrices más principales, 
la URL de su cartel promocional y su director. 
Una acción que permitamostrar en consola toda la información. 
EL constructor recibirá los datos en una cadena JSON de la que deberá sacar losvalores de cada propiedad. 
Crea un objeto de la clase y ponla a prueba
*/
class Pelicula {
    constructor(data) { //Se lo paso por aqui
        this.nombre = data.nombre; //Le igualo sus parametros para que se puedan utilizar
        this.ano_estreno = data.ano_estreno;
        this.genero = data.genero;
        this.duracion = data.duracion;
        this.actores = data.actores;
        this.url = data.url;
        this.director = data.director;
    }

    peliculaString() {
        return `La película ${this.nombre} creada en ${this.ano_estreno} del género ${this.genero}, con una duración de ${this.duracion} minutos e interpretada por los actores: ${this.actores.join(', ')}, tiene una url promocional ${this.url} y fue dirigida por el director ${this.director}.`;
    }
}

const datosPelicula = { //Objeto 
    "nombre" : "Titanic",
    "ano_estreno" : 2010,
    "genero" : "Romantica",
    "duracion" : 120,
    "actores" : ["Brad Pitt", "Sergio", "Angelina Jolie", "Mark Zukerberg", "Neil Amstrong", "Cristiano Ronaldo"],
    "url" : "https://www.google.com",
    "director" : "Sergio Garcia"
}

const miPelicula = new Pelicula(datosPelicula); //Me creo una nueva instancia del objeto
console.log(miPelicula.peliculaString()); //Lo muestro por consola


