function arithmetic(a, b, op) {
  var str1 = a + op + b;
  return eval(str1);
}
document.getElementById("demo1").innerHTML = arithmetic(8, 2, "+");
document.getElementById("demo2").innerHTML = arithmetic(8, 2, "-");
document.getElementById("demo3").innerHTML = arithmetic(8, 2, "*");
document.getElementById("demo4").innerHTML = arithmetic(8, 2, "/");

//simple Calculation
alert("Do addition of two numbers");
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));
let result = calculator(number1, number2);

function calculator(number1, number2) {
  return number1 + number2;
}

alert("The Ans Is " + result);

//onclick event function
function sayHello() {
  document.write("Hello There");
}
//Arrow Function
function person() {
  this.name = "jigar";
  this.age = 20;
  this.subfunction = function () {
    let innerfunc = () => {
      document.getElementById("demo5").innerHTML = this.name;
      document.getElementById("demo6").innerHTML = this.age;
    };
    innerfunc();
  };
}
const j = new person();
j.subfunction();
