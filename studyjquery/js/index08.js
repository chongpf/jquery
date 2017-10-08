$(document).ready(function () {
    $("#button1").on("click",function () {
        $("#div1").fadeIn(2000);
        $("#div2").fadeIn(2000);
        $("#div3").fadeIn(2000);
    });
    $("#button2").on("click",function () {
        $("#div1").fadeOut(2000);
        $("#div2").fadeOut(2000);
        $("#div3").fadeOut(2000);
    });
    $("#button3").on("click",function () {
        $("#div1").fadeToggle(2000);
        $("#div2").fadeToggle(2000);
        $("#div3").fadeToggle(2000);
    });
    $("#button4").on("click",function () {
        $("#div1").fadeTo(2000,0.5);
        $("#div2").fadeTo(2000,0.5);
        $("#div3").fadeTo(2000,0.5);
    });
});