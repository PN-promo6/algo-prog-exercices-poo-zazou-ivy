class Book {

bookTitle : string;
bookPrice : number;

constructor(bookTitle: string, bookPrice: number) {   //those which build the class

  this.bookTitle = bookTitle;
  this.bookPrice = bookPrice;
}
}

let newBook = new Book ("Shining", 19);
console.log(newBook.bookTitle, newBook.bookPrice);
