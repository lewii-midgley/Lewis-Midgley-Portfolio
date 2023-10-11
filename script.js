console.log("linked");

let titles = [' Web Developer', ' UX Designer', ' Photographer', ' Landscaper'];
let currentIndex = 0;
let aSpan = document.getElementById('heroWord');

setInterval(() => {
   
    aSpan.innerHTML= titles[currentIndex];   
    
    currentIndex++;
    
    if (currentIndex === 4)
     currentIndex = 0;
 
 }, 1500)


 $(".projects-page--projects--project1").hover(function() {
    $(".projects-page--projects--project1--h1").html("Northern Construction");
}, function() {
    $(".projects-page--projects--project1--h1").html("");
});


$(".projects-page--projects--project2").hover(function() {
    $(".projects-page--projects--project2--h1").html("Sanctuary");
}, function() {
    $(".projects-page--projects--project2--h1").html("");
});


$(".projects-page--projects--project3").hover(function() {
    $(".projects-page--projects--project3--h1").html("100% Pure New Zealand");
}, function() {
    $(".projects-page--projects--project3--h1").html("");
});


$(".projects-page--projects--project4").hover(function() {
    $(".projects-page--projects--project4--h1").html("The World News");
}, function() {
    $(".projects-page--projects--project4--h1").html("");
});


$(".projects-page--projects--project5").hover(function() {
    $(".projects-page--projects--project5--h1").html("OpenFolio");
}, function() {
    $(".projects-page--projects--project5--h1").html("");
});


$(".projects-page--projects--project6").hover(function() {
    $(".projects-page--projects--project6--h1").html("The Student Brewery");
}, function() {
    $(".projects-page--projects--project6--h1").html("");
});

$(".projects-page--projects--project7").hover(function() {
    $(".projects-page--projects--project7--h1").html("HandyFix");
}, function() {
    $(".projects-page--projects--project7--h1").html("");
});

$(".projects-page--projects--project8").hover(function() {
    $(".projects-page--projects--project8--h1").html("Surfbreak Protection Society");
}, function() {
    $(".projects-page--projects--project8--h1").html("");
});