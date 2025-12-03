let password = prompt("Entrez votre mot de passe:");

const SECRET = "12345";

if (password === SECRET) {
    console.log("Accès accordé");

} else {
    console.log("Mot de passe incorrect");
}