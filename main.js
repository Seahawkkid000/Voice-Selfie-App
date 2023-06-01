var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event){
    console.log(event)
    var Content = event.results[0][0].transcript
    console.log(Content)
    document.getElementById("textbox").innerHTML = Content
    if (Content=="take my selfie") {
     speak()  
     setTimeout(() => {
        takeSelfie()
        save()
    },5000); 
    }
    
    
}
function speak(){
    var Synthesis = window.speechSynthesis
    var SpeechData = document.getElementById("textbox").value
    var Utter = new SpeechSynthesisUtterance(SpeechData)
    Synthesis.speak(Utter)
    Webcam.attach(camera) 
    }
    camera = document.getElementById("camera")
    Webcam.set({
        width:360,
        height:250,
        image_format:"png",
        png_quality:90,
    
    })
function takeSelfie(){

 
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img  id="selfie_image" src="'+data_uri+'"></img>' 
    })
}
function save(){
   link=document.getElementById("link")
   image=document.getElementById("selfie_image").src
   link.href = image
   link.click()
}
