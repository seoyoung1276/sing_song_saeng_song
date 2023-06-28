var pop = [
 {
    title: "Ava Max - Sweet But Psycho",
    answer: ["sweetbutpsycho"],
    secondsong: 'songs/avamax - sweetbutpsycho.mp3',
    hint:"ㅅㅇ ㅂ ㅅㅇㅋ",
    answersong: 'songs/Aavamax - sweetbutpsycho.mp3',
    answerimage: 'images/1.jpg'
 },
  
 {
    title: "Billie Eilish - Wish You Were Gay",
    answer: ["wishyouweregay"],
    secondsong: 'songs/billieeilish - wishyouweregay.mp3',
    hint: "ㅇㅅ ㅇ ㅇ ㄱㅇ",
    answersong: 'songs/Abillieeilish - wishyouweregay.mp3',
    answerimage: 'images/2.jpg'
 },
 {
   title: "Charlieputh - Dangerously",
   answer: ["dangerously"],
   secondsong: 'songs/charlieputh - dangerously.mp3',
   hint: "ㄷㅇㅈㄹㅅㄹ",
   answersong: 'songs/Acharlieputh - dangerously.mp3',
   answerimage: 'images/3.jpg'
},
{
   title: "Christopher - Bad",
   answer: ["bad"],
   secondsong: 'songs/crishtopher - bad.mp3',
   hint: "ㅂㄷ",
   answersong: 'songs/Acrishtopher - bad.mp3',
   answerimage: 'images/4.jpg'
},
{
   title: "Dua Lipa - Levitating",
   answer: ["levitating"],
   secondsong: 'songs/dualipa - levitating.mp3',
   hint: "ㄹㅂㅌㅇㅌ",
   answersong: 'songs/Adualipa - levitating.mp3',
   answerimage: 'images/5.jpg'
},
{
   title: "Jawsh 685 - Savage Love",
   answer: ["savagelove"],
   secondsong: 'songs/jawsh685 - savegelove.mp3',
   hint: "ㅅㅂㅈ ㄹㅂ",
   answersong: 'songs/Ajawsh685 - savegelove.mp3',
   answerimage: 'images/6.jpg'
},
{
   title: "Justin Bieber - Love Youreself",
   answer: ["loveyourself"],
   secondsong: 'songs/justinbieber - loveyourself.mp3',
   hint: "ㄹㅂ ㅇㅇㅅㅍ",
   answersong: 'songs/Ajustinbieber - loveyourself.mp3',
   answerimage: 'images/7.jpg'
},
{
   title: "Lauv - Paris in the Rain",
   answer: ["parisintherain"],
   secondsong: 'songs/lauv - parisintherain.mp3',
   hint: "ㅍㄹㅅ ㅇ ㄷ ㄹㅇ",
   answersong: 'songs/Alauv - parisintherain.mp3',
   answerimage: 'images/8.jpg'
},
{
   title: "Nicki Minaj - Super Freaky Girl",
   answer: ["superfreakygirl"],
   secondsong: 'songs/nickiminaj - superfreakygirl.mp3',
   hint: "ㅅㅍ ㅍㄹ ㄱ",
   answersong: 'songs/Anickiminaj - superfreakygirl.mp3',
   answerimage: 'images/9.jpg'
},
{
   title: "Role Model - Hello",
   answer: ["hello"],
   secondsong: 'songs/rolemodel - hello.mp3',
   hint: "ㅎㄹ",
   answersong: 'songs/Arolemodel - hello.mp3',
   answerimage: 'images/10.jpg'
 },
];

var bol = false;
var i = 0; 

const cover = document.getElementById("coverbox");
const songbox = document.getElementById("songbox");
const hint = document.getElementById("hint");
const musicTitle = document.getElementById("musicTitle");
const playBtn = document.getElementById("playBtn");
const startBtn = document.getElementById("startBtn");
let answerimage = document.getElementById("answerimage");
let inputanswer = document.getElementById("inputanswer");
let playBtns = document.getElementById("play");
let answer ="";
let currentTime = 0;
let cnt = 10;
let isPlaying = false;
let gotoPass = false;

var secondsong = new Audio(pop[i].secondsong);
var answersong = new Audio(pop[i].answersong);
var songPath2 = pop[i].secondsong;
var songPath = pop[i].answersong;

function createKeyframes() {
 var style = document.createElement('style');
 style.type = 'text/css';
 
 var keyframes = '\
   @keyframes lineMove {\
     0% {\
       width: 0;\
     }\
     100% {\
       width: 100%;\
     }\
   }';

 style.appendChild(document.createTextNode(keyframes));
 document.head.appendChild(style);
}

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
 startBtn.addEventListener("click", function(){
             secondsong = new Audio(pop[0].secondsong);
             secondsong.play();
             isPlaying = true;
             hint.textContent = pop[0].hint;
             createKeyframes();
     })
}

cover.style.display = 'none';
musicTitle.style.display = 'none';


// 문제 화면
function nextquiz() {
 if(bol === false){
     secondsong.pause();
     isPlaying = false;
     inputanswer.value = null;
     inputanswer.style.display = 'block';
     cover.style.display = 'none';
     musicTitle.style.display = 'none';
     songbox.style.display = 'grid';
     hint.style.display = 'block';
     hint.textContent = pop[i].hint;
     secondsong = new Audio(pop[i].secondsong);
     secondsong.play();
     isPlaying = true;
     
 }
}

// 노래 재생 & 멈춤 버튼 (다시 재생 됨)
if (typeof playBtn !== 'undefined' && playBtn !== null) {
 playBtn.addEventListener("click", function() {
   if (bol === false) {
     if(isPlaying) {
         secondsong.pause();
         currentTime = secondsong.currentTime;
         isPlaying = false;
     }else{
         secondsong.currentTime = currentTime;
         secondsong.play();
         isPlaying = true;
     }
   } else {
     if (isPlaying) {
       answersong.pause();
       currentTime = answersong.currentTime;
       isPlaying = false;
     } else {
       answersong.currentTime = currentTime;
       answersong.play();
       isPlaying = true;
     }
   }
 });
}

// 스페이스 눌러도 노래 멈추게 하고픔
function spacetopause(event) {
 if (event.key === ' ') {
     if(bol === true){
         if (isPlaying) {
             answersong.pause();
             currentTime = answersong.currentTime;
             isPlaying = false;
         } else {
             answersong.currentTime = currentTime;
             answersong.play();
             isPlaying = true;
         }
     }else{
         if(isPlaying) {
             secondsong.pause();
             currentTime = secondsong.currentTime;
             isPlaying = false;
         }else{
             secondsong.currentTime = currentTime;
             secondsong.play();
             isPlaying = true;
         }
     }
 }
}

document.addEventListener('keydown', spacetopause);




// 엔터 키 동작
function handleEnterKey(event) {
 if(event.key === 'Enter'){
     input();
 }
}

inputanswer.addEventListener('keydown', handleEnterKey)

function input() {
 answer = inputanswer.value;
  //패스
  if(answer === "pass"){
     if(i <= 8){
         var passtoNext = confirm("패스하시겠습니까?")
         if(passtoNext){
             cnt--;
             i++;
             nextquiz();
             return alert("다음 문제로 넘어갑니다.");
         }
     }else{
        if(bol === false){
         passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
         if(passtoNext){
             cnt--;
             alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
            return location.href = "../index.html";
         }
        }
     }
 }
 checkanswer();
}

// 정답 체크
function checkanswer() {
 var isCorrect = pop[i].answer.some(function(answer){
    return answer === inputanswer.value.split(' ').join('').toLowerCase();
 });
      
 // 정답이 맞을 때
 if (isCorrect) {
     bol = true; 
     cover.style.display = 'block';
     musicTitle.style.display = 'block';
     inputanswer.style.display = 'none';
     answerimage.src = pop[i].answerimage;
     musicTitle.textContent = pop[i].title;
     songbox.style.display = 'none';
     playBtn.style.marginTop = '4%';
     document.getElementById('coverbox').style.marginTop = '14%';
     secondsong.pause();
     answersong = new Audio(pop[i].answersong);
     answersong.play();
     isPlaying = true;
     i++; // 다음 문제로 넘어감
     alert("정답입니다!");
 // 정답이 아닐 때
 } else {
     alert("땡! 다시 입력해보세요");
     inputanswer.value = null;
 }


}

// 다음 문제 버튼 클릭시
if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
 nextBtn.addEventListener("click", function(){
     if (i <= 8) {
         if (bol === true) {
             bol = false;
             answerimage.src = "../images/question-mark-icon.png";
             secondsong.pause();
             answersong.pause();
             nextquiz();
         } else {
             if (i <= 8) {
                 passtoNext = confirm("패스 하시겠습니까?");
                 if (passtoNext) {
                     i++
                     cnt--;
                     nextquiz();
                     return alert("다음 문제로 넘어갑니다.");
                 }
             } else {
                 passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
                 if (passtoNext) {
                     cnt--;
                     alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
                     return location.href = "../index.html";
                     
                 }
             }
         }
        } else {
            if(bol === false) {
                passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
                if (passtoNext) {
                    cnt--;
                    alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
                    return location.href = "../index.html";
                }
            }else{
                alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
                return location.href = "../index.html";
            }
        }
 });
}
