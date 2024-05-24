var login=document.querySelector(".header form .btn1")
function logclick(){
  prompt("Email adress")
 
}
login.onclick=logclick

var btn=document.querySelectorAll(".sec3 .body1 button")
btn.forEach(function(item){
  item.onclick=function(){
    alert("تم نسخ الرساله ")
  }

})
function fun(){
  alert("تم نسخ الرساله ")
}