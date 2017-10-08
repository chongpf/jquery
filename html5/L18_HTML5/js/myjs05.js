var textarea;
var btn;
window.onload = function () {
    ta = document.getElementById("textarea");
    if(localStorage.textareaId){
        ta.value = localStorage.textareaId;
    }
    btn = document.getElementById("btn");
    btn.onclick = function () {
        localStorage.textareaId = ta.value;
    }
}