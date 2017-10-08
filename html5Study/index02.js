var divNum;
var work = null;
window.onload = function () {
    divNum = document.getElementById("divNum");
    document.getElementById("start").onclick = startWorker;
    document.getElementById("stop").onclick = stopWorker;
}

function startWorker() {
    if(work != null){
        return;
    }
    var work = new Worker("index02_count.js");
    work.onmessage = function (e) {
        divNum.innerHTML = e.data;
    }
}

function stopWorker() {

        work.terminate();
        work = null;

}