let no = document.getElementById("no");

no.addEventListener("mouseover", function(){
  no.style.top = Math.random()*80 + "%";
  no.style.left = Math.random()*80 + "%";
});

document.getElementById("si").addEventListener("click", function(){

  document.getElementById("stitch").src =
  "https://media.tenor.com/7q8Zg6QqYJ0AAAAC/bear-kiss.gif";

  document.getElementById("question").innerHTML =
  "Gracias por permitirme ser un año más tu San Valentín 😍";

  document.getElementById("mensaje").innerHTML =
  "Mi niña hermosa ❤️";

  document.getElementById("dedicatoria").innerHTML =
  "De Edwin con mucho amor y cariño para la mujer que me hace feliz y la cual amaré por siempre 💖";

});