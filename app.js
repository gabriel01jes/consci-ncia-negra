// Lista com os caminhos das 16 imagens
const fotos = [
  "imagens/sp1.jpg",
  "imagens/sp2.jpg",
  "imagens/sp3.jpg",
  "imagens/sp4.jpg",
  "imagens/sp5.jpg",
  "imagens/sp6.jpg",
  "imagens/sp7.jpg",
  "imagens/sp8.jpg",
  "imagens/sp9.jpg",
  "imagens/sp10.jpg",
  "imagens/sp11.jpg",
  "imagens/sp12.jpg",
  "imagens/sp13.jpg",
  "imagens/sp14.jpg",
  "imagens/sp15.jpg",
  "imagens/sp16.jpg"
];

let indice = 0;
const fotoAtual = document.getElementById("fotoAtual");

function mostrarFoto() {
  fotoAtual.src = fotos[indice];
}

// Botões de navegação
function proximaFoto() {
  indice = (indice + 1) % fotos.length;
  mostrarFoto();
}

function voltarFoto() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  mostrarFoto();
}

// Troca automática a cada 5 segundos
setInterval(proximaFoto, 5000);

