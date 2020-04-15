<?php

class ConcertTicket
{
  public $_price;
  public $_placeNumber;
  public $_date;
  public $_customer;
  public $_artistName;

  function __construct($price, $placeNumber, $date, $customer, $artistName = null)
  {
    $this->price = $price;
    $this->placeNumber = $placeNumber;
    $this->date = $date;
    $this->customer = $customer;
    if (!is_null($artistName)) {
      $this->artistName = $artistName;
    }
  }

  function concertDetails()
  {
    $concertVar = "
    <p>Price: $this->price </p>
   <p>Place number: $this->placeNumber </p>
   <p>Date du concert: $this->date </p>
   <p>Customer name: $this->customer</p>";

    if (!is_null($this->artistName)) {
      $concertVar = $concertVar . "<p> Détenteur du ticket : $this->artistName </p>";
    }
    return $concertVar;
  }
}
$museConcert = new ConcertTicket(100, "198", "02.04", "lea zaoui", "Muse");
$redHotConcert = new ConcertTicket(99, "199", "03.04", "lea zanon", "Red hot");

echo ($museConcert->concertDetails());
echo ($redHotConcert->concertDetails());
