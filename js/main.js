//Smooth Scrolling
var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 550);
    return false;
});

//Responsive Menu
function menu() {
    let navbar = document.getElementById('navbar');
    if navbar.className == 'navClass') {
        navbar.className += 'responsive';
    }else {
        navbar.className = "navClass";
    }
}