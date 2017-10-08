// append
// prepend
// before huanhang
// after huanhang
// html.jquery,js append
$(document).ready(function () {
    $("#btn1").click(function () {
        // $("#p1").append("this is my webpage and content");
        $("#p1").prepend("this is my webpage and content");
    });

    $("#btn2").click(function () {
        // $("#p2").before("before");
        $("#p2").after("after");
    });
});

function appendText() {
    var text1 = "<p>text1</p>";
    var text2 = $("<p></p>").text("text2");
    var text3 = document.createElement("p");
    text3.innerHTML = "text3";
    $("body").append(text1,text2,text3);
}