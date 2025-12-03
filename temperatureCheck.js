let temp = Number(prompt("Entrez la température :"));

if (temp < 0) {
    console.log("Il gèle");
} else if (temp <= 15) {
    console.log("Froid");
} else if (temp <= 25) {
    console.log("Agréable");
} else if (temp <= 35) {
    console.log("Chaud");

} else {
    console.log("Canicule");
}

