let amount = Number(prompt("Montant de l'achat :"));
let discount = 0;

if (amount < 50) {
    discount = 0;
} else if (amount <= 100) {
    discount = 0.10;
} else if (amount <= 200) {
    discount = 0.15;
} else {
    discount = 0.20;
}

let finalAmount = amount - (amount * discount);

console.log("Montant final après réduction : " + finalAmount + "€");

