let hora = 10; // Exemplo de hora atual
let dia;

if (hora >= 6 && hora < 18) {
    dia = true; // Está de dia
} else {
    dia = false; // Está de noite
}

if (dia) {
    console.log("Está de dia");
} else {
    console.log("Está de noite");
}
