"use strict";

$(document).ready(() => {
  
    $(".cart").hide();
    $(".payment").hide();
    $("#receipt").hide();
  
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
        $(".cart").show();
        $(".payment").hide();

    })
    .on("click", ("#cart-close"), (event) => {
        $(".cart").hide();
    })
    .on("click", ".checkout", (event) => {
        $(".cart, #credit-payment").hide();
        $(".payment, #cash-payment").show();
        $(".cash-btn").css("opacity", "0.8").css("cursor","auto");
    })
    /* Payment Form */
    .on("click", ".pay-close", (event) => {
        $(".payment").hide();
    })
    .on("click", ".credit-btn", (event) => {
        $("#cash-payment").hide();
        $("#credit-payment").fadeIn();
        $(".credit-btn").css("opacity", "0.8").css("cursor","auto");
        $(".cash-btn").css("opacity", "1").css("cursor","pointer");
    })
    .on("click", ".cash-btn", (event) => {
        $("#credit-payment").hide();
        $("#cash-payment").fadeIn();
        $(".cash-btn").css("opacity", "0.8").css("cursor","auto");
        $(".credit-btn").css("opacity", "1").css("cursor","pointer");
    })   
/* Receipt */
    .on("click", ("#receipt-close"), (event) => {
        $("#receipt").hide();
    });



    /* Shopping Cart Additions */

    // Makes arry of doors
    const doors = [];

    // DISPLAY TOTAL
    const displayTotals = (subTotal, salesTax, total) => {
        $("#subTotal").text(`$${subTotal.toFixed(2)}`);
        $("#salesTax").text(`$${(Math.round(salesTax*100)/100).toFixed(2)}`);
        $("#total").text(`$${(Math.round(total*100)/100).toFixed(2)}`);
    };

    // Add door to cart
    const display = () => {
        let subTotal = 0;
        let salesTax = 0;
        let total = 0;
        const container = $("#door-list");
        $(container).html("");
        for (let door of doors) {
            subTotal += door.price;
            salesTax = (subTotal*.06);
            total = (subTotal+salesTax);
            container.append(`
            <section class="item">
                <p>${door.name}</p>
                <p>$${door.price}</p>
            </section>
            `);
        }
        displayTotals(subTotal, salesTax, total);
    };
    // Listens for click on cart plus, then pushes to array
    $(document).on("click", ".fa-cart-plus", (event) => {
        const doorName = event.target.parentElement.children[0].innerText;
        const doorPrice = Number(event.target.parentElement.children[1].innerText.replace(/\D/g, ''));

        doors.push({
            name: doorName,
            price: doorPrice
        });
        display();
    });


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