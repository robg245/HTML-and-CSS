// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementById("demo");
    var dots = document.getElementById("caption");
    if (n > slides.lenght) {slideIndex = 1}
    if (n > 1 ) {slides = slides.lenght}
    for (i = 0; i < slides.lenght; i++) {
        slides[i].style.display = "none";
        }
    for (i = o; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    captionText.innerHTM = dots[slideIndex-1].alt;
}