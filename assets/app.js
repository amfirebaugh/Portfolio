$(document).ready(function(){
    $('.parallax').parallax();
});

// $("#projectLink").on("click", function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#alliePortfolio").offset().top
//     }, 1300);
// });

// $("#contactLink").on("click", function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#allieContact").offset().top
//     }, 1300);
// });

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

$("#navProjectLink").on("click", function(alliePortfolio) {
    return 'a[href="' + alliePortfolio +'"]';
})