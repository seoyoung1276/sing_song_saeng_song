var i = 0;

var bal = [
 {
    title: "멜로망스 - 취중고백",
    answer: ["취중고백", "취중 고백"],
    secondsong: 'songs/멜로망스 - 취중고백.mp3',
    hint:"ㅊㅈㄱㅂ",
    answersong: 'songs/A멜로망스 - 취중고백.mp3',
    answerimage: 'images/1.jpg'
 },
  
 {
    title: "성시경 - 거리에서",
    answer: ["거리에서", "거리 에서"],
    secondsong: 'songs/성시경 - 거리에서.mp3',
    hint: "ㄱㄹㅇㅅ",
    answersong: 'songs/A성시경 - 거리에서.mp3',
    answerimage: 'images/2.jpg'
 },
 {
   title: "에일리 - 첫눈처럼 너에게 가겠다",
   answer: ["첫눈처럼너에게가겠다", "첫눈처럼 너에게 가겠다", "첫눈처럼 너에게가겠다", "첫눈 처럼 너에게 가겠다", "첫 눈처럼 너에게 가겠다"],
   secondsong: 'songs/에일리 - 첫눈처럼 너에게 가겠다.mp3',
   hint: "ㅊㄴㅊㄹ ㄴㅇㄱ ㄱㄱㄷ",
   answersong: 'songs/A에일리 - 첫눈처럼 너에게 가겠다.mp3',
   answerimage: 'images/3.jpg'
},
{
   title: "윤종신 - 좋니",
   answer: ["좋니"],
   secondsong: 'songs/윤종신 - 좋니.mp3',
   hint: "ㅈㄴ",
   answersong: 'songs/A윤종신 - 좋니.mp3',
   answerimage: 'images/4.jpg'
},
{
   title: "이지(izi) - 응급실",
   answer: ["응급실"],
   secondsong: 'songs/이지 - 응급실.mp3',
   hint: "ㅇㄱㅅ",
   answersong: 'songs/A이지 - 응급실.mp3',
   answerimage: 'images/5.jpg'
},
{
   title: "정승환 - 너였다면",
   answer: ["너였다면"],
   secondsong: 'songs/정승환 - 너였다면.mp3',
   hint: "ㄴㅇㄷㅁ",
   answersong: 'songs/A정승환 - 너였다면.mp3',
   answerimage: 'images/6.jpg'
},
{
   title: "폴킴 - 모든 날 모든 순간",
   answer: ["모든 날 모든 순간", "모든날모든순간", "모든 날 모든순간", "모든날 모든 순간"],
   secondsong: 'songs/폴킴 - 모든 날 모든 순간.mp3',
   hint: "ㅁㄷ ㄴ ㅁㄷ ㅅㄱ",
   answersong: 'songs/A폴킴 - 모든 날 모든 순간.mp3',
   answerimage: 'images/7.jpg'
},
{
   title: "폴킴 - 안녕",
   answer: ["안녕"],
   secondsong: 'songs/폴킴 - 안녕.mp3',
   hint: "ㅇㄴ",
   answersong: 'songs/A폴킴 - 안녕.mp3',
   answerimage: 'images/8.jpg'
},
{
   title: "하은 - 신용재",
   answer: ["신용재"],
   secondsong: 'songs/하은 - 신용재.mp3',
   hint: "ㅅㅇㅈ",
   answersong: 'songs/A하은 - 신용재.mp3',
   answerimage: 'images/9.jpg'
}
 ,
{
   title: "조정석 - 아로하",
   answer: ["아로하"],
   secondsong: 'songs/조정석 - 아로하.mp3',
   hint: "ㅇㄹㅎ",
   answersong: 'songs/A조정석 - 아로하.mp3',
   answerimage: 'images/15.jpg'
}
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
                secondsong = new Audio(bal[0].secondsong);
                secondsong.play();
                isPlaying = true;
                hint.textContent = bal[0].hint;
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
        hint.textContent = bal[i].hint;
        secondsong = new Audio(bal[i].secondsong);
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
    var isCorrect = bal[i].answer.some(function(answer){
        return answer === inputanswer.value;
    });
         
    // 정답이 맞을 때
    if (isCorrect) {
        bol = true; 
        cover.style.display = 'block';
        musicTitle.style.display = 'block';
        inputanswer.style.display = 'none';
        answerimage.src = bal[i].answerimage;
        musicTitle.textContent = bal[i].title;
        songbox.style.display = 'none';
        playBtn.style.marginTop = '4%';
        document.getElementById('coverbox').style.marginTop = '14%';
        secondsong.pause();
        answersong = new Audio(bal[i].answersong);
        answersong.play();
        isPlaying = true;
        i++; 
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
