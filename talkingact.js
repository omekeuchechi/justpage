const btn = document.querySelector("#talk");
const content = document.querySelector(".content");

function speak(text) {
   const text_speak = new SpeechSynthesisUtterance(text);
   text_speak.rate = 1;
   text_speak.volume = 1;
   text_speak.pitch = 4;

   window.speechSynthesis.speak(text_speak);
}

let onesTime = ['monday', 'tusday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.table(onesTime);

function giveMeDate(){
    var daysOfTheWeek = new Date();
    var days = daysOfTheWeek.getDay();

    if (days == 1) {
        speak("the day is"+onesTime[0])
    }
    else if(days == 2){
        speak("the day is"+onesTime[1])
    }
    else if(days == 3){
        speak("the day is"+onesTime[2])
    }
    else if(days == 4){
        speak("the day is"+onesTime[3])
    }
    else if(days == 5){
        speak("the day is"+onesTime[4])
    }
    else if(days == 6){
        speak("the day is"+onesTime[5])
    }
    else if(days == 7){
        speak("the day is"+onesTime[6])
    }
}

function wiseMe(){
    var day = new Date();
    var hour = day.getHours();

    if (hour>=0 && hour<12) {
        speak("Good morning omeka JOSEPH UCHECHI AI ASSISTANT GREATING...");
        speak( "the time is"+ day.getTime()+"thank you");
    }

    else if (hour>=12 && hour<17) {
        speak("Good Aftenoon Omeka JOSEPH UCHECHI AI ASSISTANT GREATING...");
        speak( "the time is"+ day.getTime()+"thank you");
    }

    else {
        speak("Good Evenining omeka JOSEPH UCHECHI AI ASSISTANT GREATING YOU IN ADVANSE...");
        speak( "the time is"+ day.getTime()+"thank you");
    }
}

let getError = "please check all your code before you commit changes to getride of bugs....."

window.addEventListener("load", ()=>{
    speak("Initializing OMEKE JOSEPH UCHECHI...");
    speak("you have not create your functions in your talkingact.js");
    speak(getError);
    wiseMe();
    giveMeDate();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();

recongnition.onresult = (event)=> {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recongnition.start();
});

function takeCommand(message){
    if (messsage.includes('hey') || message.includes('hello')) {
        speak("hello sir, How can i help you");
    }
    else{
        speak("make it more intelligent.....")
    }
}
function takeCommand(message){
    if (messsage.includes('okey') || message.includes('ok')) {
        speak("Thank you");
    }
    else{
        speak("make it more intelligent.....")
    }
}
