class Playground {
    public static void main(String[ ] args) {
         Customer cust1 = new Customer ("toto", 28737764);
         ClientProfessionnel cust2= new ClientProfessionnel ("tata", 284, 9999);
        System.out.println(cust1.name + ": " + cust1.accountNumber);
        System.out.println(cust2.name +  ": " + cust2.accountNumber +"; Numéro de SIRET = "+ cust2.nSIRET);
    }
}

    class Customer {
         public String name ;
         public int accountNumber ;
         
    Customer(String name, int accountNumber ){
         this.name = name;
         this.accountNumber = accountNumber;
   }
   
 }
    class ClientProfessionnel extends Customer {
         public int nSIRET ;
  
    ClientProfessionnel (String name, int accountNumber, int nSIRET){
        
    super(name,accountNumber);
    this.nSIRET = nSIRET ;
  
    }
}
