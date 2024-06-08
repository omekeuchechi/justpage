const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recongnition = new SpeechRecognition();

recongnition.onstart = ()=> {
    console.log("speech recognition started");
}

recongnition.onresult = (event)=>{
    console.log(event)
    
    const spokenWords = event.results[0][0].transcript;

    console.log("spoken words are",spokenWords);
}


button.addEventListener("click", ()=>{
    recongnition.start();
})
