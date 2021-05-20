import { Voiture } from "./Voiture";
import { VoitureElectrique } from "./VoitureElectrique";
import { VoitureThermique } from "./VoitureThermique";

// instance de la classe Voiture
console.log("Nombre de voiture: " + Voiture.compteur);
const voiture1 = new Voiture("Rouge", "Renault");
console.log("Nombre de voiture: " + Voiture.compteur);
const voiture2 = new Voiture("Bleu", "Peugeot", 5);
console.log("Nombre de voiture: " + Voiture.compteur);

console.log({voiture1, voiture2});
// appel du mutateur (avec sécuritée)

voiture2.setNbRoues(-5);
console.log({voiture1, voiture2});

// appel de l'accesseur
console.log(voiture2.nbRoues);

// appels de méthodes des objets Voiture
voiture1.rouler(10);
voiture2.rouler(5);

// erreur: utilisation d'une méthode privée en dehors de la classe
// voiture2.check();

// appel de méthode static depuis la classe voiture
Voiture.décrireVoiture(voiture1);

const voiture3 = new VoitureThermique("Orange","McLaren", 5, 40, 20);

voiture3.rouler(20);

const voiture4 = new VoitureElectrique("Verte", "Tesla", 5, 100, 13.9);

voiture4.rouler(100);
console.log(voiture4);
voiture4.recharger(10);
console.log(voiture4);