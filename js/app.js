'use strict';

// ++++++++++++++++++++++++++++++ DATA +++++++++++++++++++++++++++++++
var allProducts = [];
// var randomizerNumbers = [];
var optionOne = document.getElementById('optionOne');
var optionTwo = document.getElementById('optionTwo');
var optionThree = document.getElementById('optionThree');
var container = document.getElementById('product-container');
var productList = document.getElementById('product-list');
var totalClicks = 0;
var justViewed = [];


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
new Product('Baby Broom Jumpsuit', 'img/sweep.jpg');
new Product('TaunTaun Sleeping Bag', 'img/tauntaun.jpg');
new Product('Can-O-Unicorn Meat', 'img/unicorn.jpg');
new Product('Wiggling Tentacle USB', 'img/usb.jpg');
new Product('Fashion Forward Watering Can', 'img/water-can.jpg');
new Product('Half Spillproof Wine Glass', 'img/wine-glass.jpg');

// ++++++++++++++++++++++++++++++ DECLARE FUNCTIONS +++++++++++++++++++++++++++++++

function randomizer() {
  return Math.floor(Math.random() * allProducts.length);
}

function generateProducts() {
  var randomProducts = [];

  var firstProduct = randomizer();
  while(justViewed.includes(firstProduct)) {
    firstProduct = randomizer();
  }
  randomProducts.push(firstProduct)

  var secondProduct = randomizer();
  while (randomProducts[0] === secondProduct || justViewed.includes(secondProduct)) {
    secondProduct = randomizer();
  }
  randomProducts.push(secondProduct);
  
  var thirdProduct = randomizer();
  while (randomProducts[0] === thirdProduct || randomProducts[1] === thirdProduct || justViewed.includes(thirdProduct)) {
    thirdProduct = randomizer();
  }
  randomProducts.push(thirdProduct);

  return randomProducts;
}

function displayOptions() {
  var options = generateProducts();

  optionOne.src = allProducts[options[0]].filePath;
  optionOne.alt = allProducts[options[0]].productName;
  optionOne.title = allProducts[options[0]].productName;

  optionTwo.src = allProducts[options[1]].filePath;
  optionTwo.alt = allProducts[options[1]].productName;
  optionTwo.title = allProducts[options[1]].productName;

  optionThree.src = allProducts[options[2]].filePath;
  optionThree.alt = allProducts[options[2]].productName;
  optionThree.title = allProducts[options[2]].productName;

  allProducts[options[0]].numberOfViews++;
  allProducts[options[1]].numberOfViews++;
  allProducts[options[2]].numberOfViews++;
}

function handleClick(event) {
  if (event.target.id === 'product-container') {
    return alert('Please click directly on an image.');
  }

  totalClicks++;

  for(var i = 0; i < allProducts.length; i++) {
    if(event.target.alt === allProducts[i].productName) {
      allProducts[i].numberOfClicks++;
    }
  }

  if (totalClicks === 4) {
    container.removeEventListener('click', handleClick);
    showList();
    return;
  }
  displayOptions();
}

function showList() {
  for(var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].productName} has ${allProducts[i].numberOfViews} views and ${allProducts[i].numberOfClicks} votes.`
    productList.appendChild(liEl);
  }
}

// ++++++++++++++++++++++++++++++ EXICUTABLES +++++++++++++++++++++++++++++++
displayOptions();
container.addEventListener('click', handleClick);
