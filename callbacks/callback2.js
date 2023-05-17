function myCallback() {
  console.log("I am in myCallback");
}

function greet(name, callback2) {
  console.log("I am in greet function " + name);
  callback2();
}

setTimeout(greet, 2000, "Peter", myCallback);
fetch("https://restcountries.com/v3.1/name/germany");
