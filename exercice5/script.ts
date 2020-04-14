class ConcertTicket {
  public price: number;
  public placeNumber: string;
  public date: string;
  public customer: string;
  public artistName: string = "";

  constructor(price: number, placeNumber: string, date: string, customer: string, artistName?: string) {
    this.price = price;
    this.placeNumber = placeNumber;
    this.date = date;
    this.customer = customer;
    if (artistName) {
      this.artistName = artistName;
    }
  }

  public concertDetails(): string {
    let concertVar: string =
   <p>Price: ${this.price}</p>;
   <p>Place number: ${this.placeNumber}</p>;
   <p>Date of concert: ${this.date}</p>;
   <p>Customer name: ${this.customer}</p>;
   ;

    if (this.artistName != "") {
      concertVar = concertVar + <p>Nom de l'artiste: ${this.artistName}</p>;
    };
    return (concertVar);
  }
}

let museConcert: ConcertTicket = new ConcertTicket(100, "198", "02.04", "lea zaoui", "Muse");
let redHotConcert: ConcertTicket = new ConcertTicket(99, "199", "03.04", "lea zanon", "Red hot");

console.log(museConcert.concertDetails());
console.log(redHotConcert.concertDetails());
