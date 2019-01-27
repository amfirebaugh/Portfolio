$(document).ready(function(){
    $('.parallax').parallax();
});

$("#projectLink").on("click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#alliePortfolio").offset().top
    }, 1300);
});

$("#contactLink").on("click", function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#allieContact").offset().top
    }, 1300);
});