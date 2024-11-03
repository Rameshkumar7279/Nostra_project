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
// slider Navbar

var right=document.getElementById("right")
var left=document.getElementById("left")
var img24=document.getElementById("img24")
var slidermargin=0

right.addEventListener("click",

    function(){
        slidermargin=slidermargin+100
    
        if(slidermargin>200)
        {
            slidermargin=0
            img24.style.marginLeft=0;
        }
        else{
            img24.style.marginLeft="-"+slidermargin+"vw";
        }
    })
    
left.addEventListener("click",

    function(){
    
        if(slidermargin==0)
        {
           
            slidermargin=200
            img24.style.marginLeft="-"+slidermargin+"vw";
        }
        else{
    
            slidermargin=slidermargin-100
            img24.style.marginLeft="-"+slidermargin+"vw";
        }
        
        
    }
    )
    
    