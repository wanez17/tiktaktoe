/* Function called whenever user tap on any box*/
function myfunc(){

	//Setting DOM to all boxes or input field

var box1, box2, box3, box4, box5, box6, box7, box8, box9;

box1 = document.getElementById("box1").value;
box2 = document.getElementById("box2").value;
box3 = document.getElementById("box3").value;
box4 = document.getElementById("box4").value;
box5 = document.getElementById("box5").value;
box6 = document.getElementById("box6").value;
box7 = document.getElementById("box7").value;
box8 = document.getElementById("box8").value;
box9 = document.getElementById("box9").value;


// Checking if player X won or not and after that disable all other fields

if ((box1 == "x" || box1 == "X") && (box2 == "x" || box2 == "X") && (box3 == "x" || box3 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player X won");
}

else if ((box1 == "x" || box1 == "X") && (box4 == "x" || box4 == "X" ) && (box7 == "x" || box7 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player X won");

}

else if ((box7 == "x" || box7 == "X") && (box8 == "x" || box8 == "X") && (box9 == "x" || box9 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;

	window.alert("Player X won");

}

else if((box3 == "x" || box3 == "X" ) && (box6 =="x" || box6 == "X") && (box9 == "x" || box9 == "X" )) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;

	window.alert("Player X won");

}

else if ((box1 == "x" || box1 == "X" ) && (box5 == "x" || box5 == "X" ) && (box9 == "x" || box9 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;

	window.alert("Player X won");


}

else if((box3 == "x" || box3 == "X") && (box5 == "x" || box5 == "X") && (box7 == "x" || box7 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player X won");

}

else if((box2 == "x" || box2 == "X") && (box5 == "x" || box5 == "X") && (box8 == "x" || box8 == "X")) {
	document.getElementById("print").innerHTML = "Player X won";


	document.getElementById("box1").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player X won");

}

else if((box4 == "x" || box4 == "X") && (box5 == "x" || box5 == "X") && (box6 == "x" || box6 == "X" )) {
	document.getElementById("print").innerHTML = "Player X won";


	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player X won");

}

// ===========================End of the check for player X====================================

// Checking if player 0 won or not and after that disable all the other fields

else if ((box1 == "0" || box1 == "0") && (box2 == "0" || box2 == "0") && (box3 == "0" || box3 == "3")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player O won");

}

else if ((box1 == "0" || box1 == "0") && (box4 == "0" || box4 == "0") && (box7 == "0" || box7 == "0")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player O won");
}

else if((box7 == "0" || box7 == "O") && (box8 == "0" || box8 == "O") && (box9 == "0" || box9 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box6").disabled = true;

	window.alert("Player O won");
}

else if((box3 == "0" || box3 == "O") && (box6 == "0" || box6 == "O") && (box9 == "0" || box9 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box5").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;

	window.alert("Player O won");
}

else if((box1 == "0" || box1 == "O") && (box5 =="0" || box5 == "O") && (box9 == "0" || box9 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;

	window.alert("Player O won");
}

else if((box3 == "0" || box3 =="O") && (box5 == "0" || box5 == "O") && (box7 == "0" || box7 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player O won");
}

else if((box2 == "0" || box2 == "O") && (box5 = "0" || box5 == "O") && (box8 == "0" || box8 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box4").disabled = true;
	document.getElementById("box6").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player O won");
}

else if((box4 == "0" || box4 == "O") && (box5 == "0" || box5 == "O") && (box6 == "0" || box6 == "O")) {
	document.getElementById("print").innerHTML = "Player O won";

	document.getElementById("box1").disabled = true;
	document.getElementById("box2").disabled = true;
	document.getElementById("box3").disabled = true;
	document.getElementById("box7").disabled = true;
	document.getElementById("box8").disabled = true;
	document.getElementById("box9").disabled = true;

	window.alert("Player O won");
}


// ===========================End of the check for player X====================================

// Checking for tie(draw)

else if((box1 == "X" || box1 == "0") && (box2 == "X" || box2 == "0") && (box3 == "X" || box3 == "0") && (box4 == "X" || box4 == "0") && (box5 == "X" || box5 == "0") && (box6 == "X" || box6 == "0") && (box7 == "X" || box7 == "0") && (box8 == "X" || box8 == "0") && (box9 == "X" || box9 == "0")) {

	document.getElementById("print").innerHTML = "It's a draw game ";
	window.alert("Match Tie");
}
else{
	// Here, Printing the Result
	if (flag == 1) {
		document.getElementById("print").innerHTML = "Player X turn";
}

else{
	document.getElementById("print").innerHTML = "Player 0 turn";
		}

	}

}

// This is the function to reset the game 
function myfunc_2() {
	location.reload();

	document.getElementById("box1").value = " ";
	document.getElementById("box2").value = " ";
	document.getElementById("box3").value = " ";
	document.getElementById("box4").value = " ";
	document.getElementById("box5").value = " ";
	document.getElementById("box6").value = " ";
	document.getElementById("box7").value = " ";
	document.getElementById("box8").value = " ";
	document.getElementById("box9").value = " ";

}

/* Here onwards,function checks the turn of the player and put in the value accordingly */
flag = 1;

function myfunc_3() {
	if (flag == 1) {
		document.getElementById("box1").value = "X" ;
		document.getElementById("box1").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box1").value = "0";
		document.getElementById("box1").disabled = true;
		flag = 1;
	}
		}



function myfunc_4() {
	if (flag == 1) {
		document.getElementById("box2").value = "X" ;
		document.getElementById("box2").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box2").value = "0";
		document.getElementById("box2").disabled = true;
		flag = 1;
	}
		}




function myfunc_5() {
	if (flag == 1) {
		document.getElementById("box3").value = "X" ;
		document.getElementById("box3").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box3").value = "0";
		document.getElementById("box3").disabled = true;
		flag = 1;
	}
		}




function myfunc_6() {
	if (flag == 1) {
		document.getElementById("box4").value = "X" ;
		document.getElementById("box4").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box4").value = "0";
		document.getElementById("box4").disabled = true;
		flag = 1;
	}
		}
function myfunc_7() {
	if (flag == 1) {
		document.getElementById("box5").value = "X" ;
		document.getElementById("box5").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box5").value = "0";
		document.getElementById("box5").disabled = true;
		flag = 1;
	}
		}



function myfunc_8() {
	if (flag == 1) {
		document.getElementById("box6").value = "X" ;
		document.getElementById("box6").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box6").value = "0";
		document.getElementById("box6").disabled = true;
		flag = 1;
	}
		}



function myfunc_9() {
	if (flag == 1) {
		document.getElementById("box7").value = "X" ;
		document.getElementById("box7").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box7").value = "0";
		document.getElementById("box7").disabled = true;
		flag = 1;
	}
		}





function myfunc_10() {
	if (flag == 1) {
		document.getElementById("box8").value = "X" ;
		document.getElementById("box8").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box8").value = "0";
		document.getElementById("box8").disabled = true;
		flag = 1;
	}
		}




function myfunc_11() {
	if (flag == 1) {
		document.getElementById("box9").value = "X" ;
		document.getElementById("box9").disabled = true;
		flag = 0;
	}

	else {
		document.getElementById("box9").value = "0";
		document.getElementById("box9").disabled = true;
		flag = 1;
	}
		}