
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