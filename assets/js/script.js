(function($) {
    var this_document = $(document),
        this_window = $(window),
        this_body = $('body'),
        this_mainHead = $('.stp_header--main').innerHeight();

    function hamburgerIcon() {

        $('#stp_nav-icon').click(function() {
            $(this).toggleClass('open');
            this_body.toggleClass('stp_mobile-menu--open');
        });

    }

    function mobileMenuTopCal() {
        $('.stp_nav-sidebar').css({
            "top": this_mainHead + 'px'
        });

    }

    this_document.ready(function() {
        hamburgerIcon();
        mobileMenuTopCal();
    });

    this_window.resize(function() {

    });

    this_window.scroll(function() {

    });

    this_window.load(function() {});






})(jQuery);

var megaMenu = document.getElementById('stpDropdown')
    // Insert our new styles before the first script tag
let style = document.createElement('style');
// Get the first script tag
let ref = document.querySelector('script');
var this_height = $('#stp_sub-menu').innerHeight();

megaMenu.addEventListener('show.bs.dropdown', function() {
    let body = document.getElementsByTagName("body");
    let parent = document.getElementsByClassName('stp_header--main');

    parent[0].classList.toggle('stp_full-menubg');
    body[0].classList.toggle('stp_menu-open');

    style.innerHTML = `
        .stp_header--main.stp_full-menubg:after{
            ` + 'height:' + ($('#stp_sub-menu').innerHeight() + 80) + 'px' + `;
        }
    `;
    ref.parentNode.insertBefore(style, ref);
})
megaMenu.addEventListener('hide.bs.dropdown', function() {
    let body = document.getElementsByTagName("body");
    let parent = document.getElementsByClassName('stp_header--main');
    parent[0].classList.toggle('stp_full-menubg');
    body[0].classList.toggle('stp_menu-open');
    ref.parentNode.insertBefore(style, 0);

})