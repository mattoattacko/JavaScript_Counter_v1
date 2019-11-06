var birds = 3;

function dogHouse() {
  var dogs = 8;
  function showDogs() {
    console.log(dogs);
  }
  return showDogs;
}

var getDogs = dogHouse();

getDogs(); // 8

// The dogs variable is declared in the outer function, and the inner function has access to it. If the inner function is returned and assigned to a variable, the private scope of the outer function remains. 

// We can call the returned inner function and get access to or even modify any private variables. 