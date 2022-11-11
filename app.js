import Partida from "./Partida.js";
import Time from "./Time.js";

const jogo = new Partida ("TimeA", 1 , "TimeB", 1);
const palmeiras = new Time("TimeA")

palmeiras.computarPartida(jogo);

console.log(palmeiras.exibirSituacao);