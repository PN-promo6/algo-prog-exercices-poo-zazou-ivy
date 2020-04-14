<?php

class Book {

public $bookTitle;
public $bookPrice;

 function __construct($bookTitle, $bookPrice) {   //those which build the class

  $this->bookTitle = $bookTitle;
  $this->bookPrice = $bookPrice;
}
}

$newBook = new Book ("Shining", 19);
print_r ($newBook);

?>
