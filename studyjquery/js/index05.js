$(document).ready(function () {
    $("body").on("click",bodyHandler);
    $("div").on("click",divHandler1);
    $("div").on("click",divHandler2);
});

function bodyHandler(e) {
    console.log(e);
}
function divHandler1(e) {
    e.stopImmediatePropagation();
    console.log(e);
}
function divHandler2(e) {
    console.log(e);
}