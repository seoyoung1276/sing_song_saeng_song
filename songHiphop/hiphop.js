var i = 0;

var hiphop = [
 {
    title: "김승민 - Deep Sea",
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
 },
 {
   title: "릴러말즈 - Gone",
   answer: ["gone", "건", "Gone", "곤"],
   secondsong: 'songs/릴러말즈 - gone.mp3',
   hint: "ㄱ",
   answersong: 'songs/A릴러말즈 - gone.mp3',
   answerimage: 'image/3.jpg'
},
{
   title: "미란이 - Lambo",
   answer: ["lambo", "Lambo", "람보", "림보"],
   secondsong: 'songs/미란이 - lambo.mp3',
   hint: "ㄹㅂ",
   answersong: 'songs/A미란이 - lambo.mp3',
   answerimage: 'image/4.jpg'
},
{
   title: "블라세 - Piece Out",
   answer: ["Piece out", "pieceout", "piece out", "피스아웃", "피스 아웃", "피쓰 아웃", "피쓰아웃"],
   secondsong: 'songs/블라세 - pieceout.mp3',
   hint: "ㅍㅅㅇㅇ",
   answersong: 'songs/A블라세 - pieceout.mp3',
   answerimage: 'image/5.jpg'
},
{
   title: "수퍼비 - 문제아",
   answer: ["문제아"],
   secondsong: 'songs/수퍼비 - 문제아.mp3',
   hint: "ㅁㅈㅇ",
   answersong: 'songs/A수퍼비 - 문제아.mp3',
   answerimage: 'image/6.jpg'
},
{
   title: "창모 - Selfmade Orange",
   answer: ["Selfmade Orange", "SelfmadeOrange", "selfmade orange", "selfmadeorange", "셀프메이드 오렌지", "셀프메이드오렌지", "셀프 메이드 오렌지"],
   secondsong: 'songs/창모 - selfmadeorange.mp3',
   hint: "ㅅㅍㅁㅇㄷ ㅇㄹㅈ",
   answersong: 'songs/A창모 - selfmadeorange.mp3',
   answerimage: 'image/7.jpg'
},
{
   title: "폴 블랑코 - Summer",
   answer: ["Summer", "summer", "여름", "써머", "서머", "썸머", "섬머", "서멀", "써멀", "썸멀","섬멀"],
   secondsong: 'songs/폴블랑코 - Summer.mp3',
   hint: "ㅅㅁ",
   answersong: 'songs/A폴블랑코 - summer.mp3',
   answerimage: 'image/8.jpg'
},
{
   title: "허성현 - Cliche",
   answer: ["Cliche", "cliche", "클리셰", "클리세"],
   secondsong: 'songs/허성현 - 클리셰.mp3',
   hint: "ㅋㄹㅅ",
   answersong: 'songs/A허성현 - 클리셰.mp3',
   answerimage: 'image/9.jpg'
},
{
   title: "pH-1, Kid Milli, 루피 - Good Day (Feat. 팔로알토)",
   answer: ["굿데이", "굳데이", "굿 데이", "Goodday","GoodDay", "Good day", "Good Day"],
   secondsong: 'songs/ph1 - 굿데이.mp3',
   hint: "ㄱㄷㅇ",
   answersong: 'songs/Aph1 - 굿데이.mp3',
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
let answer ="";
let currentTime = 0;
let isPlaying = false;

var secondsong = new Audio(hiphop[i].secondsong);
var answersong = new Audio(hiphop[i].answersong);
var songPath2 = hiphop[i].secondsong;
var songPath = hiphop[i].answersong;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
    startBtn.addEventListener("click", function(){
                secondsong = new Audio(hiphop[0].secondsong);
                secondsong.play();
                hint.textContent = hiphop[0].hint;
        })
}

cover.style.display = 'none';
musicTitle.style.display = 'none';


// 문제 화면
function nextquiz() {
    if(bol === false){
        inputanswer.value = null;
        inputanswer.style.display = 'block';
        cover.style.display = 'none';
        musicTitle.style.display = 'none';
        songbox.style.display = 'block';
        hint.style.display = 'block';
        hint.textContent = hiphop[i].hint;
        secondsong = new Audio(hiphop[i].secondsong);
        secondsong.play();
        
    }
}

// 노래 재생 & 멈춤 버튼 (다시 재생 됨)
if (typeof playBtn !== 'undefined' && playBtn !== null) {
    playBtn.addEventListener("click", function() {
      if (bol === false) {
        secondsong.play();
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
    if(bol === true){
        if (event.key === ' ') {
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
    checkanswer();
}

// 정답 체크
function checkanswer() {
   var isCorrect = hiphop[i].answer.some(function(answer){
       return answer === inputanswer.value
   });
       //정답이 맞을 때
       if(isCorrect){
           bol = true; 
           cover.style.display = 'flex';
           musicTitle.style.display = 'block';
           inputanswer.style.display = 'none';
           answerimage.src = hiphop[i].answerimage;
           musicTitle.textContent = hiphop[i].title;
           songbox.style.display = 'none';
           hint.style.display = 'none';
           answersong = new Audio(hiphop[i].answersong);
           answersong.play();
           isPlaying = true;
           alert(answer);
           i++;
       //정답이 아닐 때
       }else{
           alert("땡!");
       }
   }



// 다음 문제 버튼 클릭시
if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
    nextBtn.addEventListener("click", function(){
        if(i < hiphop.length) {
            bol = false;
            answerimage.src = " ";
            answersong.pause();
            nextquiz();
        }else{
            alert("문제 끝~ ^>^");
        }
    }); 
}


