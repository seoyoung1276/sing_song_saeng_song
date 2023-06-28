var indy = [
    {
        //t
        title: "카더가든 - 가까운듯 먼 그대여",
        answer: ["가까운듯먼그대여", "가까운 듯 먼 그대여", "가까운듯 먼 그대여", "가까운듯먼 그대여"],
        secondsong: 'songs/t카더가든 - 가까운듯 먼 그대여.mp3',
        hint:"ㄱㄲㅇㄷ ㅁ ㄱㄷㅇ",
        answersong: 'songs/A가까운듯먼그대여-카더가든.mp3',
        answerimage: 'image/4.jpg'
     },
      
     {
        title: "잔나비 - 가을밤에 든 생각",
        answer: ["가을밤에든생각", "가을밤에 든 생각", "가을 밤에 든 생각"],
        secondsong: 'songs/잔나비 - 가을밤에 든 생각.mp3',
        hint: "ㄱㅇㅂㅇ ㄷ ㅅㄱ",
        answersong: 'songs/A잔나비 - 가을밤에 든 생각.mp3',
        answerimage: 'image/12.jpg'
     },
     {
        //t
       title: "허회경 - 그렇게 살아가는 것",
       answer: ["그렇게 살아가는 것", "그렇게살아가는 것", "그렇게 살아가는것", "그렇게살아가는것"],
       secondsong: 'songs/t허회경 - 그렇게 살아가는 것.mp3',
       hint: "ㄱㄹㄱ ㅅㅇㄱㄴ ㄱ",
       answersong: 'songs/A그렇게살아가는것-허회경.mp3',
       answerimage: 'image/5.jpg'
    },
    {
       title: "혁오 - 위잉위잉",
       answer: ["위잉위잉", "위잉 위잉"],
       secondsong: 'songs/t혁오 - 위잉위잉.mp3',
       hint: "ㅇㅇㅇㅇ",
       answersong: 'songs/A위잉위잉-혁오.mp3',
       answerimage: 'image/9.jpg'
    },
    {
        //t
       title: "검정치마 - 기다린만큼, 더",
       answer: ["기다린만큼 더", "기다린 만큼 더", "기다린만큼더", "기다린만큼, 더"],
       secondsong: 'songs/t검정치마 - 기다린 만큼, 더.mp3',
       hint: "ㄱㄷㄹㅁㅋ ㄷ",
       answersong: 'songs/A기다린만큼더-검정치마.mp3',
       answerimage: 'image/6.jpg'
    },
    {
       title: "백아 - 첫사랑",
       answer: ["첫사랑", "첫 사랑"],
       secondsong: 'songs/t백아 - 첫사랑.mp3',
       hint: "ㅊㅅㄹ",
       answersong: 'songs/A백아 - 첫사랑.mp3',
       answerimage: 'image/2.jpg'
    },
    {
        //t
       title: "이강승 - 우리가 맞다는 대답을 할 거예요",
       answer: ["우리가맞다는대답을할거에요","우리가맞다는대답을할거예요", "우리가 맞다는 대답을 할거예요", "우리가 맞다는 대답을 할거에요", "우리가 맞다는 대답을 할 거예요", "우리가 맞다는 대답을 할 거에요"],
       secondsong: 'songs/t이강승 - 우리가 맞다는 대답을 할 거예요.mp3',
       hint: "ㅇㄹㄱ ㅁㄷㄴ ㄷㄷㅇ ㅎ ㄱㅇㅇ",
       answersong: 'songs/A우리가맞다는대답을할거예요-이강승.mp3',
       answerimage: 'image/8.jpg'
    },
    {
       title: "넬(NELL) - 기억을 걷는 시간",
       answer: ["기억을 걷는 시간", "기억을걷는 시간", "기억을 걷는시간", "기억을걷는시간"],
       secondsong: 'songs/t넬 - 기억을 걷는 시간.mp3',
       hint: "ㄱㅇㅇ ㄱㄴ ㅅㄱ",
       answersong: 'songs/A기억을걷는시간-넬.mp3',
       answerimage: 'image/7.jpg'
    },
    {
       title: "백아 - 테두리",
       answer: ["테두리"],
       secondsong: 'songs/t백아 - 테두리.mp3',
       hint: "ㅌㄷㄹ",
       answersong: 'songs/A백아 - 테두리.mp3',
       answerimage: 'image/13.jpg'
    },
    {
       title: "나디(n@di) - 편지",
       answer: ["편지"],
       secondsong: 'songs/t나디 - 편지.mp3',
       hint: "ㅍㅈ",
       answersong: 'songs/A나디 - 편지.mp3',
       answerimage: 'image/10.jpg'
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

var secondsong = new Audio(indy[i].secondsong);
var answersong = new Audio(indy[i].answersong);
var songPath2 = indy[i].secondsong;
var songPath = indy[i].answersong;

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
             secondsong = new Audio(indy[0].secondsong);
             secondsong.play();
             isPlaying = true;
             hint.textContent = indy[0].hint;
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
     hint.textContent = indy[i].hint;
     secondsong = new Audio(indy[i].secondsong);
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
         passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
         if(passtoNext){
             cnt--;
             alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
            return location.href = "../index.html";
         }
     }
 }
 checkanswer();
}

// 정답 체크
function checkanswer() {
 var isCorrect = indy[i].answer.some(function(answer){
     return answer === inputanswer.value;
 });
      
 // 정답이 맞을 때
 if (isCorrect) {
     bol = true; 
     cover.style.display = 'block';
     musicTitle.style.display = 'block';
     inputanswer.style.display = 'none';
     answerimage.src = indy[i].answerimage;
     musicTitle.textContent = indy[i].title;
     songbox.style.display = 'none';
     playBtn.style.marginTop = '4%';
     document.getElementById('coverbox').style.marginTop = '14%';
     secondsong.pause();
     answersong = new Audio(indy[i].answersong);
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
