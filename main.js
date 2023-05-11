x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
mango = "";
speak_data = "";
to_number = "";

draw_mango = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started Drawing Mango"; 
      draw_mango = "set";
    }
    else{
        document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
    }
}

function setup() {
  canvas = createCanvas(900, 500);
}

function draw() {
  if(draw_mango == "set"){
    document.getElementById("status").innerHTML = to_number + " Mangoes drawn";
    draw_mango = "";
    speak_data = to_number + "Mangoes Drawn";
    speak();
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(mango , x, y, 50, 50);
    }
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}
function preload(){
  mango = loadImage("mango.png");
}