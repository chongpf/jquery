$(document).ready(function () {
    $("#btnid1").click(function () {
        $("p").hide(2000);
    });

    $("#btnid2").click(function () {
        $("p").show(2000);
    });
    
    $("#btnid3").click(function () {
        $("p").toggle();
    });
});