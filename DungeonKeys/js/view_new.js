//drawing functions
//aka: the view

//drawMap
//this should only draw what is viewable, not the entire map
function drawMap(){
	//draw the table, only the viewable part
	var txt = '<table id="tableid" class="gametable">';
	var cssClass = '';
	var rows = engine.screen.height;
	var columns = engine.screen.width;
	var tiles = engine.map.gameTiles;
	for(var j=0; j < rows; j++)//j = y
	{
		//start of the row
		txt += "<tr>";
		for(var i=0; i < columns; i++)//i = x
		{
			//calc view position
			var viewY = j + engine.viewPosition.y;
			var viewX = i + engine.viewPosition.x;
			
			if(tiles[viewY][viewX] == 0){
				cssClass = "path";
			}
			if(tiles[viewY][viewX] == 1){
				 cssClass = "wall";
			}
			if(tiles[viewY][viewX] == 2){
				 cssClass = "water";
			}
			if(tiles[viewY][viewX] == 3){
				 cssClass = "dirt";
			}
			if(tiles[viewY][viewX] == 4){
				 cssClass = "grass";
			}
			if(tiles[viewY][viewX] == 5){
				 cssClass = "win";
			}
			
			txt += "<td class='" + cssClass + "'><img class='stretch' src='images/" + cssClass + ".png'/></td>";
		}
		txt += "</tr>";
	}
	txt += "</table>";
	document.getElementById('grid').innerHTML=txt;
	//draw keys
	drawObjects();
	//draw player too
	drawPlayer();
	printInventory();
	//for assignment 4, clickable grid
	clickable();
	//printDebug();
}

function drawKeys(){
	var table = document.getElementById('tableid');
	var keys = engine.map.keys;
	var viewx = engine.viewPosition.x;
	var viewy = engine.viewPosition.y;
	
	//go through each key object in the array
	for(var i in keys){
		//if the key is within the viewable rows
		//ex:  keyx = 5, keyy = 5
		//    viewx = 0, viewy= 0
		// 5-0, 5; 5-0 5;  is on the table
		//keyx = 20 keyy = 20
		//viewx= 0  viewy =0
		//20-0 (not on view) doesn't print
		if(table.rows[keys[i].y - viewy] && table.rows[keys[i].y - viewy].cells[keys[i].x - viewx]
			&& keys[i].collected == false){
			cell = table.rows[keys[i].y - viewy].cells[keys[i].x - viewx];
			cell.className = 'key' + i + ' gamecell';
		}
	}
}

//used to print all the objects on the screen
function drawObjects(){
	var table = document.getElementById('tableid');
	var keys = engine.map.keys;
	var doors = engine.map.doors;
	var switches = engine.map.switches;
	var viewx = engine.viewPosition.x;
	var viewy = engine.viewPosition.y;
	
	//go through each key object in the array
	for(var i in keys){
		//if the key is within the viewable rows
		//ex:  keyx = 5, keyy = 5
		//    viewx = 0, viewy= 0
		// 5-0, 5; 5-0 5;  is on the table
		//keyx = 20 keyy = 20
		//viewx= 0  viewy =0
		//20-0 (not on view) doesn't print
		if(table.rows[keys[i].y - viewy] && table.rows[keys[i].y - viewy].cells[keys[i].x - viewx]
			&& keys[i].collected == false){
			cell = table.rows[keys[i].y - viewy].cells[keys[i].x - viewx];
			cell.className = 'key ' + i + ' gamecell';
			cell.innerHTML = "K";
		}
	}
	
	//print doors
	for (var i in doors){
		if(table.rows[doors[i].y - viewy] && table.rows[doors[i].y - viewy].cells[doors[i].x - viewx]
			&& doors[i].opened == false  && (typeof engine.map.switches[i] === 'undefined' || engine.map.switches[i].active == false)){
			cell = table.rows[doors[i].y - viewy].cells[doors[i].x - viewx];
			if(i == 'hidden1'){
				cell.innerHTML = "<td class='wall gamecell'><img class='stretch' src='images/wall.png'/></td>";
			}
			else{
				cell.className = 'door ' + i + ' gamecell';
				cell.innerHTML = "D";
			}
		}
	}
	
	//print switches
	for (var i in switches){
		if(table.rows[switches[i].y - viewy] && table.rows[switches[i].y - viewy].cells[switches[i].x - viewx]
			&& switches[i].active == false){
			cell = table.rows[switches[i].y - viewy].cells[switches[i].x - viewx];
			if(i == 'hidden1'){
				cell.className = 'path gamecell';
			}
			else{
				cell.className = 'switch ' + i + ' gamecell';
				cell.innerHTML = "S";
			}
		}
	}
}

//used to print the player onto the screen
function drawPlayer(){
	var table = document.getElementById('tableid');
	var tiles = engine.map.gameTiles;
	var playerX = player.x;
	var playerY = player.y;
	var viewx = engine.viewPosition.x;
	var viewy = engine.viewPosition.y;

	//you have to subtract the view position so it shows the player in the correct place
	if(table.rows[playerY - viewy] && table.rows[playerY - viewy].cells[playerX - viewx]){
		cell = table.rows[playerY - viewy].cells[playerX - viewx];
		cell.className = 'player gamecell';
		cell.innerHTML = player.name;
	}
}

function printInventory(){
	var message = '';
	//keys
	message += "Your Keys:<br>";
	for(var i in player.inventory.keys){
		message += player.inventory.keys[i] + "<br>";
	}
	
	var div = document.getElementById('inventory');
	div.innerHTML = message;
}

function printDebug(){
	var message = '';
	message += "playerx: " + player.x + ", playery: " + player.y + "<br>";
	message += "viewx: " + engine.viewPosition.x + ", viewy: " + engine.viewPosition.y + "<br>";
	
	//console output
	for(var i in player.inventory.keys){
		message += "keys-obtained: " + player.inventory.keys[i] + "<br>";
	}
	for(var i in engine.map.doors){
		message += i + " door opened?: " + engine.map.doors[i].opened + "<br>";
	}
	for(var i in engine.map.switches){
		message += i + " switch active?: " + engine.map.switches[i].active + "<br>";
	}
	
	var div = document.getElementById('debug');
	div.innerHTML = message;
	
	//console output
	console.log(engine.map);
	console.log(engine.viewPosition);
	console.log(engine.screen);
}

//function used for onlcick event of all cells for assignment 4
function clickable(){
	var table = document.getElementById('tableid');
	if(table.rows.length > 0){
		var height = table.rows.length;
		for(var j = 0; j < height; j++){
			if(table.rows[j].cells.length > 0){
				var width = table.rows[j].cells.length;
				for(var i = 0; i < width; i++){
					table.rows[j].cells[i].onclick = function(){
						var table = document.getElementById('tableid');
						var col = this.cellIndex;
						var row = this.parentNode.rowIndex;
						var cell = table.rows[row].cells[col];
						cell.className = "";
						cell.innerHTML = "<td>clicked</td>";
						var message = "you clicked " + cell.cellIndex + ", " + cell.parentNode.rowIndex + "!<br>";
						var debug = document.getElementById('debug');
						debug.innerHTML = message;
					};
				}
			}
		}
	}
}

//------------------assignment four--------------------
var pixels = 5;
var left = 0;
var height = 700;
//animate the box around the screen
function animatebox(){
	box = document.getElementById('box');
	//want to move diagnally right and dowon
	//setTimeout(animateLeft, 15);
	setTimeout(animateUp, 15);
}

function animateLeft(){
	box = document.getElementById('box');
	left += pixels;
	box.style.left = left + "px";
	if(left < 450){
		setTimeout(animateLeft, 15);
	}
}

function animateDown(){
	box = document.getElementById('box');
	height += pixels;
	box.style.top = height + "px";
	if(height < 450){
		setTimeout(animateDown, 15);
	}
}

function animateUp(){
	box = document.getElementById('box');
	height -= pixels;
	box.style.top = height + "px";
	if(height > 0){
		setTimeout(animateUp, 20);
	}
}

function assignment6(){
	if(localStorage){
		var timetext = document.getElementById('timestamp');
		var response = localStorage.getItem('cs2550timestamp');
		//alert(response);
		//display the timestamp login info
		timetext.innerHTML = response;
	}
}

window.onload = drawMap;
animatebox();