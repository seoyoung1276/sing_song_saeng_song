var indy = [
 {
    "id": 1,
    "title": "잔나비 - 주저하는 연인들을 위해",
    "answer": ["주저하는 연인들을 위해", "주저하는연인들을위해", "주저하는연인들을 위해", "주저하는 연인들을위해"],
    "secondsong": 'songs/잔나비 - 주저하는 연인들을 위해.mp3',
    "hint":"ㅈㅈㅎㄴㅇㄴㄷㅇㅇㅎ",
    "answersong": 'songs/A잔나비 - 주저하는 연인들을 위해.mp3',
    "answerimage": 'image/1.jpg'
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

var inputanswer = document.getElementById("inputanswer");
var answer ="";

const cover = document.getElementById("coverbox");
const songbox = document.getElementById("songbox");
const hint = document.getElementById("hint");
const musicTitle = document.getElementById("musicTitle");

cover.style.display = 'none';
musicTitle.style.display = 'none';

var bol = false;
var i = 0; 

function nextquiz() {
    if(bol === false){
        inputanswer.value = null;
        inputanswer.style.display = 'block';
        cover.style.display = 'none';
        musicTitle.style.display = 'none';
        songbox.style.display = 'block';
        hint.style.display = 'block';
        //hint.textContent = indy[i].hint;
    }
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

function checkanswer() {
    for(var j=0; j<indy[i].answer.length; j++){
        if(answer === indy[i].answer[j]){
            bol = true; 
            cover.style.display = 'block';
            inputanswer.style.display = 'none';
            musicTitle.style.display = 'block';
            cover.src = indy[i].answerimage;
            musicTitle.textContent = indy[i].title;
            songbox.style.display = 'none';
            hint.style.display = 'none';
            alert(answer);
            i++;
            break; 
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
