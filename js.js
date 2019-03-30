
function calculate() {
	let firstNumber = document.getElementById("firstnum").value
	firstNumber = parseInt(firstNumber)
	
	let secondNumber = document.getElementById("lastnum").value
	secondNumber = parseInt(secondNumber)
	let sum = firstNumber + secondNumber
	document.getElementById("result").innerHTML = ""+sum
	
}


function tell() {
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
	alert("Check Out My Site")
}

function playaudio() {
	var audio = new Audio('macintoshplus2xspeed.mp3')
	audio.play();
}

tell()
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the reverse text");
}

function buttonClick(){
	var n = document.getElementById("number")
	n.innerHTML = Math.floor((Math.random() * 1999999960) + 40);
}