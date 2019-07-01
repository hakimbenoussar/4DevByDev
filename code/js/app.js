// Menu Hamburger 
$('.header__navbar-toggle').click(function(e) {
e.preventDefault();
$('.header__navbar').toggleClass('is-open');
})

// Mon Modal
var modal = document.getElementById("myModal");

// 3 variables qui appellent, l'id src image, l'id du modal et l'id caption, tout 2 dans la div myModal
var img = document.getElementById("diagramme");
var modalImg = document.getElementById("imgDiagramme");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// le bouton span close qui sert à fermer le modal
var span = document.getElementsByClassName("close")[0];

// la fonction qui sert à fermer le modal au clic
span.onclick = function() { 
  modal.style.display = "none";
}