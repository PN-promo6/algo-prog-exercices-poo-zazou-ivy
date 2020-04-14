

<?php
class Furniture {

  public $name;
  public $year;
  public $editor;

function __constructor($name, $year, $editor){

$this->name =$name;
$this->year =$year;
$this->editor =$editor;

  }
}


$wassily = new Furniture("Marcel Breuer", "Knoll", 1925);
$wassily->year = 1926;
print_r ($wassily);
echo($wassily->name.''.$wassily->nameyear.''.$wassily->editor);


?>
