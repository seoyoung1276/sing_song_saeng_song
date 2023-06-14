// 장르 선택 
var kpop = document.getElementById("kpopbutton");
var bal = document.getElementById("balbutton");
var hiphop = document.getElementById("hiphopbutton");
var indy = document.getElementById("indybutton");
var pop = document.getElementById("popbutton");
var genre = "";

kpop.addEventListener("click", function(){
    genre = "kpop";
    window.location.href = 'songKpop/Choice.html';
});

bal.addEventListener("click", function(){
    genre = "bal";
    window.location.href = 'songBal/Choice.html';
});

hiphop.addEventListener("click", function(){
    genre = "hiphop";
    window.location.href = 'songHiphop/Choice.html';
});

indy.addEventListener("click", function(){
    genre = "indy";
    window.location.href = 'songIndy/Choice.html';
});

pop.addEventListener("click", function(){
    genre = "pop";
    window.location.href = 'songPop/Choice.html';
});

