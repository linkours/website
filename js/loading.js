var oBtn = document.getElementsByTagName('button')[0];
var aImages = document.getElementsByClassName('afterLoad');
loadImg(aImages);
window.onscroll = function(){
  loadImg(aImages);
};
function loadImg(arr){
  for( var i = 0,len = arr.length; i < len; i++){
    if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad){
      arr[i].isLoad = true;
      arr[i].style.cssText = "transition: ''; opacity: 0;"
      if(arr[i].dataset){
        aftLoadImg(arr[i],arr[i].dataset.original); 
      }else{
        aftLoadImg(arr[i],arr[i].getAttribute("data-original"));
      }
      (function(i){
        setTimeout(function(){
          arr[i].style.cssText = "transition: 1s; opacity: 1;"
        },16)
      })(i);
    }
  }
}
function aftLoadImg(obj,url){
  var oImg = new Image();
  oImg.onload = function(){
    obj.src = oImg.src;
  }
  oImg.src = url;
}


