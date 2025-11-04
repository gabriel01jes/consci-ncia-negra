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
