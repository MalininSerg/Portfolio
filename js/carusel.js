    function resize() {
        $('#slider').height($('#slider').children('.aslide').height());
    }
    $(window).resize(resize);
    $(window).load(resize);