class Playground {
    public static void main(String[ ] args) {
        ConcertTicket museConcert = new ConcertTicket (100, "198", "02.04", "lea zaoui", "Muse");
        ConcertTicket redHotConcert = new ConcertTicket (99, "199", "03.04", "lea zanon", "Red hot");
        System.out.println(museConcert.concertDetails());
        System.out.println(redHotConcert.concertDetails());
    }
}

    class ConcertTicket {
  public int price ;
  public String placeNumber ;
  public String date ;
  public String customer ;
  public String artistName="";

    public ConcertTicket (int price, String placeNumber,  String date , String customer,String artistName){

    this.price = price;
    this.placeNumber = placeNumber;
    this.date = date;
    this.customer = customer;
    this.artistName = artistName;
    }

    public int concertDetails(){
        return this.accountNumber;
    }


}
