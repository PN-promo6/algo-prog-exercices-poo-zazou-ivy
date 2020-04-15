
abstract class Item {

    name: string;
    size: number;

    constructor(name: string, size: number) {

        this.name = name;
        this.size = size;
    }
}

class Teleporter extends Item {

    energy: number;

    constructor(name: string, energy: number) {
        super(name, 3);
        this.energy = energy;
    }
}

class Arrow extends Item {

    power: number;

    constructor(name: string, power: number) {
        super(name, 1);
        this.power = power;
    }
}

class Player {
    playerName: string;
    sizeUsed: number;
    life: number;
    tab: Array<Item>;

    constructor(playerName: string) {

        this.playerName = playerName;
        this.life = 3;   //on initialise dans le constructeur à trois car on construit le joueur à 3 vies.
        this.tab = new Array<Item>(); //() veut dire qu'on va le construire
        this.sizeUsed = 0;
    }

    addItem(item: Item): boolean {
        if (item.size + this.sizeUsed > 9) {  //si la taille que prend l'item et la taille de l'inventaire est supérieur à 9 place 
            console.log("Impossible d'ajouter " + item.name + ". Votre inventaire est full. Veuillez faire de la place dans votre inventaire.");
            return false;
        }

        else {
            this.tab.push(item);
            this.sizeUsed += item.size;
            console.log("item ajouté." + " vous avez ajouté " + item.name);
            return true;
        };

    }

}

let alloy: Player = new Player("alloy");

let kitTransport: Teleporter = new Teleporter("lame de duran", 10);

let kitTransport2: Teleporter = new Teleporter("echo de Luden", 100);

alloy.addItem(kitTransport);
alloy.addItem(kitTransport);
alloy.addItem(kitTransport2);
alloy.addItem(kitTransport);

console.log(alloy);
