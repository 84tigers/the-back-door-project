"use strict";

$(document).ready(() => {
    $(".cart").hide()
    $(".payment").hide()
    $(document)
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