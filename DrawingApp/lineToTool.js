//This is a function called "LineToTool", It contains the line icon - its fetching the image from the assets folder.

function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";
//declaring variables
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	//if the mouse is pressed paint on the canvas and if the startMouseX is equal to -1 then we allow the function to run.
	//if both of the above conditions are true then we set StartMouseX euqal to mouseX, startMouseY is equal to mouseY

	//when the mouseIsPressed, we set the drawing to true whilst before it was false.
	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels(); //must be called for reading/writing to pixels
			}

			else{
				updatePixels(); //Applies changes to the pixel state
				//we can draw a line using startMouseX, startMouseY, mouseX and mouseY; this enables us
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
//for drawing, it saves the progress of the line so that we aren't drawing a different line each time. It does this by turning drawing to false
// and setting startmouseX and startMouseY back to -1 instead of mouseX and mouseY.
		else if(drawing){
			line(startMouseX, startMouseY, mouseX, mouseY);
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
