// script fechar e abrir menu lateral
var elemsMenuCabecalho = document.querySelectorAll(".menu__expancivel");

elemsMenuCabecalho.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.classList.toggle("menu__expancivel--aberto");
  });
});
