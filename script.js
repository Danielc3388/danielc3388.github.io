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
