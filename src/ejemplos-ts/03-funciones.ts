/* 

interface Alumno{
    matricula:number;
    nombre:string;
    email:string;

}


const alumno:Alumno={
    nombre:'Juan',
    matricula:1234,
    email:"aldo@gmail.com"

}

//definir unn arreglo
let mascotas=['perro','gato','perico']

mascotas[1]='shshs';
mascotas.push();

let tem:(number | string)[]=[]

tem.push('Nombre');
tem.push(1234);

console.log(mascotas);
console.table(alumno); */

import { isConstructorDeclaration } from "typescript";

//funciones
function sumar(a,b):void{
    console.log(a+b);
}

const resultado=sumar('Aldo' , 'Rivera');
console.log(resultado);


function sumar2(n1:number, n2:number):number{
    return n1+n2;
}
console.log(sumar2(6,3));

function multiplicar(n1:number, otronumero:number, base:number=3):number{
    let tem=n1*base;

    return tem;
}
console.log(multiplicar(3,5));


interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void; //prototipo de un metodo, se define pero no se desarrolla
}
//pasar objetos
function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ',this.edad);
    }

}
calcular(nuevaMascota, 3);


