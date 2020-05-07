//view.js
//author: logan rasmussen

//draw function
//used to draw a tilemap from an array
//not used for grid pattern (assignment 2)
function draw(rows, columns)
{
	//draw the table, with it's basic background...
	var txt = '<table id="tableid">';
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
			//txt += "<td class='" + cssClass + "'><img class='stretch' src='images/" + cssClass + ".png'/></td>";
		}
		txt += "</tr>";
	}
	txt += "</table>";
	document.getElementById('grid').innerHTML=txt;
	//draw objects on table
	drawObjects();
}

function drawObjects(){
	//get pointer to table
	var grid = document.getElementById('tableid');
	var cell = grid.rows[keys.green.keyY].cells[keys.green.keyX];
	if(cell.innerText != 'undefined')
		cell.innerText = 'key';
	else cell.textContent = 'key';
	
	//draw player
	cell = grid.rows[player.playerY].cells[player.playerX];
	if(cell.innerText != 'undefined')
		cell.innerText = 'Player';
	else cell.textContent = 'Player';
	
	//draw door
	cell = grid.rows[doors.green.doorY].cells[doors.green.doorX];
	if(cell.innerText != 'undefined')
		cell.innerText = 'door';
	else cell.textContent = 'door';
}
//this will initialize the level, at the given length and width of tiles.
window.onload = draw(tiles.length, tiles[0].length);