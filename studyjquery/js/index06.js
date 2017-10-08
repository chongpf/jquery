$(document).ready(function () {
     var MyEvent = jQuery.Event("MyEvent");

    $("#btnid").on("click",function () {
       $("#btnid").trigger(MyEvent);
    });

    $("#btnid").on("MyEvent",function (e) {
       console.log(e);
    });
});