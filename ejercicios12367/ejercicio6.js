/*Escribe un programa que haga uso de la clase clubFutbol para modelar un club que contenga las propiedadesaño Fundacion, numSocios, nombreEstadio, ciudad y 
palmares (cada título debe almacenar su nombre y año ganado).Selecciona los tipos de datos que consideres más útiles en cada caso. 
Debe tener un único método verClub(), quemuestre toda la información contenida en sus propiedades. 

Crea seis objetos de manera que el primero ejecute elconstructor sin parámetros, 
el 2º con un parámetro, 
el 3º con dos parámetros... 
así hasta el 6º con cinco parámetros.

Realiza un recorrido de cada objeto asegurándote de que en cada recorrido modificas el contenido 
de alguna propiedad.¿Son coherentes los datos que se muestran en cada objeto? Razona en los comentarios del código tu respuesta.*/

class ClaseFutbol {
    constructor(añoFundacion, numSocios, nombreEstadio, ciudad, palmares) {
        this.añoFundacion = añoFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares;
    }
    verClub() { // Método que muestra la información del club
        let palmaresString = '' // Cadena para almacenar el palmarés en formato legible
        if(this.palmares.length > 0) { // Verifica si hay títulos en el palmarés
            // Si hay títulos, mapea cada título con su nombre y año, y luego une los elementos con una coma
            palmaresString = this.palmares.map( titulo => `${titulo.nombre} (${titulo.año})`).join(',');
        } else {
            palmaresString = 'ningún título'; // Si no hay títulos, se establece la cadena como "ningún título"
        }
    
        // Devuelve una cadena con la información del club, incluyendo año de fundación, número de socios, ciudad, estadio y palmarés
        return `El club fue fundado en el año ${this.añoFundacion}, tiene un total de ${this.numSocios} socios, es de ${this.ciudad}, su estadio se llama ${this.nombreEstadio} y tiene un palmarés de ${this.palmaresString}`;
    }
    
}

// Se crean instancias de la clase ClaseFutbol con diferentes configuraciones de parámetros
const club1 = new ClaseFutbol(); // Club sin parámetros
const club2 = new ClaseFutbol(1900);
const club3 = new ClaseFutbol(1920, 10000); 
const club4 = new ClaseFutbol(1940, 10000, "Estadio 1"); // Club con el año de fundación, número de socios y nombre del estadio
const club5 = new ClaseFutbol(1960, 10000, "Estadio 2", "Ciudad 1"); // Club con el año de fundación, número de socios, nombre del estadio y ciudad
const club6 = new ClaseFutbol(1960, 10000, "Estadio 2", "Ciudad 1",["Copa del Rey", 2010]); // Club con el año de fundación, número de socios, nombre del estadio, ciudad y palmarés

// Se crea un array que contiene todas las instancias de clubes
const clubes = [club1, club2, club3, club4, club5, club6];

let socios = 0; // Se inicializa el contador de socios en 0
clubes.forEach(club => { // Se itera sobre cada club en el array de clubes
    socios += 5000; // Se incrementa el número de socios en 5000 en cada iteración
    club.numSocios += socios; // Se añade el número de socios acumulado al número de socios del club actual
    console.log(club); // Se muestra el club actual en la consola
});


//No son coherentes los datos ya que no tiene sentido tener campos vacios

