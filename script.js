function getFormvalue(event) {
    //Write your code here
	event.preventDefault();

	let Firstname = document.querySelector("input[name="fname"]").value.trim();
	let Lastname = document.querySelector("input[name="lname"]").value.trim();

	let fullname = Firstname + " " + Lastname;
	
	alert(fullname);

}
