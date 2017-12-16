var player;
var computer 
var rock = 1;
var paper = 2;
var scissors = 3; 


function setup() {
	createCanvas(displayWidth, displayHeight);


}

function draw() {
	
	
}

function keyPressed(){
 if (key == '1'){
player = rock
drawRock()
 }
 if(key == '2'){
player = paper
drawPaper()	
 }
 if (key == '3'){
 	player = scissors 
 }

computer = floor(random(1, 4));

if(computer == 1){
	computer = rock 
    }
if(computer == 2){
	computer = paper
	}
if(computer == 3){
	computer = scissors

	}
}



  





function check(){
	//Checking if the player has lost:
if ((player == paper && computer == scissors) || 
	(player == rock && computer == paper)||
	(player == scissors && computer == rock)){
		alert('Player has lost...');
}
//Checking if player has won:
if  ((player == scissors && computer == rock)||
	(player == paper && computer == rock) ||
	(player == rock && computer == scissors)){
		alert('Player has won!!');

	}
//Checking if there was a tie: 
if ((player == paper && computer == paper) ||
	(player == rock && computer == rock) ||
	(player == scissors && computer == scissors)){
		alert('No winner, its a tie!');
	

	}

}




	

 function drawRock() {
 	//Shadow 
 	fill(33, 33, 28);
	ellipse(500, 590, 310, 50);
 	//Base of Rock
 	noStroke();
 	fill(84, 82, 78);
 	ellipse(400, 500, 310, 200);
 	//Blush
 	fill(220, 122, 250);
 	ellipse(290, 530, 30, 20);
 	ellipse(410, 530, 30, 20);
 	//Eyes 
 	fill(0);
 	ellipse(300, 500, 50, 50);
 	ellipse(400, 500, 50, 50);
 	//Eye Details 
 	fill(255);
 		//Right Eye
 	ellipse(290, 490, 20, 20);
 	ellipse(295, 500, 10, 10);
 	ellipse(298, 501, 10, 10);
 		//Left Eye 
 	fill(255);
 	ellipse(390, 490, 20, 20);
 	ellipse(395, 500, 10, 10);
 	ellipse(398, 501, 10, 10);


	
 	
 }
 function drawPaper() {
 	//Shadow
 	fill(132, 137, 143);
 	rect(520, 90, 310, 280);
 	//Base of Paper
 	fill(226, 234, 245);
 	rect(500, 100, 310, 280);
 	//Lines 
 	fill(255, 0, 0);
 	strokeWeight(4);
 	line(550, 100, 550, 200);
 	//Eyes 
 	fill(0);
 	ellipse(500, 150, 50, 50);

 }
 function drawScissors() {
 	
 }




