var span;
var btn;
var num = 0;
window.onload = function () {
    span = document.getElementById("span");
    btn = document.getElementById("btn");
    if(sessionStorage.spanNum){
      num = sessionStorage.spanNum;
    }
    btn.onclick = function () {
        num++;
        sessionStorage.spanNum = num;
        span.innerHTML=sessionStorage.spanNum;
    }
}