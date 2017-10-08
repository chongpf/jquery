$(document).ready(function () {
    $("#div1").click(function () {
        $("#div2").slideDown(1000);
    });
    $("#div3").click(function () {
        $("#div2").slideUp(1000);
    });
    $("#div4").click(function () {
        $("#div2").slideToggle(1000);
    });
});