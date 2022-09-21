//desestructuración de objetos y Arrays

interface Reproductor{
    volumen:number;
    segundo: number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
        autor:'Cepillin',
        year:1878,
    }
}
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor}=detalles;
console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);
console.log(`La cancion actual es: ${cancion}`);
console.log(`El autor actual es: ${autor}`);


//desestructuracion de arreglos

const dbz:string[]=['Goku', 'Vegetta', 'Trunk', 'Yamcha'];
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
console.log(`Personaje 4: ${dbz[3]}`);
const[a,b,c,d]=dbz;
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 2: ${b}`);
console.log(`Personaje 3: ${c}`);
console.log(`Personaje 4: ${d}`);



console.log(`Personaje 1: ${a}`);
//console.log(`Personaje 2: ${b}`);
//console.log(`Personaje 3: ${c}`);
console.log(`Personaje 4: ${d}`);


console.log(`Los perosnajes son: ${dbz}`);