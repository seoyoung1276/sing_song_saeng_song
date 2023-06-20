var indy = [
 {
    "id": 1,
    "title": "잔나비 - 주저하는 연인들을 위해",
    "answer": ["주저하는 연인들을 위해", "주저하는연인들을위해", "주저하는연인들을 위해", "주저하는 연인들을위해"],
    "secondsong": 'songs/잔나비 - 주저하는 연인들을 위해.mp3',
    "hint":"ㅈㅈㅎㄴㅇㄴㄷㅇㅇㅎ",
    "answersong": 'songs/A잔나비 - 주저하는 연인들을 위해.mp3',
    "answerimage": 'image/1.jpg'
 },
  
 {
    "id": 2,
    "title": "백아 - 첫사랑",
    "answer": ["첫사랑", "첫 사랑"],
    "secondsong": 'songs/백아 - 첫사랑.mp3',
    "hint": "ㅊㅅㄹ",
    "answersong": 'songs/A백아 - 첫사랑.mp3',
    "answerimage": 'image/2.jpg'
 },

 {
    "id":3,
    "title": "검정치마 - everything",
    "answer":["everything","에브리띵", "Everything"],
    "secondsong": 'songs/검정치마 - everything.mp3',
    "hint": "ㅇㅂㄹㄸ",
    "answersong": 'songs/A검정치마 - everything.mp3',
    "answerimage": 'image/3.jpg'
 }
];


    var firstTitle = indy[0].title;
    var musicTitle = document.getElementById("musicTitle");

    if (musicTitle) {   
        musicTitle.textContent = firstTitle;
    }


    if (typeof nextBtn !== 'undefined' && nextBtn !== null) {
        nextBtn.addEventListener("click", function(){
            window.location.href = 'Answer.html';
        }); 
    }

    if (typeof toGameBtn !== 'undefined' && toGameBtn !== null) {
        toGameBtn.addEventListener("click", function(){
            window.location.href = 'secondGame.html';
        });
    }
