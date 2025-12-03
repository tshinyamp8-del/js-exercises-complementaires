// 1. Afficher le menu
let choice = prompt(
    "Menu de calcul :\n" +
    "1 - Addition\n" +
    "2 - Soustraction\n" +
    "3 - Multiplication\n" +
    "4 - Division\n" +
    "0 - Quitter\n" +
    "Votre choix : "
);

// 2. Convertir en nombre
choice = Number(choice);

// 3. Vérifier le choix
if (choice === 0) {
    console.log("Programme terminé.");
}
else if (choice === 1 || choice === 2 || choice === 3 || choice === 4) {

    // Demander deux nombres
    let a = Number(prompt("Entrez le premier nombre : "));
    let b = Number(prompt("Entrez le deuxième nombre : "));

    let result;

    if (choice === 1) {
        result = a + b;
    } else if (choice === 2) {
        result = a - b;
    } else if (choice === 3) {
        result = a * b;
    } else if (choice === 4) {
        result = a / b;
    }

    console.log("Résultat : " + result);
}
else {
    console.log("Option invalide");
}
