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
  "imagens/snoop10.jpg"
];

let indice = 0;
const foto = document.getElementById("fotoAtual");
const audio = document.getElementById("audioSnoop");
const btnMusica = document.getElementById("btnMusica");

// Função para trocar imagem
function atualizarFoto() {
  foto.classList.remove("mostrar");
  setTimeout(() => {
    foto.src = fotos[indice];
    foto.classList.add("mostrar");
  }, 200);
}

function proximaFoto() {
  indice = (indice + 1) % fotos.length;
  atualizarFoto();
}

function voltarFoto() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  atualizarFoto();
}

// Troca automática a cada 4s
setInterval(proximaFoto, 4000);

// Música play/pause
btnMusica.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnMusica.textContent = "⏸️ Pausar Música";
  } else {
    audio.pause();
    btnMusica.textContent = "🎵 Tocar Música";
  }
});

// Mostra a primeira imagem ao carregar
window.onload = () => {
  foto.classList.add("mostrar");
};
