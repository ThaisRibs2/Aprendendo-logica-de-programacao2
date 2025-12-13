let nomeCompleto = prompt("Digite seu nome completo:");

let nomeSemEspacos = nomeCompleto.replace(/\s+/g, '');
let totalLetras = nomeSemEspacos.length;

alert("Seu nome completo tem " + totalLetras + " letras.");