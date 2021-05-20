// "Moule" ou modéle d'objet
export class Voiture {
    // attribut d'une classe (variables)
    public couleur: string;
    public marque: string;
    protected _nbRoues!: number;
    // mot clé static: rend un attribut ou une méthode partagé entre les instances de classes (entre tous les objets)
    public static compteur:number = 0;

    // constructor est la méthode appelée quand on fait "new Voiture()"
    public constructor(couleur: string, marque: string, nbRoues: number = 4) {
        this.couleur = couleur;
        this.marque = marque;
        // if(nbRoues>0 && nbRoues<5){
        //     this._nbRoues = nbRoues;
        // }else{
        //     this._nbRoues = 4;
        // }
        this.setNbRoues(nbRoues);
        this.check();
        // pas d'utilisation du this pour les attributs static, ils concernent la classe et pas l'objet
        Voiture.compteur++;
    }
    //accesseur (getter): permet de récupérer un attribut de manière sécurisée.
    get nbRoues(): number{
        // il est possible de mettre de la logique (du code) avant de retourner la valeur
        return this._nbRoues;
    }

    // mutateur (setter): permet de changer la valeur d'un attribut de manière sécurisée.
    // set nbRoues(nbRoues: number){
        // if(nbRoues>0 && nbRoues<5){
        //     this._nbRoues = nbRoues;
        // }else{
        //     this._nbRoues = 4;
        // }
    // }

    // setter façon Java / C++ etc. Utilisable dans le consctructeur
    public setNbRoues(nbRoues: number) {
        if(nbRoues>0 && nbRoues<5){
            this._nbRoues = nbRoues;
        }else{
            this._nbRoues = 4;
        }
    }


    // méthode de la classe voiture (fonction)
    // cette méthode est propre à l'objet (elle concerne seulement l'objet qui l'appelle)
    public rouler(distance: number): void{
        this.check()
        console.log(`Je suis une voiture ${this.couleur} et je roule pendant ${distance} km`)
    }

    // méthode privée: je ne peux l'appeler qu'au sein de la classe
    private check(){
        if (this.nbRoues > 0 && this.nbRoues< 5) {
            console.log("Le nombre de roues est correct");
        }else{
            console.log("Il y a un problème avec le nombre de roues, je ne peux pas démarer")
        }
    }

    /**
     * Méthode pour décrire une voiture.
     * @param voiture La voiture à décrire.
     */
    public static décrireVoiture(voiture: Voiture){
        console.log(`Voiture de marque ${voiture.marque} de couleur ${voiture.couleur} avec ${voiture.nbRoues} roue(s)`);
    }
}

// // création d'une instance de la classe Voiture => créer un objet voiture
// const voitureRouge = new Voiture();
// const voitureRouge1 = new Voiture();
// const voitureRouge2 = new Voiture();
// const voitureRouge3 = new Voiture();

