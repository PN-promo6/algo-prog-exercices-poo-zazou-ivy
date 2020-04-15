// Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET. 

class Customer {

    name: string;
    accountNumber: number;

    constructor(name: string, accountNumber: number) {

        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientProfessionnel extends Customer {
    nSIRET: number;

    constructor(name: string, accountNumber: number, nSIRET: number) {
        super(name, accountNumber);
        this.nSIRET = nSIRET;

    }
}

let cust1: Customer = new Customer("toto", 28737764);
console.log(cust1.name, cust1.accountNumber);

let cust2: ClientProfessionnel = new ClientProfessionnel("tata", 284, 999999);
console.log(cust2.name, cust2.accountNumber, cust2.nSIRET);
