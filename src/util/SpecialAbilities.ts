export class SpecialAbilities {
    constructor(
        public abilities: string[] = []
    
    ) { }

    
    has(key: string): boolean {
        return this.abilities.indexOf(key) != -1;
    }

    remove(key: string) {
        this.abilities = this.abilities.filter( el => el != key);
    }

    add(key: string) {
         this.abilities =  [...this.abilities, key];
    }

    reset() {
        this.abilities = [];
    }

    toggle(key: string) {
     if( this.has(key) ) {
            this.remove(key);
        }
        else {
            this.add(key);
        }
    }
}


