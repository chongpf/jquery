$(document).ready(function () {
    $(window).on("load",function () {
    imgLocation();

    var dataImg={"data":[{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},
        {"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},
        {"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"},{"src":"image/image10.jpg"}]}

    window.onscroll = function () {
        if (scrollSide()){
            $.each(dataImg.data,function (index,value) {

                var img = $("<img>");
                img.attr("src", "./" + $(value).attr("src"));// == value.src
                console.log(img);
                console.log(img[0].getAttribute("src"));

                var boxcontent = $("<div>");
                boxcontent.addClass("content");

                var boxImage = $("<div>");
                boxImage.addClass("box");

                boxcontent.append(img);
                boxImage.append(boxcontent);
                $("#container").append(boxImage);
            });

            imgLocation();
        }
    }
    })
});

function scrollSide() {
    var box = $(".box").last();
    var lastBoxHeight= box.position().top + Math.floor(box.outerHeight());
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    console.log(lastBoxHeight+" "+documentHeight+" "+scrollHeight);
    if(lastBoxHeight<documentHeight+scrollHeight){
        return true;
    }else{
        return false;
    }
}

function imgLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function (index,value) {
        // console.log(value.className);
   //     console.log($(value).height() + "   " + box.eq(index).height());
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index] = boxHeight;

        }else{
            var minHeight = Math.min.apply(null,boxArr);

            var minboxIndex = $.inArray(minHeight,boxArr);
            $(value).css({
                position: "absolute",
                top: minHeight,
                left: minboxIndex * boxWidth
            });
            boxArr[minboxIndex] += $(value).height();
        }
    })
}