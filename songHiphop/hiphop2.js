var hiphop = [
    {
        title: "애쉬아일랜드 - Melody",
        answer: ["멜로디", "melody", "Melody"],
        secondsong: 'songs/멜로디.mp3',
        hint:"ㅁㄹㄷ",
        answersong: 'songs/A멜로디.mp3',
        answerimage: 'images/11.jpg'
     },
      
     {
        title: "Jvcki Wai - Fadeaway",
        answer: ["fadeaway", "Fadeaway", "페이드어웨이", "페이다 어웨이", "페이드 어웨이", "페이다어웨이"],
        secondsong: 'songs/fadeaway.mp3',
        hint: "ㅍㅇㄷㅇㅇㅇ",
        answersong: 'songs/Afadeaway.mp3',
        answerimage: 'images/12.jpg'
     },
     {
       title: "호미들 - 사이렌 (Remix)",
       answer: ["사이렌", "사이렌 리믹스", "사이렌리믹스"],
       secondsong: 'songs/사이렌.mp3',
       hint: "ㅅㅇㄹ",
       answersong: 'songs/A사이렌.mp3',
       answerimage: 'images/13.jpg'
    },
    {
       title: "pH-1 - Nerdy Love",
       answer: ["널디러브", "널디럽", "널디 러브", "nerdy love", "Nerdy Love", "nerdylove", "Nerdylove", "NerdyLove"],
       secondsong: 'songs/널디러브.mp3',
       hint: "ㄴㄷㄹㅂ",
       answersong: 'songs/A널디러브.mp3',
       answerimage: 'images/14.jpg'
    },
    {
       title: "BE'O - Brand",
       answer: ["브랜드", "Brand", "brand"],
       secondsong: 'songs/brand.mp3',
       hint: "ㅂㄹㄷ",
       answersong: 'songs/Abrand.mp3',
       answerimage: 'images/15.jpg'
    },
    {
       title: "기리보이 - 거지",
       answer: ["거지"],
       secondsong: 'songs/거지.mp3',
       hint: "ㄱㅈ",
       answersong: 'songs/A거지.mp3',
       answerimage: 'images/16.jpg'
    },
    {
       title: "김효은 - Come Back",
       answer: ["컴백", "come back", "comeback", "Comeback", "Come Back", "come Back", "comeBack", "ComeBack"],
       secondsong: 'songs/cameback.mp3',
       hint: "ㅋㅂ",
       answersong: 'songs/Acameback.mp3',
       answerimage: 'images/17.jpg'
    },
    {
       title: "다이나믹듀오 - 시간아 멈춰",
       answer: ["시간아 멈춰", "시간아멈춰"],
       secondsong: 'songs/시간아멈춰.mp3',
       hint: "ㅅㄱㅇㅁㅊ",
       answersong: 'songs/A시간아멈춰.mp3',
       answerimage: 'images/18.jpg'
    },
    {
       title: "씨잼 - Puzzel",
       answer: ["퍼즐", "puzzel", "Puzzel"],
       secondsong: 'songs/퍼즐.mp3',
       hint: "ㅍㅈ",
       answersong: 'songs/A퍼즐.mp3',
       answerimage: 'images/19.jpg'
    },
    {
       title: "래원 - 오태식",
       answer: ["오태식"],
       secondsong: 'songs/오태식.mp3',
       hint: "ㅇㅌㅅ",
       answersong: 'songs/A오태식.mp3',
       answerimage: 'images/20.jpg'
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

var secondsong = new Audio(hiphop[i].secondsong);
var answersong = new Audio(hiphop[i].answersong);
var songPath2 = hiphop[i].secondsong;
var songPath = hiphop[i].answersong;

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
             secondsong = new Audio(hiphop[0].secondsong);
             secondsong.play();
             isPlaying = true;
             hint.textContent = hiphop[0].hint;
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
     hint.textContent = hiphop[i].hint;
     secondsong = new Audio(hiphop[i].secondsong);
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
 var isCorrect = hiphop[i].answer.some(function(answer){
     return answer === inputanswer.value;
 });
      
 // 정답이 맞을 때
 if (isCorrect) {
     bol = true; 
     cover.style.display = 'block';
     musicTitle.style.display = 'block';
     inputanswer.style.display = 'none';
     answerimage.src = hiphop[i].answerimage;
     musicTitle.textContent = hiphop[i].title;
     songbox.style.display = 'none';
     playBtn.style.marginTop = '4%';
     document.getElementById('coverbox').style.marginTop = '14%';
     secondsong.pause();
     answersong = new Audio(hiphop[i].answersong);
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
         passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
         if (passtoNext) {
             cnt--;
             alert("퀴즈 끝! " + cnt +"개 맞췄습니다.");
             return location.href = "../index.html";
             
         }
     }
 });
}
