console.log('Hello World!');
alert("Welcome to yatharth's glassmorphism calculator");


let output = document.getElementById("output");

function display(num) {
  output.value += num;
}

function calculate() {
  try {
    output.value = eval(output.value);
  }
  catch (error) {
    alert("Enter a valid number")
  }
}

function Clear() {
  output.value = "";
}

function del() {
  output.value = output.value.slice(0, -1);
}
