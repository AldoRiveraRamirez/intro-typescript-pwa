//clases
//para definir una clase hacemmos referencia
// a la palabra class

class Personaje{
    nombre:string;
    edad:number;



    imprimir():void{
        console.log(`El nombre es: ${this.nombre} \n
        La edad es: ${this.edad}`);
    }
}

let persona1=new Personaje();
persona1.nombre='Mario';
persona1.edad=22;
persona1.imprimir();

//pedir 3 numeros a,b,c creando funciones,propiedades, y que nos permita calcular la formula general