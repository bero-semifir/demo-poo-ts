import { Voiture } from "./Voiture";

export class VoitureThermique extends Voiture {

    protected carburantRestant = 20;
    protected consomation = 10; // consomation au 100km; ici 10L au 100 km

    constructor(couleur: string, marque: string, nbRoues: number, carburantDeDepart: number, consomation: number){
        // le mot clé super fait référence au parent de la classe.
        // Appelle le constructeur du parent
        super(couleur, marque, nbRoues);
        // partie spécifique de la classe
        // remplir le reservoir de manière sécurisée
        this.remplirCarburant(carburantDeDepart);
        this.consomation = consomation;                        
    }

    // redéfinition de la méthode du parent (de la classe Voiture)
    public rouler(distance: number): void{
        // calcul de la consomation
        this.carburantRestant-= distance * this.consomation/100;
        console.log(`Je roule pendant ${distance}km, il me reste ${this.carburantRestant}L de carburant`);
    }

    // remplir le carburant au "max"
    public faireLePlein(){
        this.carburantRestant = 50;
    }

    // setter pour le carburant
    public remplirCarburant(volume: number){
        if(this.carburantRestant+ volume > 50){
            this.carburantRestant =50;
        }else{
            this.carburantRestant += volume;
        }
    }

}