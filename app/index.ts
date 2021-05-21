import { Rechargeable } from "./voiture/interfaces/Rechargeable";
import { Voiture } from "./voiture/Voiture";
import { VoitureElectrique } from "./voiture/VoitureElectrique";
import { VoitureHybride } from "./voiture/VoitureHybride";
import { VoitureThermique } from "./voiture/VoitureThermique";

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

const voitureElectrique = new VoitureElectrique("Verte", "Tesla", 5, 100, 13.9);

voitureElectrique.rouler(100);
console.log(voitureElectrique);
voitureElectrique.recharger(10);
console.log(voitureElectrique);


const voitureHybride = new VoitureHybride("Blanche", "Toyota", 4, 50, 5);

// la station de recharge est un tableau d'objets qui implémentent l'interface rechargeable
const stationRecharge: Rechargeable[] = [
    voitureHybride,
    voitureElectrique
]
// Pour chacun des éléments présent dans stationRecharge
stationRecharge.forEach((voitureRechargeable)=>{
    // effectuer une action: ici recharger
    console.log(voitureRechargeable);
    voitureRechargeable.recharger(100);
})


/*
version C du foreach
for (let i = 0; i < stationRecharge.length; i++) {
    const voitureRechargeable = stationRecharge[i];
    voitureRechargeable.recharger(100);
}
*/