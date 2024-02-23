/*3. Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de Aula, para modelar lasinstalaciones de un instituto 
de enseñanza secundaria. Elige un método con el que evidenciar el concepto depolimorfismo. Razona en los comentarios del código tu respuesta*/

class Aula {
    constructor (num_pizarras, num_sillas,num_mesas,num_ventanas) {
        this.num_pizarras = num_pizarras;
        this.num_sillas = num_sillas;
        this.num_mesas = num_mesas;
        this.num_ventanas = num_ventanas;
    }

    getAula() {
        return `La clase tiene ${this.num_pizarras} pizarra(s), ${this.num_sillas} sillas, ${this.num_mesas} mesas y ${this.num_ventanas} ventanas.`
    }
}

class Musica extends Aula {
    constructor(tipo, num_instrumentos,num_partituras) {
        super(1,30,30,4);
        this.tipo = tipo;
        this.num_instrumentos = num_instrumentos;
        this.num_partituras = num_partituras;
    }

    getAula() { //Se utiliza getAula varias veces (polimorfismo)
        return `${super.getAula()} Además la clase de ${this.tipo} tiene ${this.num_instrumentos} instrumentos y ${this.num_partituras} partituras`
    }
}

class Tecnologia extends Aula {
    constructor(tipo, num_ordenadores,num_portatiles) {
        super(1,30,30,4);
        this.tipo = tipo;
        this.num_ordenadores = num_ordenadores;
        this.num_portatiles = num_portatiles;
    }

    getAula() {
        return `${super.getAula()} Además la clase de ${this.tipo} tiene ${this.num_ordenadores} ordenadores y ${this.num_portatiles} portátiles` //Se utiliza el getAula del padre junto con atributos de los hijos
    }
}

const aula = new Aula(2,40,40,5);
console.log(aula.getAula());

const aulaMusica = new Musica(1,20,20,3);
console.log(aulaMusica.getAula());

const aulaTecnologia = new Tecnologia(3,50,50,4);
console.log(aulaMusica.getAula());
