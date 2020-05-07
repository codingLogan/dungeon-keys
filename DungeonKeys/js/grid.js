//grid.js
//author: logan rasmussen

//arrays used for different levels (tile-maps)
var tiles = [
	[1,1,0,0,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,2,2,2,2,2,1,1,1],
	[1,0,0,1,1,2,2,2,2,2,1,1,1],
	[1,0,0,1,1,2,2,2,2,2,1,1,1],
	[1,0,0,1,1,2,2,2,2,1,1,1,1],
	[1,0,0,1,1,2,2,1,1,1,1,1,1],
	[1,0,0,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,1,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,1,1,1,1,1]
	];

//draw function
//used to draw a tilemap from an array
//not used for grid pattern (assignment 2)
function draw(rows, columns)
{
	var txt = '<table>';
	var cssClass = '';
	for(var i=0; i < rows; i++)
	{
		//start of the row
		txt += "<tr>";
		for(var j=0; j < columns; j++)
		{
			if(tiles[i][j] == 0){
				cssClass = "dirt";
			}
			if(tiles[i][j] == 1){
				 cssClass = "grass";
			}
			if(tiles[i][j] == 2){
				 cssClass = "water";
			}
			
			txt += "<td class='" + cssClass + "'></td>";
		}
		txt += "</tr>";
	}
	txt += "</table>";
	document.getElementById('grid').innerHTML=txt;
}

//drawpattern function
//used to draw out a grid pattern, given rows and columns as parameters
function drawpattern(rows, columns)
{
	var txt = '<table>';
	var cssClass = '';
	var x = 1;//used to determine what class to use
	var y = 1;//used to determine the color change per row
	for(var i=0; i < rows; i++)
	{
		//set the color for first column
		if(y == 1) x = 0;
		else x = 1;
		
		//set the color for the next row
		if(y == 0) y = 1;
		else y = 0;
		
		//start of the row
		txt += "<tr>";
		for(var j=0; j < columns; j++)
		{
			if(x == 1){
				 cssClass = "wall";
			}
			if(x == 0){
				 cssClass = "lava";
			}
			
			txt += "<td class='" + cssClass + "'></td>";
			if(x == 1) x = 0;
			else x = 1;
		}
		txt += "</tr>";
	}
	txt += "</table>";
	document.getElementById('grid').innerHTML=txt;
}
window.onload = drawpattern(8,8);