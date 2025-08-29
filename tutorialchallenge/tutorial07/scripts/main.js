
document.addEventListener("DOMContentLoaded", function() {
let lyrics = `I can't remember how many e-mails I sent you. 
Just to tell you about my day. 
There aren't many more ways in words that I can say. 
So I'll just say numerically from my soul to you - 143.`

let lines = lyrics.split(" \n");
console.log(lines);

let lyricsShowed = document.getElementById("karaokeDisplay")

function displayLine (line, delay) {
    lyricsShowed.innerHTML = "";  
    let char = 0  //The "+=" sign enables each line to be appended in w/o removing previous
    for (let character of line){
    char ++
    setTimeout (function() {
        lyricsShowed.innerHTML += character
    }, delay * char )}
}

let lineDelays = [5969, 5802, 10248]

//Including the audio 
const song = new Audio("music.mp3");

//timing the characters
let charDelay = [ ];
while(charDelay.length != lineDelays.length){
    charDelay.push(50);
    console.log(charDelay)
}

let button = document.getElementById("btnPlay");
let timeouts = [ ];

function playSong() {
    timeouts.forEach(function(value){
        clearTimeout(value);
    });
    song.currentTime = 0;
    song.play();
    displayLyrics();
};
button.addEventListener("click", playSong);

//Displaying lyrics
function displayLyrics () {
    let totalDelay = 0;
    for(let counter = 0; counter < lines.length; counter++) {
            const timerId = setTimeout(function(){
            displayLine(lines[counter], charDelay[counter]); //as we will be assigning chardelay for the entire line - same no of delays as no. of lines
        }, totalDelay);

        totalDelay += lineDelays[counter];
        timeouts.push(timerId) 
    } //store timerId in timeouts as it is a global variable
};


lastClickTime = Date.now()
document.addEventListener("click", function(){
    console.log(Date.now() - lastClickTime)
    lastClickTime = Date.now()
}) 



})

//evertime we press play, a series of timeouts are created -- old timeouts will display old lyrics.
