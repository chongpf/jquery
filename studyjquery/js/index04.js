$(document).ready(function () {
    // $("#buttonid").click(function () {
    //
    // // });
    // $("#buttonid").bind("click",clickHandler1);
    // $("#buttonid").bind("click",clickHandler2);
    //
    //  $("#buttonid").unbind("click");

    $("#buttonid").on("click",clickHandler1);
    $("#buttonid").on("click",clickHandler2);

      $("#buttonid").off("click");

});

function clickHandler1(e) {
    console.log("click me 1");
}

function clickHandler2(e) {
    console.log("click me 2");
}