$(document).ready(function () {
    $("a").click(function () { 
        var movimiento = this.hash
        $("html, body").animate(
            {
                scrollTop: $(movimiento).offset().top-35
            },
            1500
        )
        
    });
});