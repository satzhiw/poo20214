
// Nesse rascunho esta faltando a parte de dirigir o carro


class Car{
    pass: number; // Passageiros
    passMax: number; // limite de Passageiros
    gas: number; // tanque
    gasMax: number; // limite do tanque
    km: number; // quantidade de quilometragem

    constructor() { // metodos
        this.pass= 0;
        this.passMax= 2;
        this.gas= 0;
        this.gasMax= 100;
        this.km = 0; 
    }

    enter(): void {
        if (this.pass < this.passMax ){
            this.pass += 1
        } else {
            console.log("fail: limite de passageiros atingidos");
            return
        }
    }

    leave(): void {
    }

    fuel(gas: number): void {
    }
    
    toString(): string {
        return `pass: $(this.pass), gas: $(this.gas), km: $(this.km)`
    }
};


let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

function main() {
    let car = new Car();

    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if      (args[0] === "show")  { write(car.toString());          }
        else if (args[0] === "enter") { car.enter();                    }
        else if (args[0] === "leave") { car.leave();                    }
        else if (args[0] === "fuel")  { car.fuel(+args[1]);             }
        else if (args[0] === "end")   { break;                          }
        else                          { write("fail: comando invalido");}
    }
}

main()

