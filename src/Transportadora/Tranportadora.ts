import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora {
    send(): void {
        console.log("A transportadora esta enviando o pacote");
    }
    receive(): void {
        console.log("A transportadora recebeu o pacote");
    }
}
