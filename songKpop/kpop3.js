var kpop = [
    {
        "title": "IVE - ELEVEN",
        "answer": ["eleven", "Eleven", "일레븐"],
        "image" : 'images/21.png',
        "hint": "ㅇㄹㅂ",
        "answersong": 'songs/A아이브 - 일레븐.mp3',
        "answerimage": 'images/2.jpg'
     },
      
     {
        title: "New Jeans - OMG",
        answer: ["omg", "Omg", "OMG", "오엠지", "오마이갓"],
        "image" : 'images/22.jpg',
        hint: "ㅇㅇㅈ",
        answersong: 'songs/A뉴진스 - omg.mp3',
        answerimage: 'images/12.jpg'
     },
     {
        title: "세븐틴 - Ready To Love",
       answer: ["레디투럽", "레디투러브", "레디 투 러브", "ready to love", "readytolove", "Ready To Love", "Ready to love", "ReadyToLove", "Readytolove", "ReadytoLove"],
       "image" : 'images/23.jpg',
       hint: "ㄹㄷㅌㄹㅂ",
       answersong: 'songs/A세븐틴 - 레디투럽.mp3',
       answerimage: 'images/16.jpg'
    },
    {
        title: "God The Beat - Step Back",
        answer: ["스텝백", "스텝 백", "스탭백", "스탭 백", "stepback", "Stepback", "Step Back", "StepBack", "step back"],
        "image" : 'images/24.jpg',
        hint: "ㅅㅌㅂ",
        answersong: 'songs/A갓더비트 - stepback.mp3',
        answerimage: 'images/13.jpg'
    },
    {
        "title": "오마이걸 - 살짝 설let어",
        "answer":["살짝설렜어", "살짝 설렜어"],
        "image" : 'images/25.jpg',
        "hint": "ㅅㅉ ㅅㄹㅇ",
        "answersong": 'songs/A오마이걸 - 살짝설렜어.mp3',
        "answerimage": 'images/5.jpg'
    },
    {
        "title": "TWICE - Scientist",
        "answer":["사이언티스트","scientist", "Scientist"],
        "image" : 'images/26.jpg',
        "hint": "ㅅㅇㅇㅌㅅㅌ",
        "answersong": 'songs/A트와이스 - scientist.mp3',
        "answerimage": 'images/8.jpg'
    },
    {
        "title": "TXT - 0X1=LOVESONG",
        "answer":["제로바이원러브송", "영원럽", "제로 바이 원 러브 송", "제로바이 원 러브송", "0x1=lovesong"],
        "image" : 'images/27.png',
        "hint": "ㅈㄹㅂㅇㅇㄹㅂㅅ",
        "answersong": 'songs/투바투 - 제로바이원러브송.mp3',
        "answerimage": 'images/7.jpg'
    },
    {
        "id":4,
        "title": "ENHYPHEN - Drunk-Dazed",
        "answer":["드렁크데이즈드", "드렁크 데이즈드", "drunk dazed", "drunk-dazed", "drunkdazed", "Drunk-dazed", "Drunk-Dazed", "Drunk dazed", "Drunk Dazed"],
        "image" : 'images/28.jpg',
        "hint": "ㄷㄹㅋ ㄷㅇㅈㄷ",
        "answersong": 'songs/A엔하이픈 - 드렁큰데이즈드.mp3',
        "answerimage": 'images/4.jpg'
    },
    {
        "title": "The Boyz - 스릴라이드",
        "answer":["스릴라이드", "스릴 라이드"],
        "image" : 'images/29.jpg',
        "hint": "ㅅㄹㄹㅇㄷ",
        "answersong": 'songs/A더보이즈 - 스릴라이드 .mp3',
        "answerimage": 'image/10.jpg'
    },
    {
        title: "샤이니 - Atlantis",
        answer: ["아틀란티스", "Atlantis", "atlantis"],
        "image" : 'images/30.png',
        hint: "ㅇㅌㄹㅌㅅ",
        answersong: 'songs/A샤이니-아틀란티스.mp3',
        answerimage: 'images/17.jpg'
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
var mvimage = document.getElementById("mvimage");
let inputanswer = document.getElementById("inputanswer");
let playBtns = document.getElementById("play");
let answer ="";
let currentTime = 0;
let cnt = 10;
let isPlaying = false;
let gotoPass = false;

var answersong = new Audio(kpop[i].answersong);
var songPath = kpop[i].answersong;
mvimage.src = kpop[i].image;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
    startBtn.addEventListener("click", function(){
                hint.textContent = kpop[0].hint;
        })
}

cover.style.display = 'none';
musicTitle.style.display = 'none';


// 문제 화면
function nextquiz() {
    if(bol === false){
        isPlaying = false;
        inputanswer.value = null;
        inputanswer.style.display = 'block';
        cover.style.display = 'none';
        musicTitle.style.display = 'none';
        songbox.style.display = 'grid';
        hint.style.display = 'block';
        hint.textContent = kpop[i].hint;
        mvimage.src = kpop[i].image;
    }
}

// 노래 재생 & 멈춤 버튼 (다시 재생 됨)
if (typeof playBtn !== 'undefined' && playBtn !== null) {
    playBtn.addEventListener("click", function() {
      if (bol === true) {
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
        if(i < kpop.length -1){
            var passtoNext = confirm("패스하시겠습니까?")
            if(passtoNext){
                cnt--;
                i++;
                nextquiz();
                return alert("다음 문제로 넘어갑니다.");
            }
        }
    }else{
        passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
        if(passtoNext){
            alert("퀴즈 끝! 점수를 확인해보세요");
            location.href="End.html";
        }
    }
    checkanswer();
}

// 정답 체크
function checkanswer() {
    var isCorrect = kpop[i].answer.some(function(answer){
        return answer === inputanswer.value;
    });
         
    // 정답이 맞을 때
    if (isCorrect) {
        bol = true; 
        cover.style.display = 'block';
        musicTitle.style.display = 'block';
        inputanswer.style.display = 'none';
        answerimage.src = kpop[i].answerimage;
        musicTitle.textContent = kpop[i].title;
        songbox.style.display = 'none';
        playBtn.style.marginTop = '4%';
        document.getElementById('coverbox').style.marginTop = '14%';
        answersong = new Audio(kpop[i].answersong);
        answersong.play();
        isPlaying = true;
        alert("정답입니다!");
    // 정답이 아닐 때
    } else {
        alert("땡! 다시 입력해보세요");
        inputanswer.value = null;
    }

    i++; // 다음 문제로 넘어감
}

// 다음 문제 버튼 클릭시
if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
    nextBtn.addEventListener("click", function(){
        if (i < kpop.length) {
            if (bol === true) {
                bol = false;
                answerimage.src = "../images/question-mark-icon.png";
                answersong.pause();
                nextquiz();
            } else {
                if (i < kpop.length - 1) {
                    passtoNext = confirm("패스 하시겠습니까?");
                    if (passtoNext) {
                        cnt--;
                        nextquiz();
                        return alert("다음 문제로 넘어갑니다.");
                    }
                } else {
                    passtoNext = confirm("마지막 문제 입니다! 패스하시겠습니까?")
                    if (passtoNext) {
                        alert("퀴즈 끝! 점수를 확인해보세요");
                        location.href = "../End.html";
                    }
                }
            }
        } else {
            alert("퀴즈 끝! 점수를 확인해보세요");
            location.href = "../End.html";
        }
    });
    }
}
