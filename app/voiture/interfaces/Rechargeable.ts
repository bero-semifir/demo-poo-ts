// Un interface est une forme de contrat à respecter
// Toutes les classes qui implémente l'interface rechargeable doivent avoir au moins les mêmes méthodes et les mêmes attributs
export interface Rechargeable {
    
    // attribut à implémenter
    niveauBatterie: number;

    // méthode à implémenter
    recharger(montant: number): void;
    
}