var indy = [
 {
    "id": 1,
    "title": "잔나비 - 주저하는 연인들을 위해",
    "answer": ["주저하는 연인들을 위해", "주저하는연인들을위해", "주저하는연인들을 위해", "주저하는 연인들을위해"],
    "secondsong": 'songs/잔나비 - 주저하는 연인들을 위해.mp3',
    "hint":"ㅈㅈㅎㄴㅇㄴㄷㅇㅇㅎ",
    "answersong": 'songs/A잔나비 - 주저하는 연인들을 위해.mp3',
    "answerimage": "image/1.jpg"
 },
  
 {
    "id": 2,
    "title": "백아 - 첫사랑",
    "answer": ["첫사랑", "첫 사랑"],
    "secondsong": 'songs/백아 - 첫사랑.mp3',
    "hint": "ㅊㅅㄹ",
    "answersong": 'songs/A백아 - 첫사랑.mp3',
    "answerimage": 'image/2.jpg'
 },

 {
    "id":3,
    "title": "검정치마 - everything",
    "answer":["everything", "에브리띵", "Everything"],
    "secondsong": 'songs/검정치마 - everything.mp3',
    "hint": "ㅇㅂㄹㄸ",
    "answersong": 'songs/A검정치마 - everything.mp3',
    "answerimage": 'image/3.jpg'
 }
];




var bol = false;
var i = 0; 

const cover = document.getElementById("coverbox");
const songbox = document.getElementById("songbox");
const hint = document.getElementById("hint");
const musicTitle = document.getElementById("musicTitle");
const playBtn = document.getElementById("playBtn");
let answerimage = document.getElementById("answerimage");
let inputanswer = document.getElementById("inputanswer");
let answer ="";
let currentTime = 0;
let isPlaying = false;

var secondsong = new Audio(indy[i].secondsong);
var answersong = new Audio(indy[i].answersong);
var songPath2 = indy[i].secondsong;
var songPath = indy[i].answersong;

cover.style.display = 'none';
musicTitle.style.display = 'none';

// (function() {
//     if(i === 0){
//         setTimeout(function(){
//             secondsong = new Audio(indy[0].secondsong);
//             secondsong.play();
//         }, 3000);
//         hint.textContent = indy[0].hint;
//     }
// })();


// 문제 화면
function nextquiz() {
    if(bol === false){
        inputanswer.value = null;
        inputanswer.style.display = 'block';
        cover.style.display = 'none';
        musicTitle.style.display = 'none';
        songbox.style.display = 'block';
        hint.style.display = 'block';
        hint.textContent = indy[i].hint;
        secondsong = new Audio(indy[i].secondsong);
        secondsong.play();
        
    }
}

// 노래 재생 & 멈춤 버튼 (다시 재생 됨)
if(typeof playBtn !== 'undefined' && playBtn !== null){
    playBtn.addEventListener("click", function(){
        if(bol === false) {
            secondsong.play();
        }else{
            if(isPlaying) {
                answersong.pause();
                currentTime = answersong.currentTime;
                isPlaying = false;
            }else{
                answersong.currentTime = currentTime;
                answersong.play();
                isPlaying = true;
            }
        }
    })
}


// 엔터 키 동작
function handleEnterKey(event) {
    if(event.key === 'Enter'){
        input();
    }
}

inputanswer.addEventListener('keydown', handleEnterKey)

function input() {
    answer = inputanswer.value;
    checkanswer();
}

// 정답 체크
function checkanswer() {
    for(var j=0; j<indy[i].answer.length; j++){
        //정답이 맞을 때
        if(answer === indy[i].answer[j]){
            bol = true; 
            cover.style.display = 'flex';
            musicTitle.style.display = 'block';
            inputanswer.style.display = 'none';
            answerimage.src = indy[i].answerimage;
            musicTitle.textContent = indy[i].title;
            songbox.style.display = 'none';
            hint.style.display = 'none';
            answersong = new Audio(indy[i].answersong);
            answersong.play();
            isPlaying = true;
            alert(answer);
            i++;
            break; 
        //정답이 아닐 때
        }else{
            alert("땡!");
            break;
        }
    }
}



// 다음 문제 버튼 클릭시
if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
    nextBtn.addEventListener("click", function(){
        if(i < indy.length) {
            bol = false;
            answersong.pause();
            nextquiz();
        }else{
            alert("문제 끝~ ^>^");
        }
    }); 
}




    // let i = 0;
    // let b = false;

    // var firstTitle = indy[i].title;
    // var musicTitle = document.getElementById("musicTitle");

    // if (musicTitle) {   
    //     musicTitle.textContent = firstTitle;
    // }


    

    // if (typeof toGameBtn !== 'undefined' && toGameBtn !== null) {
    //     toGameBtn.addEventListener("click", function(){
    //         i++;
    //         window.location.href = 'secondGame.html';
    //     });
    // }
