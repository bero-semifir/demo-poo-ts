import { Rechargeable } from "./interfaces/Rechargeable";
import { VoitureThermique } from "./VoitureThermique";


export class VoitureHybride extends VoitureThermique implements Rechargeable {
    
    niveauBatterie: number = 100;
    
    public recharger(montant: number): void {
        if(this.niveauBatterie + montant > 100){
            this.niveauBatterie = 100;
        }else{
            this.niveauBatterie += montant;
        }
        console.log(`Batterie chargée à ${this.niveauBatterie}%`)
    }

}