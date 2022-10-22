class Auto {
    private marca : string;
    private modelo : string;
    protected acelerar : number;

    public constructor (marca: string, modelo: string){
        this.marca=marca;
        this.modelo=modelo;
        this.acelerar=0;
    }

    public subirVelocidad ():void{
        this.acelerar +=10;
    }
}
class AutoCarreras extends Auto {
    public constructor (marca: string, modelo: string){
        super (marca, modelo);
    }
    public subirVelocidad(): void {
        this.acelerar +=20;
    }
        
}

let autoCalle: Auto = new Auto ("Fiat","Uno");
let autoDeportivo: AutoCarreras = new AutoCarreras ("Mercedes","AMG");

autoCalle.subirVelocidad();
autoDeportivo.subirVelocidad();
console.log(autoCalle);
console.log(autoDeportivo);

