class Boss{
    constructor(nom,pv,pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
}

let sauron = new Boss ("Sauron",100,20);
let chronos = new Boss ("Chronos",100,20);
let lilith = new Boss ("Lilith",100,20);

export {sauron, chronos, lilith};