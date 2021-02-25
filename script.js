data = {};

data['JOHN DOE'] = {'Name':'John Doe','Occupation':'blacksmith','Adress':'73 Bedford Lane Lawndale, CA 90260'};

data['JANE DOE'] = {'Name':'Jane Doe','Occupation':'none','Adress':'74 Bedford Lane Lawndale, CA 90260'};


function database() {
  var person = prompt("Please enter a name.");
  var person2 = person.toUpperCase();
  if (person2 in data) {
    var myWindow = window.open("", "newWindow", "width=500,height=700");
    for (let [key, value] of Object.entries(data[person2])) {
    //alert(key + ':' + " " + value);
    myWindow.document.body.style.backgroundColor = "black";
    myWindow.document.body.style.fontSize = "20px";
    myWindow.document.body.style.color = "green";
    myWindow.document.write(key + ':' + " " + value);
    myWindow.document.write("\n");
    
  }}
  /*
  if (person2 Not in data) {
    var yn = prompt('would you like to add this name?[y/n]?')
    if yn == 'y' {
      var addp = prompt('add person and info in ')
    }
  }*/
  else {
    alert("Invalid, or not in database");
  }
}






