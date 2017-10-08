$(document).ready(function () {
   var str;
   str = "height:" + $("#div1").height();
   str += " width" + $("#div1").width();
    str += " innderWidth" + $("#div1").innerWidth();
    str += " outerWidth" + $("#div1").outerWidth(true);
    str += " outerWidth" + $("#div1").outerWidth(false);
    str += " outerWidth" + $("#div1").outerWidth();
    str += " div1 offset" + $("#div1").offset().top +" "+ $("#div1").offset().left;
    str += " div1 position" + $("#div1").position().top +" "+ $("#div1").position().left;
    str += " div1 scroll" + $("#div1").scrollTop()+" "+ $("#div1").scrollLeft();
    str +="---------------div2---------------";
    str += "height:" + $("#div2").height();
    str += " width" + $("#div2").width();
    str += " innderWidth" + $("#div2").innerWidth();
    str += " outerWidth" + $("#div2").outerWidth(true);
    str += " outerWidth" + $("#div2").outerWidth(false);
    str += " outerWidth" + $("#div2").outerWidth();
    str += " div2 offset" + $("#div2").offset().top +" "+ $("#div2").offset().left;
    str += " div2 position" + $("#div2").position().top +" "+ $("#div2").position().left;
    str += " div2 scroll" + $("#div2").scrollTop()+" "+ $("#div2").scrollLeft();

    // str += " scrolltop" + $("#div1").scrollTop;
    // str += " scrollleft" + $("#div1").scrollLeft;

    console.log(str);
    alert(str);
});