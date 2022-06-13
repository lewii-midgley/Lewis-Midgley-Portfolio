console.log("linked");

let titles = [' Web', ' UX', ' UI', ' Graphic'];
let currentIndex = 0;
let aSpan = document.getElementById('heroWord');

setInterval(() => {
   
    aSpan.innerHTML= titles[currentIndex];   
    
    currentIndex++;
    
    if (currentIndex === 4)
     currentIndex = 0;
 
 }, 1500)


 $(".project1").hover(function() {
    $(".project1--h1").html("HandyFix Website Re-Build");
}, function() {
    $(".project1--h1").html("");
});


$(".project2").hover(function() {
    $(".project2--h1").html("New Zealand SurfBreak Protection Website");
}, function() {
    $(".project2--h1").html("");
});


$(".project3").hover(function() {
    $(".project3--h1").html("Sanctuary - Full Stack Application");
}, function() {
    $(".project3--h1").html("");
});