'use strict';

// ++++++++++++++++++++++++++++++ DATA +++++++++++++++++++++++++++++++
var allProducts = [];
var randomizerNumbers = [];
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

function productRandomizer(productOption) {
  var idx = Math.floor(Math.random() * allProducts.length)
  console.log(idx);
  
  productOption.src = allProducts[idx].filePath;
  productOption.alt = allProducts[idx].productName;
  productOption.title = allProducts[idx].productName;

  randomizerNumbers.push(idx);
}


// ++++++++++++++++++++++++++++++ EXICUTABLES +++++++++++++++++++++++++++++++


productRandomizer(optionOne);
productRandomizer(optionTwo);
productRandomizer(optionThree);
