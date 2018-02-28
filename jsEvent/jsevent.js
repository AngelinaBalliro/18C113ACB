/*
   testEvents sets a variety of listeners to elements so we can see how they work
*/
function testEvents() {
	// let's grab references to some of the elements in our page
	let greeting = document.getElementById("greeting");
	let submit = document.getElementById("submit");
	let status = document.getElementById("status");
	let divPage = document.getElementById("page");

	// let's add an event listener and use an anonymous function
	greeting.addEventListener("mouseover", function() {
		// we can use JavaScript to change CSS
		greeting.style.background = "black";
		greeting.style.color = "white";
		updateText(greeting);
	});

	// let's add an event listener and call a function
	submit.addEventListener("click", myClickFunction);

	// let's look at bubbling vs capturing propagation
	// default is false - which is bubbling
	// change to true to see capturing
	divPage.addEventListener("click", function() {
		updateText(divPage);
	}, false);
}

/*
   myClickFunction can, like any function, be called by an event listener
   Run this function from the console as well. Does it have the same effect?
*/
function myClickFunction() {
	let greeting = document.getElementById("greeting");
	greeting.style.background = "white";
	greeting.style.color = "black";
	updateText(greeting);
}

/*
   removeClick removes our event listener from the submit button
   Run this manually from the console to test it out
*/
function removeClick() {
	document.getElementById("status").removeEventListener("click", myClickFunction);
}

/*
   updateText will help us see how events are being fired
*/
function updateText(elem) {
	document.getElementById("status").innerHTML += "<br/>" + elem.id + " is processing an event!";
}

/*
   to get things moving, we need to run our testEvents function
*/
testEvents();
