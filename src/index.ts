import ICorreio from "./Correios/ICorreios";
import TransportadoraAdapter from "./Adapter/TransportadoraAdapter";
import Transportadora from "./Transportadora/Tranportadora";
const entrega: ICorreio = new TransportadoraAdapter(new Transportadora());
entrega.correioReceive();
entrega.correioSend();
