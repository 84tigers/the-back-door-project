"use strict";

$(document).ready(() => {

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




});