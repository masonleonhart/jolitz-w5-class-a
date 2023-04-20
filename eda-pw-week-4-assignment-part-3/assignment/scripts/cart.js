console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const basket = [];
const maxItems = 5;

console.log(basket);

function addItem(item) {
  if (isFull()) {
    return false;
  } else {
    console.log(`adding ${item} to basket`);
    basket.push(item);
    return true;
  }
}

addItem("Bread");
addItem("Milk");
addItem("Cheese");
addItem("Cereal");
addItem("Chicken");
addItem("Lettuce");

console.log(basket);

function listItems() {
  console.log("listing Items:");

  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }

  console.log("finished listing items");
}

console.log("testing list items");

listItems();

function empty() {
  console.log("emptying basket");

  while (basket.length > 0) {
    basket.pop();
  }

  console.log("basket is now", basket);
}

console.log("testing empty function");

empty();

addItem("Bread");
addItem("Milk");
addItem("Cheese");
addItem("Cereal");
addItem("Chicken");

function isFull() {
  if (basket.length >= maxItems) {
    console.log("basket is full!");
    return true;
  } else {
    return false;
  }
}

function removeItem(item) {
  const index = basket.indexOf(item);

  console.log(number);

  if (index > -1) {
    return basket.splice(index, 1)[0];
  } else {
    return null;
  }
}

console.log(removeItem("Cheese"));
