var bal = [
    {
        title: "성시경 - 너의 모든 순간",
        answer: ["너의모든순간", "너의 모든 순간", "너의 모든순간"],
        secondsong: 'songs/성시경 - 너의 모든 순간.mp3',
        hint:"ㄴㅇ ㅁㄷ ㅅㄱ",
        answersong: 'songs/A성시경 - 너의 모든 순간.mp3',
        answerimage: 'images/11.jpg'
     },
      
     {
        title: "정인호 - 해요",
        answer: ["해요"],
        secondsong: 'songs/정인호 - 해요.mp3',
        hint: "ㅎㅇ",
        answersong: 'songs/A정인호 - 해요.mp3',
        answerimage: 'images/12.jpg'
     },
     {
       title: "탑현 - 호랑수월가",
       answer: ["호랑수월가"],
       secondsong: 'songs/탑현 - 호랑수월가.mp3',
       hint: "ㅎㄹㅅㅇㄱ",
       answersong: 'songs/A탑현 - 호랑수월가.mp3',
       answerimage: 'images/13.jpg'
    },
    {
        //t
       title: "멜로망스 - 취중고백",
       answer: ["취중고백"],
       secondsong: 'songs/t멜로망스 - 취중고백.mp3',
       hint: "ㅊㅈㄱㅂ",
       answersong: 'songs/A멜로망스 - 취중고백.mp3',
       answerimage: 'images/1.jpg'
    },
    {
       title: "조정석 - 아로하",
       answer: ["아로하"],
       secondsong: 'songs/t조정석 - 아로하.mp3',
       hint: "ㅇㄹㅎ",
       answersong: 'songs/A조정석 - 아로하.mp3',
       answerimage: 'images/15.jpg'
    },
    {
       title: "빅마마 - 체념",
       answer: ["체념"],
       secondsong: 'songs/빅마마 - 체념.mp3',
       hint: "ㅊㄴ",
       answersong: 'songs/A빅마마 - 체념.mp3',
       answerimage: 'images/16.jpg'
    },
    {
       title: "임영웅 - 사랑은 늘 도망가",
       answer: ["사랑은 늘 도망가", "사랑은늘도망가", "사랑은늘 도망가","사랑은 늘도망가",],
       secondsong: 'songs/t임영웅 - 사랑은 늘 도망가.mp3',
       hint: "ㅅㄹㅇ ㄴ ㄷㅁㄱ",
       answersong: 'songs/A임영웅 - 사랑은 늘 도망가.mp3',
       answerimage: 'images/17.jpg'
    },
    {
       title: "경서 - 나의 x에게",
       answer: ["나의 x에게", "나의x에게", "나의 X에게", "나의X에게"],
       secondsong: 'songs/경서 - 나의 x에게.mp3',
       hint: "ㄴㅇ ㅇㅅㅇㄱ",
       answersong: 'songs/A경서 - 나의 X에게.mp3',
       answerimage: 'images/18.jpg'
    },
    {
        // t
       title: "성시경 - 거리에서",
       answer: ["거리에서"],
       secondsong: 'songs/t성시경 - 거리에서.mp3',
       hint: "ㄱㄹㅇㅅ",
       answersong: 'songs/A성시경 - 거리에서.mp3',
       answerimage: 'images/2.jpg'
    },
    {
        title: "이지(izi) - 응급실",
        answer: ["응급실"],
        secondsong: 'songs/t이지 - 응급실.mp3',
        hint: "ㅇㄱㅅ",
        answersong: 'songs/A이지 - 응급실.mp3',
        answerimage: 'images/5.jpg'
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

var secondsong = new Audio(bal[i].secondsong);
var answersong = new Audio(bal[i].answersong);
var songPath2 = bal[i].secondsong;
var songPath = bal[i].answersong;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
    startBtn.addEventListener("click", function(){
                secondsong = new Audio(bal[0].secondsong);
                secondsong.play();
                hint.textContent = bal[0].hint;
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
        hint.textContent = bal[i].hint;
        secondsong = new Audio(bal[i].secondsong);
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
    var isCorrect = bal[i].answer.some(function(answer){
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
            answerimage.src = bal[i].answerimage;
            musicTitle.textContent = bal[i].title;
            songbox.style.display = 'none';
            playBtn.style.marginTop = '4%'
            document.getElementById('coverbox').style.marginTop="14%"
            answersong = new Audio(bal[i].answersong);
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
        if(i < bal.length) {
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