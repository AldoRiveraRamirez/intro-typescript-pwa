//pedir 3 numeros a,b,c creando funciones,propiedades, y que nos permita calcular la formula general

class Formula{
    a:number;
    b:number;
    c:number;
    x1:number;
    x2:number;
    resultado():void{

        this.x1=((-this.b)+Math.sqrt(Math.pow (this.b,2)-(4*this.a*this.c)))/(2*this.a);
        this.x2=((-this.b)-Math.sqrt(Math.pow (this.b,2)-(4*this.a*this.c)))/(2*this.a);

        console.log(`El resultado de x1 es: ${this.x1}`);
        console.log(`El resultado de x2 es: ${this.x2}`);
        console.log(`Los datos de cada numero son: ${this.a}, ${this.b}, ${this.c}, respectivamente (a,b,c)`)
    }
}

let resultados= new Formula();
resultados.a=6;
resultados.b=-19;
resultados.c=7;
resultados.resultado();

