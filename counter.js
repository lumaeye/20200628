$(document).ready(function () {

    $(window).scroll(function(){

        var offset = $("#tast").offset();
        var top = offset.top;
        var left = offset.left;

        console.log("元素上方:"+top)

        var windowTop=(window).scrollTop();
        console.log("視窗的上方"+windowTop)
    })
});




});