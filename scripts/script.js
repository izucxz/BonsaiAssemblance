$('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
$('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});
$('.quantity_inner .quantity').bind("change keyup input click", function() {
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});
var minOffset = 50;
window.onscroll = function() {
    let has_class = document.body.classList.contains("is_scrolled");
    if (minOffset < document.documentElement.scrollTop) {
        if (!has_class) {
            document.body.classList.add("is_scrolled");
        }
    } else if (has_class) {
        document.body.classList.remove("is_scrolled")
    }
}
var burger = document.querySelector('.header_burger');
var menu = document.querySelector('.header_nav');
burger.addEventListener('click', function() {
    document.body.classList.add("active");;
});
var close = document.querySelector('.header_nav-close');
close.addEventListener('click', function() {
    document.body.classList.remove("active");;
});
var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};
var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);
flkty.on('scroll', function() {
    flkty.slides.forEach(function(slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = x + 'px';
    });
});