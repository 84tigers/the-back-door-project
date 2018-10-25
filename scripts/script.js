"use strict";

$(document).ready(() => {
  
    $(".cart").hide()
    $(".payment").hide()
  
    $(document)
    /* Drop-down menu */
    .on("click", ".fa-bars", (event) => {
        $(".drop-menu").css("display", "flex");
        $(event.target).hide();
        $(".menu-close").show();
    })
    .on("click", ".menu-close", (event) => {
        $(".drop-menu").hide();
        $(event.target).hide();
        $(".fa-bars").show();
    })
    /* Shopping Cart */
    .on("click", ".shopping-cart", (event) => {
        $(".cart").show()
    })
    .on("click", ("#close-btn"), (event) => {
        $(".cart").hide();
    })
    .on("click", ".checkout", (event) => {
        $(".cart").hide();
        $(".payment").show();
    })

});

/* Carousel */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}