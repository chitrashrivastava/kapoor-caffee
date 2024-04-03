var page1 = document.querySelector(".page1")
var page2 = document.querySelector(".page2")

page2.addEventListener("click",function(){
    page2.style.top="-100%"
    
})
page1.addEventListener("click",function(){
    page2.style.top = "0"
})


var tl = gsap.timeline()

tl.from("nav>.lnav",{
    y:-55,
    opacity:0,
    delay:3.2,
    duration:1,
    stagger:0.5,
    backgroundColor:"white",
})
tl.from("nav>.rnav",{
    y:-55,
    opacity:0,
    duration:1,
    stagger:0.7,
})
tl.from(".page h1",{
    x:-100,
    opacity:0,
    stagger:0.3,
})
tl.from(".page #leftimage,.page #rightimage",{
scale:0,
opacity:0,
scrollTrigger:{
    trigger:"#leftimage",
    scroller:"body",
    marker:true,
    start:"top 150%"
  }
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:17,
    repeat:-3,
    duration:0.7,
    yoyo:true
})
// gsap.from(".heading>h4",{
//     x:-65,
//     opacity:0,
//     delay:0.5,
//     duration:1,
//     stagger:0.3,
// })