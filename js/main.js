//Animations

//Smooth Scrolling
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 550);
    return false;
});
