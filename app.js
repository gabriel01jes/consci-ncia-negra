// Pequeno toque interativo :)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site do Snoop Dogg carregado com sucesso!");

    const curiosidades = document.querySelectorAll(".curiosidades li");
    curiosidades.forEach((item) => {
        item.addEventListener("click", () => {
            alert("Curiosidade: " + item.textContent);
        });
    });
});

