var it_url = 0;
var m = null;
$(document).ready(function () {
    $("body").ready(myclock = function () {
        d = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        $("input[name='fdate']").val(d.toLocaleDateString("ru", options));
        $("input[name='fclock']").val(d.toLocaleTimeString());
        setTimeout("myclock();", 500);
    });
    $('#datetime').hover(function () {
        $('#datetime').toggleClass('datetime');
    });

    $('#head-logo').mouseover(logoAnim = function () {
            var url = ['img/logo1.png', 'img/logo2.png', 'img/logo3.png', 'img/logo4.png'];
            $("#logoPicture").attr("src", url[it_url]);
            it_url++;
            if (it_url > 3)
                it_url = 0;
            m = setTimeout("logoAnim();", 500);
        })
        .mouseout(function () {
            clearTimeout(m);
        });
});