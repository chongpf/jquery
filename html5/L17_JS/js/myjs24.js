window.onload = function () {
    imgLocation("container","box");

    var imgData = {
            "data":[
                {"src":"../image/image1.jpg"},
                {"src":"../image/image1.jpg"},
                {"src":"../image/image1.jpg"},
                {"src":"../image/image1.jpg"},
                {"src":"../image/image2.jpg"},
                {"src":"../image/image2.jpg"},
                {"src":"../image/image2.jpg"},
                {"src":"../image/image3.jpg"},
                {"src":"../image/image3.jpg"},
                {"src":"../image/image3.jpg"},
                {"src":"../image/image4.jpg"},
                {"src":"../image/image4.jpg"},
                {"src":"../image/image4.jpg"},
                {"src":"../image/image5.jpg"},
                {"src":"../image/image5.jpg"}
            ]
        };
    window.onscroll = function () {

      if(checkFlag()){

          var eParent = document.getElementById("container");
          for(var i = 0;i<imgData.data.length;i++){
             var eBox = document.createElement("div");
             eBox.className= "box";

             var eBoximage = document.createElement("div");
             eBoximage.className = "box_img";

             var eImg = document.createElement("img");
             eImg.src = imgData.data[i].src;
             eBoximage.appendChild(eImg);
             eBox.appendChild(eBoximage);
             eParent.appendChild(eBox);
          }
      }
        imgLocation("container","box");
    }
}

function checkFlag() {
   var eParent = document.getElementById("container");
   var eChildren = getChildren(eParent,"box");
   var bottumTop = eChildren[eChildren.length-1].offsetTop;
   var scroolTop = document.documentElement.scrollTop | document.body.scrollTop;
   var clientHeight = document.documentElement.clientHeight;
   console.log(bottumTop+" "+scroolTop+" "+clientHeight);
   if(bottumTop<scroolTop+clientHeight){
       return true;
   }
}

function imgLocation(pName,childClassName) {
    var eParent = document.getElementById(pName);
    var eChildren = getChildren(eParent,childClassName);
    var imageWidth = eChildren[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imageWidth);
    eParent.style.cssText = "width:"+cols*imageWidth+"px;margin:0 auto;";

    var boxHeightArr = [];
    for(var i = 0;i<eChildren.length;i++){
        if(i<cols){
            boxHeightArr[i] = eChildren[i].offsetHeight;
            console.log(boxHeightArr[i]);
        }else{
            var minHeight = Math.min.apply(null,boxHeightArr);
            eChildren[i].style.position = "absolute";
            eChildren[i].style.top = minHeight+"px";
            var minIndex = getMinIndex(boxHeightArr,minHeight);
            eChildren[i].style.left= imageWidth * minIndex+"px";

            boxHeightArr[minIndex] += eChildren[i].offsetHeight;
        }
    }
}
function getChildren(eParent,className) {
   var children = [];
   var allEles= eParent.getElementsByTagName("*");
   for(var i = 0;i<allEles.length;i++){
       if(allEles[i].className == className){
           children.push(allEles[i]);
       }
   }
   return children;
}
function getMinIndex(boxHeightArr,minHeight) {
    for(var i=0;i<boxHeightArr.length;i++){
        if(boxHeightArr[i]==minHeight){
            return i;
        }
    }
    return 0;
}