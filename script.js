function login(event) {
	event.preventDefault();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "admin" && password === "password") {
		window.location.href = "home.html";
	} else {
		alert("Invalid login credentials. Please try again.");
	}
}

function calculate() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator");
      break;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}

var form = document.getElementById("calculator-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  calculate();
});

var input = document.getElementById('result');

function insert(value) {
	input.value += value;
}

function calculate() {
	try {
		var result = eval(input.value);
		if (isNaN(result)) {
			input.value = 'Error';
		} else {
			input.value = result;
		}
	} catch (error) {
		input.value = 'Error';
	}
}

function clearInput() {
	input.value = '';
}
