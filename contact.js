var offerbar=document.querySelector(".offerbar")
var off=document.getElementById("close")
off.addEventListener("click",function(){
    offerbar.style.display="none"
})
// side Navbar

var menubar=document.getElementById("menubar")
var menu=document.getElementById("menu")
var closebar=document.getElementById("closebar")
menu.addEventListener("click",function()
{
    menubar.style.right=0
})
closebar.addEventListener("click",function(){
    menubar.style.right="-40%"
})