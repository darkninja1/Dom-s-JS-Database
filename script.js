data = {};

data['JOHN DOE'] = {'Name':'John Doe','Occupation':'blacksmith','Adress':'73 Bedford Lane Lawndale,<br> CA 90260'};

data['JANE DOE'] = {'Name':'Jane Doe','Occupation':'none','Adress':'74 Bedford Lane Lawndale,<br> CA 90260'};


function database() {
  var person = prompt("Please enter a name.");
  var person2 = person.toUpperCase();
  if (person2 in data) {
    var myWindow = window.open("", "newWindow", "width=500,height=700");
    for (let [key, value] of Object.entries(data[person2])) {
    myWindow.document.body.style.backgroundColor = "black";
    myWindow.document.body.style.fontSize = "20px";
    //myWindow.document.body.style.color = "blue";
    myWindow.document.body.style.color = "green";
    //ignore the silly nonsense I added its just key + value
    myWindow.document.write(key + ':' + " " + "<div style='background-color:blue;width:auto;background-image:linear-gradient(to right, #00ff9d, #002896);background-size:50%;background-repeat: repeat;-webkit-background-clip: text;-webkit-text-fill-color:transparent;-moz-background-clip: text;-moz-text-fill-color: transparent;'>" + value + "</div>" + "<br><!--<hr style='color:#00ff9d;background-color:#00ff9d;border-color:#00ff9d;'>-->");
    
  }}
  else {
    alert("Invalid, or not in database");
  }
}






