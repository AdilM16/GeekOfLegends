class Hero {
    constructor(nom, pv, pa) {
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.attack = () => {
            
        }
        this.defens = () => { 
            
        }
    }
}

class Guerrier extends Hero {
    constructor(nom, pv, pa, rage) {
        super(nom, pv, pa);
        this.rage = rage;
    }
}

class Mage extends Hero {
    constructor(nom, pv, pa, mana) {
        super(nom, pv, pa);
        this.mana = mana;
    }
}

class Archer extends Hero {
    constructor(nom, pv, pa, fleches) {
        super(nom, pv, pa);
        this.fleches = fleches;
    }
}

export {Archer, Guerrier, Mage};