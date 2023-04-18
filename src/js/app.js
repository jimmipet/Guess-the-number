// рандомное число 
let randomNumber = Math.floor(( Math.random() * 20) + 1);
let score = 20;
let higthScore = 0;

//функция замены текста над инпутом
const displayMessage = function(message){
	document.querySelector(".message").textContent = message;
}

//нажатие на кнопку проверки
document.querySelector(".check").addEventListener("click", function(){
	const guess = Number (document.querySelector(".guess").value);

	if( guess === randomNumber){
		document.querySelector(".number").textContent = randomNumber;
		displayMessage("Вы угадали число")
		document.querySelector("body").style.background = "green";

		if(score > higthScore){
			higthScore = score;
			document.querySelector(".higth-score").textContent=higthScore;
		}

	}
	else if( guess !== randomNumber ){
		score--;
		document.querySelector(".score").textContent = score;
		displayMessage("Вы не угадали число")
		
		if(score <1){
		displayMessage("Вы проигали!")
		document.querySelector(".score").textContent=0;
		document.querySelector(".number").style.background = "red";
		}
	}
});


document.querySelector(".again").addEventListener("click", function(){
	document.querySelector("body").style.background = "radial-gradient(circle, #5d1a78, #414b50)";
	score=20;
	randomNumber = Math.floor(( Math.random() * 20) + 1);
	displayMessage("Начните угадывать число...")
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector(".score").textContent = score;
});