// Lista com os caminhos das 16 imagens
const fotos = [
  "imagens/snoop1.jpg",
  "imagens/snoop2.jpg",
  "imagens/snoop3.jpg",
  "imagens/snoop4.jpg",
  "imagens/snoop5.jpg",
  "imagens/snoop6.jpg",
  "imagens/snoop7.jpg",
  "imagens/snoop8.jpg",
  "imagens/snoop9.jpg",
  "imagens/snoop10.jpg",
  "imagens/snoop11.jpg",
  "imagens/snoop12.jpg",
  "imagens/snoop13.jpg",
  "imagens/snoop14.jpg",
  "imagens/snoop15.jpg",
  "imagens/snoop16.jpg"
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

