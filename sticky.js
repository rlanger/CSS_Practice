$(window).load(function(){
$(function() {
    var move = function() {
        var scrtop = $(window).scrollTop();
        var offtop = $("#scroller-anchor").offset().top;
        var scr = $("#scroller");
        if(scrtop > offtop) {
            scr.css({
                position: "fixed",
                top: "0px",
                left: "50%",
                'margin-left': "-210px"
            });
        } else {
            if(scrtop <= offtop) {
                scr.css({
                    position: "relative",
            		left: "0%",
                    top: "",
                    'margin-left': "0px"
                });
            }
        }
    };
    $(window).scroll(move);
    move();
});
});