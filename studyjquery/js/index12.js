$(document).ready(function () {
   $("#btn1").click(function () {
       $("#p1").text("baidu");
   }) ;

   $("#btn2").click(function () {
       $("#p2").html("<a href='http://www.baidu.com'>baidu new</a>")
   });

    $("#btn3").click(function () {
        $("#text1").val("baidu new3");
    });

    $("#btn4").click(function () {
        $("#a1").text("http://www.jikexueyuan.com");
        $("#a1").attr({
            "href":"http://www.jikexueyuan.com",
            "tittle":"mytittle"
        });
    });

    $("#btn5").click(function () {
        $("#p5").text(function (i,ot) {
            return "old:"+i+ot+"new:this is new";
        })
    });
});