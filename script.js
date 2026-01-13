const prices = {
  popcorn: 4.5,
  soda: 2.5,
  candy: 1.75,
  nachos: 5.0,
  icecream: 3.25,
};

const cart = document.getElementById("shopping-cart");
const totalSpan = document.getElementById("total-span");

let total = 0;

function addToCart(itemName, price) {
    const item = document.createElement("p");
  item.textContent = `${itemName} - $${price.toFixed(2)}`;
  cart.appendChild(item);
  total += price;
  totalSpan.textContent = total.toFixed(2);
}

document.getElementById("popcorn").addEventListener("click", () => {
    addToCart("🍿 Popcorn", prices.popcorn);
});

document.getElementById("soda").addEventListener("click", () => {
  addToCart("🥤 Soda", prices.soda);
});

document.getElementById("candy").addEventListener("click", () => {
  addToCart("🍬 Candy", prices.candy);
});

document.getElementById("nachos").addEventListener("click", () => {
  addToCart("🧀 Nachos", prices.nachos);
});

document.getElementById("icecream").addEventListener("click", () => {
  addToCart("🍦 Ice Cream", prices.icecream);
});