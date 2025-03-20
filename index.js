/// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions
function appendCat(name) {
  return [...cats, name]; // Returns a new array with name appended
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with name prepended
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last element
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first element
}

// Export functions if needed for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

// Write your solution here!
