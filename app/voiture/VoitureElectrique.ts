import { Rechargeable } from "./interfaces/Rechargeable";
import { Voiture } from "./Voiture";

// La classe VoitureElectrique hérite de la classe Voiture et implémente l'interface Rechargeable
export class VoitureElectrique extends Voiture implements Rechargeable {

    niveauBatterie: number = 100;
    protected consomation: number = 13.9;
    
    constructor(couleur: string, marque: string, nbRoues: number, niveauBatterie: number, consomation: number){
        super(couleur, marque, nbRoues);

        this.niveauBatterie = niveauBatterie;
        this.consomation = consomation;
    }

    // redéfinition de la méthode rouler du parent spécifique à la voiture électrique
    rouler(distance: number){
        this.niveauBatterie -= distance * this.consomation/100;
        console.log(`je suis une voiture électrique je roule sur ${distance}km il me reste ${this.niveauBatterie}% de batterie`)
    }

    /**
     * Recharger d'un certain montant la batterie
     * @param montant Pourcentage de charge à ajouter
     */
    public recharger(montant: number){
        if(this.niveauBatterie + montant > 100){
            this.niveauBatterie = 100;
        }else{
            this.niveauBatterie += montant;
        }
        console.log(`Batterie chargée à ${this.niveauBatterie}%`)
    }

}