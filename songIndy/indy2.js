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
       title: " ",
       answer: ["스텝백", "스텝 백", "스탭백", "스탭 백", "stepback", "Stepback", "Step Back", "StepBack", "step back"],
       secondsong: 'songs/갓더비트 - stepback.mp3',
       hint: "ㅅㅌㅂ",
       answersong: 'songs/A갓더비트 - stepback.mp3',
       answerimage: 'image/13.jpg'
    },
    {
       title: "이문세 - 소녀",
       answer: ["소녀"],
       secondsong: 'songs/이문세 - 소녀.mp3',
       hint: "ㅅㄴ",
       answersong: 'songs/A이문세 - 소녀.mp3',
       answerimage: 'image/14.jpg'
    },
    {
        //t
       title: "검정치마 - 기다린만큼, 더",
       answer: ["기다린만큼 더", "기다린 만큼 더", "기다린만큼더", "기다린만큼, 더"],
       secondsong: 'songs/t검정치마 - 기다린만큼, 더.mp3',
       hint: "ㄱㄷㄹㅁㅋ ㄷ",
       answersong: 'songs/A검정치마 - 기다린만큼, 더.mp3',
       answerimage: 'image/6.jpg'
    },
    {
       title: "이지 - 응급실",
       answer: ["응급실"],
       secondsong: 'songs/이지 - 응급실.mp3',
       hint: "ㅇㄱㅅ",
       answersong: 'songs/A이지 - 응급실.mp3',
       answerimage: 'image/16.jpg'
    },
    {
        //t
       title: "이강승 - 우리가 맞다는 대답을 할 거예요",
       answer: ["우리가맞다는대답을할거에요","우리가맞다는대답을할거예요", "우리가 맞다는 대답을 할거예요", "우리가 맞다는 대답을 할거에요", "우리가 맞다는 대답을 할 거예요", "우리가 맞다는 대답을 할 거에요"],
       secondsong: 'songs/t이강승 - 우리가 맞다는 대답을 할 거예요.mp3',
       hint: "ㅇㄹㄱ ㅁㄷㄴ ㄷㄷㅇ ㅎ ㄱㅇㅇ",
       answersong: 'songs/A이강승 - 우리가 맞다는 대답을 할 거예요.mp3',
       answerimage: 'image/8.jpg'
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

var secondsong = new Audio(indy[i].secondsong);
var answersong = new Audio(indy[i].answersong);
var songPath2 = indy[i].secondsong;
var songPath = indy[i].answersong;

//시작 버튼 나오면 수정! 
if (typeof startBtn !== 'undefined' && startBtn !== null) {
    startBtn.addEventListener("click", function(){
                secondsong = new Audio(indy[0].secondsong);
                secondsong.play();
                isPlaying = true;
                hint.textContent = indy[0].hint;
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
        var passtoNext = confirm("패스하시겠습니까?")
        if(passtoNext){
            cnt--;
            i++;
            nextquiz();
            return alert("다음 문제로 넘어갑니다.");
        }
    }
    checkanswer();
}

// 정답 체크
function checkanswer() {
    var isCorrect = indy[i].answer.some(function(answer){
        return answer === inputanswer.value
    });
         
        //정답이 맞을 때
        if(isCorrect){
            bol = true; 
            cover.style.display = 'block';
            musicTitle.style.display = 'block';
            inputanswer.style.display = 'none';
            answerimage.src = indy[i].answerimage;
            musicTitle.textContent = indy[i].title;
            songbox.style.display = 'none';
            playBtn.style.marginTop = '4%'
            document.getElementById('coverbox').style.marginTop="14%"
            answersong = new Audio(indy[i].answersong);
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
    if(bol === true){
        if(i < indy.length -1) {
            bol = false;
            answerimage.src = "../images/question-mark-icon.png";
            secondsong.pause();
            answersong.pause();
            nextquiz();
        }else{
            alert("퀴즈 끝! 점수를 확인해보세요");
            location.href="End.html";
        }
    }else{
        passtoNext = confirm("패스 하시겠습니까?");
        if(passtoNext){
            cnt--;
            i++;
            nextquiz();
            return alert("다음 문제로 넘어갑니다.");
        }
    }
    }); 
}