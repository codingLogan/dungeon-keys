//model.js this is the model for Dungeon Keys
//author: logan rasmussen
//date : feb 23, 2014
//audio was found on www.soundjay.com

//constructors-----------------------------------
//constructor function for keys
//assumes keys array exists
function createKey(colors, xpos, ypos){
	var key = {
		color : colors,
		collected : false,
		x : xpos,
		y : ypos
	}
	if(typeof keys != 'undefined'){
		keys[colors] = key;
		keys.length++;
		return key;
	}
	else{
		return false;
	}
}

//constructor for doors
//assumes doors array exists
function createDoor(colors, xpos, ypos){
	var door = {
		color : colors,
		opened : false,
		x : xpos,
		y : ypos
	}
	if(typeof doors != 'undefined'){
		doors[colors] = door;
		return door;
	}
	else{
		return false;
	}
	
}

//constructor for timed switch
//assumes switch array exists
function createSwitch(colors, xpos, ypos, time){
	var timer = {
		color : colors,
		active : false,
		x : xpos,
		y : ypos,
		countdown : function(){
			this.active = true;
			setTimeout(function(){timer.active = false; document.getElementById('doorclose').play(); drawMap();}, time);
		}
	}
	if(typeof switches != 'undefined'){
		switches[colors] = timer;
		return timer;
	}
	else{
		return false;
	}
}
//end constructors-------------------------------

//arrays for items in the level------------------
//keys for levels
keys = new Array();
doors = new Array();
switches = new Array();

//array to hold collidable objects (from tilemap)
collide = [1, 2, 5];
//end arrays for level creation------------------

//level data-------------------------------------
//level 1
// the 'map' holds all the data of what the 'world' should look like
//0 = pathway
//1 = wall

mapOne = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,1],
	[1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,4,4,4,4,4,1],
	[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,4,4,4,4,4,1],
	[1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,4,3,3,3,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,4,3,4,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,4,3,4,4,3,1],
	[1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,4,3,4,4,3,1],
	[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,4,3,1],
	[1,0,1,1,1,1,1,1,0,0,1,2,2,2,2,2,1,2,0,0,0,1,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,2,2,2,2,2,1,2,0,0,0,1,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,2,2,2,0,1,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,2,2,2,2,1,4,3,1],
	[1,1,1,1,1,1,0,1,2,0,0,0,0,0,0,0,1,2,2,2,2,1,4,3,1],
	[1,0,0,0,0,0,0,1,2,2,2,2,0,0,0,0,1,1,1,1,1,1,4,3,1],
	[1,0,0,0,0,0,0,1,2,2,2,2,2,0,0,0,0,1,4,4,4,4,4,3,1],
	[1,0,0,0,0,0,0,1,1,1,1,1,2,0,2,2,1,1,4,4,4,4,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,0,1,2,0,2,2,1,4,4,5,4,4,4,3,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,2,0,2,2,1,4,4,3,4,4,4,3,1],
	[1,0,0,0,0,0,0,1,0,0,0,1,2,0,0,0,1,4,4,3,3,3,3,3,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1]
];
//done reading in level data

createKey('green', 5, 3);
createDoor('green', 6, 7);

createSwitch('red', 6, 10, 3000);
createDoor('red', 6, 15);

createSwitch('hidden1', 2, 17, 2000);
createDoor('hidden1', 7, 20);

createDoor('blue', 7, 8);
createKey('blue', 9, 20);

//water puzzle doors
createDoor('purple', 13, 19);
createSwitch('purple', 12, 14, 1500);

createDoor('orange', 13, 19);
createSwitch('orange', 15, 14, 3500);

createDoor('pink', 13, 19);
createSwitch('pink', 16, 17, 2500);
//end water puzzle doors

createDoor('black', 16,10);
createKey('black', 15,21);

createDoor('grey', 20,8);
createKey('grey', 13,5);

createDoor('teal', 14,5);
createSwitch('teal',8,1,6000);

//end level data-------------------------------------

//holds objects that handle game mechanics
engine = {
	//sets the position the map should start being drawn at
	viewPosition : {
		x : 0,
		y : 0,
		setViewPosition : function(xPos,yPos){
			this.x = xPos;
			this.y = yPos;
		}
	},
	
	//screen: the viewable tiles
	screen : {
		width : 9,
		height : 9,
		centerx : 5,
		centery : 5,
		setScreenSize : function(viewWidth, viewHeight){
			this.width = viewWidth;
			this.height = viewHeight;
			this.centerx = Math.ceil(viewWidth / 2);
			this.centery = Math.ceil(viewHeight / 2);
		}
	},
	
	//map: holds current maps data
	//remember to set object variables to use 'this'
	map : {
		gameTiles : null,
		collide : null,
		keys : null,
		doors : null,
		switches : null,
		setMap : function(mapArray){
			this.gameTiles = mapArray;
		},
		
		setCollide : function(collideArray){
			this.collide = collideArray;
		},
		
		setKeys : function(keysArray){
			this.keys = keysArray;
		},
		
		setDoors : function(doorsArray){
			this.doors = doorsArray;
		},
		
		setSwitches : function(switchesArray){
			this.switches = switchesArray;
		},
		
		checkMapExists : function(x, y){
			if(engine.map.gameTiles[y] && engine.map.gameTiles[y][x] >= 0) return true;
			else return false;
		}
	},
	
	//keyboard events
	keyboard : {
		//just returns the keycode value
		getKeyCode : function(key){
			switch(key){
				case 'up': return 38;
				case 'down': return 40;
				case 'left': return 37;
				case 'right': return 39;
			}
		},
		
		input : function(event){
			//make sure you don't go out of bounds...
			var viewx = engine.viewPosition.x;
			var viewy = engine.viewPosition.y;
			var windowx = engine.screen.width;
			var windowy = engine.screen.height;
			var playerX = player.x;
			var playerY = player.y;
			
			//see if player is centered
			//plus one is because if indexes...
			var playerCenterX = (playerX  + 1 - viewx == engine.screen.centerx ? true : false);
			var playerCenterY = (playerY + 1 - viewy == engine.screen.centery ? true : false);
			switch(event.keyCode){
				case engine.keyboard.getKeyCode('up'):
					if(player.playerCollide(playerX, playerY - 1) == false
					&& player.doorCollide(playerX, playerY - 1) == false){
						if(engine.map.checkMapExists( viewx, viewy - 1 )  && playerCenterY){
							engine.viewPosition.y--;
						}
						player.moveUP();
					}
					break;
				case engine.keyboard.getKeyCode('down'):
					if(player.playerCollide(playerX, playerY + 1) == false
					&& player.doorCollide(playerX, playerY + 1) == false){
						if(engine.map.checkMapExists(viewx ,viewy + windowy) && playerCenterY){
							engine.viewPosition.y++;
						}
						player.moveDown();
					}
					break;
				case engine.keyboard.getKeyCode('left'):
					if(player.playerCollide(playerX - 1, playerY) == false
					&& player.doorCollide(playerX - 1, playerY) == false){
						if(engine.map.checkMapExists(viewx - 1,viewy) && playerCenterX){
							engine.viewPosition.x--;
						}
						player.moveLeft();
					}
					break;
				case engine.keyboard.getKeyCode('right'):
					if(player.playerCollide(playerX + 1, playerY) == false
					&& player.doorCollide(playerX + 1, playerY) == false){
						if(engine.map.checkMapExists(viewx + windowx,viewy) && playerCenterX){
							engine.viewPosition.x++;
						}
						player.moveRight();
					}
					break;
			}//end switch
			player.itemCollide();
			drawMap();
		}//end input
	},//end keyboard
	
	items : {
		keys : [],
		doors : [],
		createKey : function(){
		
		}
	}
};//end engine declaration

//player object
player = {
	x : 1,
	y : 1,
	name: "Player",
	inventory : {
		keys : new Array()
	},
	moveUP : function(){
		this.y--;
	},
	moveDown : function(){
		this.y++;
	},
	moveLeft : function(){
		this.x--;
	},
	moveRight : function(){
		this.x++;
	},
	playerCollide : function(x, y){
		var messages = document.getElementById('messages');
		if(engine.map.collide.indexOf(engine.map.gameTiles[y][x]) >= 0){
			if(engine.map.gameTiles[y][x] == 1){
				messages.innerHTML = "You hit something solid...";
				document.getElementById('solid').play();
			}
			else if(engine.map.gameTiles[y][x] == 2){
				messages.innerHTML = "You stepped in the water, but decided to stay dry instead.";
				document.getElementById('water').play();
			}
			else if(engine.map.gameTiles[y][x] == 5){
				messages.innerHTML = "You found your way out of the Dungeon of Keys!  Congratulations!";
				document.getElementById('win').play();
				alert("You have finished the game, good job!  Feel free to explore if you feel you must...");
			}
			return true;
			
		}
		else return false;
	},
	itemCollide : function(){
		var messages = document.getElementById('messages');
		//check for key collision
		//handle key inventory after collision happens
		for (var i in engine.map.keys){
			if (engine.map.keys[i].x == this.x && engine.map.keys[i].y == this.y
				&& engine.map.keys[i].collected == false){
				engine.map.keys[i].collected = true;
				player.inventory.keys[i] = i;
				messages.innerHTML = "you collected a " + i + " key!";
				document.getElementById('collect').play();
			}
		}
		
		//handle switch interaction
		for (var i in engine.map.switches){
			if (engine.map.switches[i].x == this.x && engine.map.switches[i].y == this.y
				&& engine.map.switches[i].active == false){
				engine.map.switches[i].countdown();
				messages.innerHTML = "You activated a switch!";
				document.getElementById('slide').play();
			}
		}
	},
	doorCollide : function(x, y){
		var messages = document.getElementById('messages');
		for (var i in engine.map.doors){
			if (engine.map.doors[i].x == x && engine.map.doors[i].y == y
			&& engine.map.doors[i].opened == false){
				if((engine.map.keys[i] && engine.map.keys[i].collected == true) || (typeof engine.map.switches[i] != 'undefined' && engine.map.switches[i].active == true)){
					engine.map.doors[i].opened = true;
					messages.innerHTML = "The " + i + " door was opened.";
					document.getElementById('dooropen').play();
				}
				else {
					messages.innerHTML = "The " + i + " door is locked!";
					document.getElementById('doorlock').play();
					return true;
				}//collided with door,
			}
		}
		return false;
	}
};

//function to test out the viewport and screen vs map
function start(){
	//reset everything
	engine.viewPosition.setViewPosition(0,0);
	engine.map.setMap(mapOne);
	engine.map.setKeys(keys);
	engine.map.setDoors(doors);
	engine.map.setCollide(collide);
	engine.map.setSwitches(switches);
	var button = document.getElementById('clearStorage');
	//button.onclick = clearStorage;
}

//submit handling function
function submitHandler(){
	var button = document.getElementById('submit');
	button.onclick = function(){
		var select = document.getElementById('select');
		var textbox = document.getElementById('textbox');
		var name = document.getElementById('messages');
		if(select.value){
			engine.screen.setScreenSize(parseInt(select.value), parseInt(select.value));
			alert("The screen size will be changed to view " + select.value + " tiles.");
		}
		if(textbox.value != '' && name != 'undefined'){
			name.innerHTML = textbox.value;
			player.name = textbox.value;
			alert("Your name (" + textbox.value + ") will now be displayed on your character.")
			textbox.value = '';
		}
		drawMap();
	}
}

function clearStorage(){
	var before = localStorage.getItem('cs2550timestamp');
	localStorage.removeItem('cs2550timestamp');
	var storage = localStorage.getItem('cs2550timestamp');
	alert("Storage Cleared: Contents are now " + storage + ".  Contents were: " + before);
}

window.addEventListener('keydown', engine.keyboard.input, false);
//this is debugging information, and testing scenarios
start();
submitHandler();
