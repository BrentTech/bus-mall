'use strict';

// ++++++++++++++++++++++++++++++ DATA +++++++++++++++++++++++++++++++
var allProducts = [];
var optionOne = document.getElementById('optionOne');
var optionTwo = document.getElementById('optionTwo');
var optionThree = document.getElementById('optionThree');


function Product(name, filepath) {
  this.productName = name;
  this.filePath = filepath;
  this.numberOfViews = 0;
  this.numberOfClicks = 0;
  allProducts.push(this);
}

new Product('R2D2 Bag', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Bathroom Entertainment Center', 'img/bathroom.jpg');
new Product('Hipster Rain Boots', 'img/boots.jpg');
new Product('Breakfast All-In-one', 'img/breakfast.jpg');
new Product('Meatball Bubblegum', 'img/bubblegum.jpg');
new Product('Bumpy Chair', 'img/chair.jpg');
new Product('Cthulhu Statuette', 'img/cthulhu.jpg');
new Product('Duck Dynasty - Dog Muzzle', 'img/dog-duck.jpg');
new Product('Can-O-Dragon Meat', 'img/dragon.jpg');
new Product('Silverware Pen Caps', 'img/pen.jpg');
new Product('Pet Sweeping Footies', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('JAWS Sleeping Bag', 'img/shark.jpg');
new Product('Baby Broom Jumpsuit', 'img/sweep.png');
new Product('TaunTaun Sleeping Bag', 'img/tauntaun.jpg');
new Product('Can-O-Unicorn Meat', 'img/unicorn.jpg');
new Product('Wiggling Tentacle USB', 'img/usb.gif');
new Product('Fashion Forward Watering Can', 'img/water-can.jpg');
new Product('Half Spillproof Wine Glass', 'img/wine-glass.jpg');

// ++++++++++++++++++++++++++++++ DECLARE FUNCTIONS +++++++++++++++++++++++++++++++
function productRandomizer1() {
  var idx = Math.floor(Math.random() * allProducts.length)
  console.log(idx);
  
  optionOne.src = allProducts[idx].filePath;
  optionOne.alt = allProducts[idx].productName;
  optionOne.title = allProducts[idx].productName;
}

function productRandomizer2() {
  var idx = Math.floor(Math.random() * allProducts.length)
  console.log(idx);
  
  optionTwo.src = allProducts[idx].filePath;
  optionTwo.alt = allProducts[idx].productName;
  optionTwo.title = allProducts[idx].productName;
}

function productRandomizer3() {
  var idx = Math.floor(Math.random() * allProducts.length)
  console.log(idx);
  
  optionThree.src = allProducts[idx].filePath;
  optionThree.alt = allProducts[idx].productName;
  optionThree.title = allProducts[idx].productName;
}

productRandomizer1();

productRandomizer2();

productRandomizer3();



// ++++++++++++++++++++++++++++++ EXICUTABLES +++++++++++++++++++++++++++++++