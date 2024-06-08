const btn = document.querySelector("#talk");
const content = document.querySelector(".content");

function speak(text) {
   const text_speak = new SpeechSynthesisUtterance(text);
   text_speak.rate = 1;
   text_speak.volume = 1;
   text_speak.pitch = 1;

   window.speechSynthesis.speak(text_speak);
}

function wiseMe(){
    var day = new Date();
    var hour = day.getHours();

    if (hour>=0 && hour<12) {
        speak("Good morning omeka JOSEPH UCHECHI AI ASSISTANT GREATING...")
    }

    else if (hour>=12 && hour<17) {
        speak("Good Aftenoon Oomeka JOSEPH UCHECHI AI ASSISTANT GREATING...")
    }

    else {
        speak("Good Evenining omeka JOSEPH UCHECHI AI ASSISTANT GREATING YOU IN ADVANSE...")
    }
}

window.addEventListener("load", ()=>{
    speak("Initializing OMEKE JOSEPH UCHECHI...");
    wiseMe();
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