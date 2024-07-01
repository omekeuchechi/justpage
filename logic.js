
let messages = document.getElementById("messages");
let input = document.getElementById("input");
let sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  let message = input.value;
  input.value = "";
  let messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("user-message");
  messages.appendChild(messageElement);

  let botMessage = generateBotMessage(message);

  setTimeout(function() {
    let botMessageElement = document.createElement("div");
    botMessageElement.innerText = botMessage;
    botMessageElement.classList.add("bot-message");
    messages.appendChild(botMessageElement);
  }, 2000);
}
//response function 
function generateBotMessage(message) {
  let responses = {
    // "hello": "Hi there!",
    "how are you": "I'm doing well. How are you?",
    "what's your favorite color?": "I'm a bot. I don't have a favorite color.",
    "goodbye": "Goodbye!",
    "what are you made for": "Master Omeke made me for code storing and also for code debuging also",
    "music": "i'm program to give you previous code being stored in the server",
    "help": "sure how can i assist you today",
    "movie": "i'm program to give you previous code being stored in the server",
    "book": "i'm program to give you previous code being stored in the server",
    "music": "i'm program to give you previous code being stored in the server",
    "what is php": "php stands for hypertext preprocessor",
    "what is gdscript": "gdscript stands for godot script used in godot game engine"
  };

  let response = "I'm sorry, I don't understand.";

  for(let key in responses) {
    if(message.toLowerCase().includes(key)) {
      response = responses[key];
    }
  }
  return response;

}