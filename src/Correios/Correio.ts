import ICorreio from "./ICorreios";

export default class Correio implements ICorreio {
    correioSend(): void {
        console.log("Os correios enviaram o pacote");
    }
    correioReceive(): void {
        console.log("Os correios receberam o pacote");
    }
}
