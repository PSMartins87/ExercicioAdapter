import Correio from "../Correios/Correio";
import ICorreio from "../Correios/ICorreios";
import Transportadora from "../Transportadora/Tranportadora";

export default class TransportadoraAdapter implements ICorreio {
    constructor(private _transportadora: Transportadora) {
        console.log("Adaptando os correios");
    }
    correioSend(): void {
        this._transportadora.send();
    }
    correioReceive(): void {
        this._transportadora.receive();
    }
}
