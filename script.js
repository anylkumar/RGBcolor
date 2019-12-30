var numSquares = 6
var colors = generateRandomColors(numSquares);

var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#h1");
var newGame = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");

	numSquares = 3;
    colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(45, 102, 227)";
	messageDisplay.textContent = "";
	for(var i = 0; i <= squares.length; i++){
		if(colors[i]) {
	squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(45, 102, 227)";
	messageDisplay.textContent = "";
	for(var i = 0; i <= squares.length; i++){

	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	
	}
});

newGame.addEventListener("click", function(){
	numSquares = 6
	colors = generateRandomColors(numSquares);
	newGame.textContent = "New Colors";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(45, 102, 227)";
	messageDisplay.textContent = "";
	for(var i = 0; i <= squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i <= squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
		newGame.textContent = "Play Again?";
		h1.style.backgroundColor = clickedColor;
		messageDisplay.textContent = "Correct!!!";
		changeColor(clickedColor);
	}else{
		this.style.backgroundColor = "black" ;
		messageDisplay.textContent = "Try Again!!!"
	}
	})

}

function changeColor(color) {
	for(var i = 0; i <= squares.length; i++){
		squares[i].style.backgroundColor = color;
}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
	arr.push(randomColors())
	}

	return arr;
}

function randomColors() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r +", "+ g +", "+ b +")"
}

