//model.js
//author: Logan Rasmussen
//date: feb 17, 2014

//constructor function for keys
//assumes keys array exists
function createKey(color, xpos, ypos){
	var key = {
		keyColor : color,
		collected : false,
		keyX : xpos,
		keyY : ypos
	}
	if(typeof keys != 'undefined'){
		keys[color] = key;
		return key;
	}
	else{
		return false;
	}
}

//constructor for doors
//assumes doors array exists
function createDoor(color, xpos, ypos){
	var door = {
		doorColor : color,
		opened : false,
		doorX : xpos,
		doorY : ypos
	}
	if(typeof keys != 'undefined'){
		doors[color] = door;
		return door;
	}
	else{
		return false;
	}
	
}

//constructor for switches
//assumes switches array exists
function createSwitch(color){
	var newSwitch = {
		switchColor : color,
		pressed : false
	}
	if(typeof keys != 'undefined'){
		switches[color] = newSwitch;
		return newSwitch;
	}
	else{
		return false;
	}
}

//constructor for player object
function createPlayer(xpos, ypos){
	var player = {
		playerY : ypos,
		playerX : xpos
	}
	return player;
}

//used for a level design
//eventually this will be a 3d array holding all the different
//level design layouts
//this is what type of tile it is, grass/dirt/water
var tiles = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,2,2,2,2,2,1,1,1,1,0],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,2,2,2,2,2,2,2,2,2,2],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,1,1,1,1,1,1,1,1,1,1,1,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0]
];

//used to set the limits of the table
var bounds = {
	width : tiles[0].length,
	height : tiles.length
}

//used to determine if key's have been collected
//in essence it's the inventory
var keys = new Array();

//used to change game states of doors,
//if false, door is shut,
//if true, door is open
var doors = new Array();

//switch objects
//false means switch is inactive (not pressed)
//true means switch is active (pressed)
var switches = new Array();

//------initialize values in the model for level----------- 
//player object
var player = createPlayer(2, 12);
//keys
createKey('green', 3, 3);
createDoor('green', 12, 7);
createSwitch('green');

//------end initialization --------------------------------
//logging for the console
console.log('boundaries, width and height');
console.log(bounds);
console.log('player object');
console.log(player);
console.log('tile layout');
console.log(tiles);
console.log('keys');
console.log(keys);
console.log('switches');
console.log(switches);
console.log('doors');
console.log(doors);