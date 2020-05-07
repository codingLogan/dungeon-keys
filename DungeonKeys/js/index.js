function makeRequest(){
	var data = "";
	var name = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	
	data += "userName=" + name;
	data += "&password=" + password;
	
	//cross browser ajax (from book)
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else if (window.ActiveXObject){
		var ajax = new ActiveXObject("MSXML2.XMLHTTP.3.0");
	}
	
	//begin making request, and set headers
	ajax.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", false);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send(data);//data is a string of name=value&password=value
	
	var output = document.getElementById('badlogin');
	//return json has result, userName, and timestamp
	if (ajax.status == 200){
		var ajaxResponse = JSON.parse(ajax.responseText);
		
		//report unsuccessful login attempt
		if(ajaxResponse && ajaxResponse.result == 'valid'){
			output.innerHTML = "Successful";
			if(localStorage){
				localStorage.setItem('cs2550timestamp', ajaxResponse.userName + " " + ajaxResponse.timestamp);
				
				//take user to the game page
				window.location = "grid.html";
			}
			else {
				alert("local storage does not exists");
			}
		}
		else if (ajaxResponse && ajaxResponse.result == 'invalid'){
			output.innerHTML = "Bad log-in attempt";
		}
	}
}

function init(){
	callJSON();
}

//it reads in a json file and ouputs its contents onto index.html
function callJSON(){
	//read in json object from local file and display it on index page
	if(window.XMLHttpRequest){
		var ajax = new XMLHttpRequest();
	}else if (window.ActiveXObject){
		var ajax = new ActiveXObject("MSXML2.XMLHTTP.3.0");
	}
	
	ajax.open("POST", "json/test.json", false);
	ajax.send(null);
	var js_object = JSON.parse(ajax.responseText);
	console.log(js_object);
	
	var text = "<table>";
	//load in the json file, and go through each value
	for(var y=0; y < js_object["map"].length; y++){
		text += "<tr>";
		for(var x=0; x < js_object["map"][y].length; x++){
			text += "<td>" + js_object["map"][y][x] + "</td>";
		}
		text += "</tr>";
	}
	
	div = document.getElementById("jsondiv");
	div.innerHTML = text;
}

window.onload = init;