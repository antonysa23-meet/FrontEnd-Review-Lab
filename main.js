function bark(){
	let mySound = new Audio('my_audio_file.wav')
	mySound.play()
}
function changeBackgroundColor(){
	input = document.getElementById("color").value
	document.body.style.backgroundColor = input;
	bark()
}
