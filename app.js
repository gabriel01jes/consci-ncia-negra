// Código para mudar a cor de fundo do site ao clicar em um botão
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const changeColorButton = document.createElement('button');
  changeColorButton.textContent = "Mudar cor de fundo";
  changeColorButton.style.padding = "10px 20px";
  changeColorButton.style.backgroundColor = "#3f51b5";
  changeColorButton.style.color = "white";
  changeColorButton.style.border = "none";
  changeColorButton.style.cursor = "pointer";
  changeColorButton.style.marginTop = "20px";
  
  document.querySelector('.container').appendChild(changeColorButton);

  changeColorButton.addEventListener('click', function() {
    const colors = ['#e30d0dff', '#e1220cff', '#f0f8ff', '#f5fffa', '#f0fff0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  });
});
