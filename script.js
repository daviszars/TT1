AOS.init();
/*****************************************************/
function validateForm() { 
  var x = document.forms["myForm"]["firstname"].value;
  if (x == null || x == "") {
  alert("First Name empty");
  return false;
  }
    else var y = document.forms["myForm"]["lastname"].value;
    if (y == null || y == "") {
    alert("Last Name empty");
    return false;
    }
      else var z = document.forms["myForm"]["e-mail"].value;
      if (z == null || z == "") {
      alert('E-mail empty');
      return false;
      }
        else var z = document.forms["myForm"]["e-mail"].value;
        var filter = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!filter.test(z)) {
        alert('E-mail incorrect');
        return false;
        }
          else var xyz = document.getElementById('model');
          if (!xyz.value) {
          alert('Car model not selected');
          return false;
          }

  alert('Our sales manager will soon contact you!');
}
/*****************************************************/
$(document).on('click', '.collapsible', function () {
  $(this).toggleClass('collapsed');
});
/*****************************************************/
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*****************************************************/