import * as genre from '/javascript/genre.js';

// secondGame
var audio = new Audio('songs/' + genre + '/primetime.m4a');
audio.play();
if(genre === "hiphop"){
    alert("힙합입니당");
}else{
    alert("다른거입니당");
}