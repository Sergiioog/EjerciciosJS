/*2. Escribe un programa con herencia de clases que permita modelar los objetos Teléfono, Fijo y Móvil, de manera
que Teléfono sea la clase madre y Fijo y Móvil, clases heredadas. */

class Telefono {
    constructor(CPU,RAM,almacenamiento,ancho,alto,num_camaras) {
        this.CPU = CPU;
        this.RAM = RAM; 
        this.almacenamiento = almacenamiento;
        this.ancho = ancho;
        this.alto = alto;
        this.num_camaras = num_camaras;
    }

    toString() {
        return `Tiene ${this.CPU} GB de CPU, ${this.RAM} GB de RAM, ${this.almacenamiento} GB de almacenamiento,
        ${this.ancho} cm de ancho, ${this.alto} cm de alto y además tiene ${this.num_camaras} cámaras.`; //Esto lo va sacar por consola siempre
    }
}

class Fijo extends Telefono {
    constructor(nombre,tipo, anyo_creacion) {
        super(4,4,64,600,1000,1) //Atributos de telef que queremos para este ejemplo
        this.tipo = tipo
        this.nombre = nombre;
        this.anyo_creacion = anyo_creacion; //Atributos de iPhone 5
    }
    getFijo() {
        return `El ${this.nombre} es un teléfono ${this.tipo} y se creó en el año ${this.anyo_creacion}. ${super.toString()}` //Añadimos los atributos del iphon5 junto con los del super
    }

}

class Movil extends Telefono {
    constructor(nombre,software, anyo_creacion) {
        super(5,5,128,700,1200,2)
        this.nombre = nombre;
        this.software = software;
        this.anyo_creacion = anyo_creacion;
    }
    getMovil() {
        return `El ${this.nombre} es un teléfono con una versión de IOS de ${this.software} y se creó en el año ${this.anyo_creacion}. ${super.toString()}`
    }

}

const fijo = new Fijo("Alcatel", "fijo", "1981");
console.log(fijo.getFijo());

const movil = new Movil("Iphone 8", "9.0.5", "2014");
console.log(movil.getMovil());

