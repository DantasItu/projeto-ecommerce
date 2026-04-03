var elemsCarrosselBotao = document.querySelectorAll(".carrossel__botao");
var elemCarrosselImagens = document.querySelector(".carrossel__imagens");

function rodarCarrocell(i) {
  var itemAnt = i - 1;

  if (i == 0) {
    itemAnt = 1;
  }

  elemsCarrosselBotao[itemAnt]
    .querySelector("div")
    .classList.remove("carrossel__preenchimento--completo");

  elemCarrosselImagens.style = "transform: translateX(-" + i * 100 + "%)";

  elemsCarrosselBotao[i]
    .querySelector("div")
    .classList.add("carrossel__preenchimento--completo");

  var poxItem = i + 1;

  if (i == 1) {
    poxItem = 0;
  }

  setTimeout(function () {
    rodarCarrocell(poxItem);
  }, 5000);
}

setTimeout(function () {
  rodarCarrocell(0);
}, 1000);
