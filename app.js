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
const foto = document.getElementById("fotoAtual");

function atualizarFoto() {
  foto.classList.remove("mostrar");
  setTimeout(() => {
    foto.src = fotos[indice];
    foto.classList.add("mostrar");
  }, 300);
}

function proximaFoto() {
  indice = (indice + 1) % fotos.length;
  atualizarFoto();
}

function voltarFoto() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  atualizarFoto();
}

// Troca automática a cada 4 segundos
setInterval(proximaFoto, 4000);

// Mostra a primeira imagem com fade
window.onload = () => {
  foto.classList.add("mostrar");
};
