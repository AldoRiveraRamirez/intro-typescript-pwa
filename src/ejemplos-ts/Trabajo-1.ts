interface Alumno2{
    nombre:string;
    edad:number;
    direccion:{
   calle:string;
   pais:string;
   estado:string;}
   mostrarDireccion:()=>void;
}


const AlumnoUTL: Alumno2={
    nombre: 'Mario',
    edad: 23,
    direccion: {
        calle: 'veracruz',
        pais: 'MX',
        estado: 'GTO'
    },
    mostrarDireccion() {

        return this.nombre + ',' + this.direccion.estado + ',' + this.direccion.pais;
    },
    
}



const dirreccion=AlumnoUTL.mostrarDireccion();
console.log(dirreccion);