
class Furniture {

  name: string;
  year: number;
  editor: string;

  constructor(editor: string, name: string, year: number) {   //those which build the class

    this.editor = editor;
    this.name = name;
    this.year = year;
  }
}

let wassily: Furniture = new Furniture("Marcel Breuer", "Knoll", 1925);
wassily.year = 1926;

console.log(wassily.editor, wassily.name, wassily.year);
