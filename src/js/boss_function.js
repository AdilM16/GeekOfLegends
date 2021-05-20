class Boss {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
    life = () => {
        if (pv <= 0.2) {

        }
    }
}

let sauron = new Boss("Sauron", 100, 20);
let chronos = new Boss("Chronos", 100, 20);
let lilith = new Boss("Lilith", 100, 20);

export { sauron, chronos, lilith };

let enigm1 = prompt("On peut me trouver au fond d’un bateau de pêche ou au milieu d’un court de tennis, qui suis-je  ?");
// Réponse : Un filet
for (enigm1 == "Un filet") {
    if{
        
    }
}
let enigm2 = prompt("Je ne peux pas marcher, j’ai pourtant un dos et quatre pieds, qui suis-je ?");
// Réponse : Une chaise
let enigm3 = prompt("Combien de gouttes d’eau peut-on mettre dans un verre vide?");
// Réponse : 1



let tabEnigm = [enigm1, enigm2, enigm3];
let enigm = tabEnigm[Math.round(Math.random() * (tabEnigm.length))];
