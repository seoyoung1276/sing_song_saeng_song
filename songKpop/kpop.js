var kpop = [
    {
       "id": 1,
       "title": "소녀시대 - 다시 만난 세계",
       "answer": ["다시만난세계", "다시 만난 세계", "다만세", "다시만난 세계", "다시 만난세계"],
       "secondsong": 'songs/소녀시대 - 다시만난세계.mp3',
       "hint":"ㄷㅅ ㅁㄴ ㅅㄱ",
       "answersong": 'songs/A소녀시대 - 다시만난세계.mp3',
       "answerimage": "images/1.jpg"
    },
     
    {
       "id": 2,
       "title": "IVE - ELEVEN",
       "answer": ["eleven", "Eleven", "일레븐"],
       "secondsong": 'songs/아이브 - 일레븐.mp3',
       "hint": "ㅇㄹㅂ",
       "answersong": 'songs/A아이브 - 일레븐.mp3',
       "answerimage": 'images/2.jpg'
    },
   
    {
       "id":3,
       "title": "NCT DREAM - Hello Future ",
       "answer":["헬로퓨쳐", "헬로퓨처", "헬로 퓨쳐", "헬로 퓨처", "hellofuture", "hello future", "Hello Future", "Hello future", "Hellofuture"],
       "secondsong": 'songs/엔시티드림 - 헬로퓨쳐.mp3',
       "hint": "ㅎㄹㅍㅊ",
       "answersong": 'songs/A엔시티드림 - 헬로퓨쳐.mp3',
       "answerimage": 'images/3.jpg'
    },
    {
       "id":4,
       "title": "ENHYPHEN - Drunk-Dazed",
       "answer":["드렁크데이즈드", "드렁크 데이즈드", "drunk dazed", "drunk-dazed", "drunkdazed", "Drunk-dazed", "Drunk-Dazed", "Drunk dazed", "Drunk Dazed"],
       "secondsong": 'songs/엔하이픈 - 드렁큰데이즈드.mp3',
       "hint": "ㄷㄹㅋ ㄷㅇㅈㄷ",
       "answersong": 'songs/A엔하이픈 - 드렁큰데이즈드.mp3',
       "answerimage": 'images/4.jpg'
    },
    {
       "id":5,
       "title": "오마이걸 - 살짝 설let어",
       "answer":["살짝설렜어", "살짝 설렜어"],
       "secondsong": 'songs/오마이걸 - 살짝설렜어.mp3',
       "hint": "ㅅㅉ ㅅㄹㅇ",
       "answersong": 'songs/A오마이걸 - 살짝설렜어.mp3',
       "answerimage": 'images/5.jpg'
    },
    {
       "id":6,
       "title": "위클리 - After School",
       "answer":["에프터 스쿨", "에프터스쿨", "애프터 스쿨", "애프터스쿨", "After School", "after school", "afterschool", "After school"],
       "secondsong": 'songs/위클리 - afterschool',
       "hint": "ㅇㅍㅌㅅㅋ",
       "answersong": 'songs/A위클리 - afterschool.mp3',
       "answerimage": 'images/6.jpg'
    },
    {
       "id":7,
       "title": "TXT - 0X1=LOVESONG",
       "answer":["제로바이원러브송", "영원럽", "제로 바이 원 러브 송", "제로바이 원 러브송", "0x1=lovesong"],
       "secondsong": 'songs/투바투 - 제로바이원러브송.mp3',
       "hint": "ㅈㄹㅂㅇㅇㄹㅂㅅ",
       "answersong": 'songs/투바투 - 제로바이원러브송.mp3',
       "answerimage": 'images/7.jpg'
    },
    {
       "id":8,
       "title": "TWICE - Scientist",
       "answer":["사이언티스트","scientist", "Scientist"],
       "secondsong": 'songs/트와이스 - scientist.mp3',
       "hint": "ㅅㅇㅇㅌㅅㅌ",
       "answersong": 'songs/A트와이스 - scientist.mp3',
       "answerimage": 'images/8.jpg'
    },
    {
       "id":9,
       "title": "CIX - Cinema",
       "answer":["시네마", "씨네마", "Cinema", "cinema"],
       "secondsong": 'songs/cix - 시네마.mp3',
       "hint": "ㅅㄴㅁ",
       "answersong": 'songs/Acix - 시네마.mp3',
       "answerimage": 'images/9.jpg'
    },
    {
       "id":10,
       "title": "The Boyz - 스릴라이드",
       "answer":["스릴라이드", "스릴 라이드"],
       "secondsong": 'songs/더보이즈 - 스릴라이드.mp3',
       "hint": "ㅅㄹㄹㅇㄷ",
       "answersong": 'songs/A더보이즈 - 스릴라이드 .mp3',
       "answerimage": 'image/10.jpg'
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
               answersong.pause();
               nextquiz();
           }else{
            function showPopup() {
                 window.open("08_2_popup.html", "a", "width=400, height=300, left=100, top=50"); 
                }
           }
       }); 
   }
   
   // // 엔터 누를 시 다음문제 넘어가는 것인데....안됨 ㅠㅠ
   // function entertonext(event){
   //     if(event.key === 'Enter'){
   //         event.preventDefault();
   //         if(i < kpop.length){
   //             bol = false;
   //             answersong.pause();
   //             nextquiz();
   //         } else {
   //             alert("문제 끝!");
   //         }
   //     }
   // }
   
   // document.addEventListener('keydown', entertonext);