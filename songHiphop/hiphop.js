var i = 0;

var hiphop = [
 {
    title: "김승민 - Deep Sea",
    answer: ["deep sea", "deep Sea", "딥씨", "딥시", "Deep sea", "Deep Sea", "deepsea", "Deepsea","deepSea"],
    secondsong: 'songs/김승민 - deapsea.mp3',
    hint:"ㄷㅆ",
    answersong: 'songs/A김승민 - deapsea.mp3',
    answerimage: 'images/1.jpg'
 },
  
 {
    title: "더콰이엇 - Prime Time",
    answer: ["primetime", "primeTime", "PrimeTime", "Primetime", "프라임 타임", "프라임타임", "prime time", "prime Time", "Prime Time", "Prime time"],
    secondsong: 'songs/더콰이엇 - primetime.mp3',
    hint: "ㅍㄹㅇㅌㅇ",
    answersong: 'songs/A더콰이엇 - primetime.mp3',
    answerimage: 'images/2.jpg'
 },
 {
   title: "릴러말즈 - Gone (Feat. 팔로알토)",
   answer: ["gone", "건", "Gone", "곤"],
   secondsong: 'songs/릴러말즈 - gone.mp3',
   hint: "ㄱ",
   answersong: 'songs/A릴러말즈 - gone.mp3',
   answerimage: 'images/3.jpg'
},
{
   title: "미란이 - Lambo (Feat. UNEDUCATED KID)",
   answer: ["lambo", "Lambo", "람보", "림보"],
   secondsong: 'songs/미란이 - lambo.mp3',
   hint: "ㄹㅂ",
   answersong: 'songs/A미란이 - lambo.mp3',
   answerimage: 'images/4.jpg'
},
{
   title: "블라세 - Peace Out",
   answer: ["peace out", "peaceout", "peace out", "피스아웃", "피스 아웃", "피쓰 아웃", "피쓰아웃"],
   secondsong: 'songs/블라세 - pieceout.mp3',
   hint: "ㅍㅅㅇㅇ",
   answersong: 'songs/A블라세 - pieceout.mp3',
   answerimage: 'images/5.jpg'
},
{
   title: "수퍼비 & UNEDUCATED KID - 문제아",
   answer: ["문제아"],
   secondsong: 'songs/수퍼비 - 문제아.mp3',
   hint: "ㅁㅈㅇ",
   answersong: 'songs/A수퍼비 - 문제아.mp3',
   answerimage: 'images/6.jpg'
},
{
   title: "창모 - Selfmade Orange",
   answer: ["Selfmade Orange", "SelfmadeOrange", "selfmade orange", "selfmadeorange", "셀프메이드 오렌지", "셀프메이드오렌지", "셀프 메이드 오렌지"],
   secondsong: 'songs/창모 - selfmadeorange.mp3',
   hint: "ㅅㅍㅁㅇㄷ ㅇㄹㅈ",
   answersong: 'songs/A창모 - selfmadeorange.mp3',
   answerimage: 'images/7.jpg'
},
{
   title: "폴 블랑코 - Summer",
   answer: ["Summer", "summer", "여름", "써머", "서머", "썸머", "섬머", "서멀", "써멀", "썸멀","섬멀"],
   secondsong: 'songs/폴블랑코 - Summer.mp3',
   hint: "ㅅㅁ",
   answersong: 'songs/A폴블랑코 - summer.mp3',
   answerimage: 'images/8.jpg'
},
{
   title: "허성현 - Cliche",
   answer: ["Cliche", "cliche", "클리셰", "클리세"],
   secondsong: 'songs/허성현 - 클리셰.mp3',
   hint: "ㅋㄹㅅ",
   answersong: 'songs/A허성현 - 클리셰.mp3',
   answerimage: 'images/9.jpg'
},
{
   title: "pH-1, Kid Milli, 루피 - Good Day (Feat. 팔로알토)",
   answer: ["굿데이", "굳데이", "굿 데이", "Goodday","GoodDay", "Good day", "Good Day"],
   secondsong: 'songs/ph1 - 굿데이.mp3',
   hint: "ㄱㄷㅇ",
   answersong: 'songs/Aph1 - 굿데이.mp3',
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

var secondsong = new Audio(hiphop[i].secondsong);
var answersong = new Audio(hiphop[i].answersong);
var songPath2 = hiphop[i].secondsong;
var songPath = hiphop[i].answersong;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
 startBtn.addEventListener("click", function(){
             secondsong = new Audio(hiphop[0].secondsong);
             secondsong.play();
             isPlaying = true;
             hint.textContent = hiphop[0].hint;
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
