
window.onload = function () {
    document.body.innerHTML="<canvas id=\"canvas\">";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.fillRect(0,0,100,100);
}