var kpop = [
    {
        title: "ITZY - LOCO",
        answer: ["loco", "LOCO", "Loco", "로꼬", "로코"],
        secondsong: 'songs/있지 - loco.mp3',
        hint:"ㄹㅋ",
        answersong: 'songs/A있지 - loco.mp3',
        answerimage: 'images/11.jpg'
     },
      
     {
        title: "New Jeans - OMG",
        answer: ["omg", "Omg", "OMG", "오엠지", "오마이갓"],
        secondsong: 'songs/뉴진스 - omg.mp3',
        hint: "ㅇㅇㅈ",
        answersong: 'songs/A뉴진스 - omg.mp3',
        answerimage: 'images/12.jpg'
     },
     {
       title: "God The Beat - Step Back",
       answer: ["스텝백", "스텝 백", "스탭백", "스탭 백", "stepback", "Stepback", "Step Back", "StepBack", "step back"],
       secondsong: 'songs/갓더비트 - stepback.mp3',
       hint: "ㅅㅌㅂ",
       answersong: 'songs/A갓더비트 - stepback.mp3',
       answerimage: 'images/13.jpg'
    },
    {
       title: "레드벨벳 - Happiness(행복)",
       answer: ["행복", "해피니스", "happiness", "Happiness"],
       secondsong: 'songs/레드벨벳 - 행복.mp3',
       hint: "ㅎㅂ",
       answersong: 'songs/A레드벨벳 - 행복.mp3',
       answerimage: 'images/14.jpg'
    },
    {
       title: "조이 - 안녕 (Hello)",
       answer: ["안녕", "hello", "Hello"],
       secondsong: 'songs/조이 - 안녕.mp3',
       hint: "ㅇㄴ",
       answersong: 'songs/A조이 - 안녕.mp3',
       answerimage: 'images/15.jpg'
    },
    {
       title: "세븐틴 - Ready To Love",
       answer: ["레디투럽", "레디투러브", "레디 투 러브", "ready to love", "readytolove", "Ready To Love", "Ready to love", "ReadyToLove", "Readytolove", "ReadytoLove"],
       secondsong: 'songs/세븐틴 - 레디투럽.mp3',
       hint: "ㄹㄷㅌㄹㅂ",
       answersong: 'songs/A세븐틴 - 레디투럽.mp3',
       answerimage: 'images/16.jpg'
    },
    {
       title: "샤이니 - Atlantis",
       answer: ["아틀란티스", "Atlantis", "atlantis"],
       secondsong: 'songs/샤이니-아틀란티스.mp3',
       hint: "ㅇㅌㄹㅌㅅ",
       answersong: 'songs/A샤이니-아틀란티스.mp3',
       answerimage: 'images/17.jpg'
    },
    {
       title: "브레이브 걸스 - Thank You",
       answer: ["땡큐", "Thank You", "thankyou", "thank you", "ThankYou", "Thankyou", "Thank you"],
       secondsong: 'songs/브레이브걸스 - thankyou.mp3',
       hint: "ㄸㅋ",
       answersong: 'songs/A브레이브걸스 - thankyou.mp3',
       answerimage: 'images/18.jpg'
    },
    {
       title: "Stray Kids - MANIAC",
       answer: ["매니악", "maniac", "Maniac", "MANIAC"],
       secondsong: 'songs/스키즈 - 매니악.mp3',
       hint: "ㅁㄴㅇ",
       answersong: 'songs/A스키즈 - 매니악.mp3',
       answerimage: 'images/19.jpg'
    },
    {
       title: "온앤오프 - 여름쏙",
       answer: ["여름쏙", "여름 쏙"],
       secondsong: 'songs/온앤오프 - 여름쏙.mp3',
       hint: "ㅇㄹㅆ",
       answersong: 'songs/A온앤오프 - 여름쏙.mp3',
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

var secondsong = new Audio(kpop[i].secondsong);
var answersong = new Audio(kpop[i].answersong);
var songPath2 = kpop[i].secondsong;
var songPath = kpop[i].answersong;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
    startBtn.addEventListener("click", function(){
                secondsong = new Audio(kpop[0].secondsong);
                secondsong.play();
                hint.textContent = kpop[0].hint;
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
        songbox.style.display = 'grid';
        hint.style.display = 'block';
        hint.textContent = kpop[i].hint;
        secondsong = new Audio(kpop[i].secondsong);
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
    var isCorrect = kpop[i].answer.some(function(answer){
        return answer === inputanswer.value
    });
          //패스
        if(answer === "pass"){
         var passtoNext = confirm("패스하시겠습니까?")
         if(passtoNext){
             cnt--;
             i++;
             nextquiz();
             return alert("다음 문제로 넘어갑니다.");
         }
     }
        //정답이 맞을 때
        if(isCorrect){
            bol = true; 
            cover.style.display = 'block';
            musicTitle.style.display = 'block';
            inputanswer.style.display = 'none';
            answerimage.src = kpop[i].answerimage;
            musicTitle.textContent = kpop[i].title;
            songbox.style.display = 'none';
            playBtn.style.marginTop = '4%'
            document.getElementById('coverbox').style.marginTop="14%"
            answersong = new Audio(kpop[i].answersong);
            secondsong.pause();
            answersong.play();
            isPlaying = true;
            alert("정답입니다!");
            i++;
        //정답이 아닐 때
        }else{
            alert("땡! 다시 입력해보세요");
            inputanswer.value = null;
        }
       
 }




// 다음 문제 버튼 클릭시
if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
    nextBtn.addEventListener("click", function(){
        if(i < kpop.length) {
            bol = false;
            answerimage.src = "../images/question-mark-icon.png";
            secondsong.pause();
            answersong.pause();
            nextquiz();
        }else{
            alert("문제 끝~ ^>^");
        }
    }); 
}