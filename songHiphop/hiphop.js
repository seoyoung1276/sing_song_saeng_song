var i = 0;

var hiphop = [
 {
    title: "김승민 - Deap Sea",
    answer: ["deap sea", "deap Sea", "딥씨", "딥시", "Deap sea", "Deap Sea", "deapsea", "Deapsea","deapSea"],
    secondsong: 'songs/김승민 - deapsea.mp3',
    hint:"ㄷㅆ",
    answersong: 'songs/A김승민 - deapsea.mp3',
    answerimage: 'image/1.jpg'
 },
  
 {
    title: "더콰이엇 - Prime Time",
    answer: ["primetime", "primeTime", "PrimeTime", "Primetime", "프라임 타임", "프라임타임", "prime time", "prime Time", "Prime Time", "Prime time"],
    secondsong: 'songs/더콰이엇 - primetime.mp3',
    hint: "ㅍㄹㅇㅌㅇ",
    answersong: 'songs/A더콰이엇 - primetime.mp3',
    answerimage: 'image/2.jpg'
 }
];


var musicTitle = document.getElementsByClassName("musicTitle").textContent = hiphop[i].title;
var nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function(){
    i++;
    window.location.href = 'Answer.html';
});


