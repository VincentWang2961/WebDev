function buildStudents(studs) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.
	console.log("Updating page with students...");

	// Get the row to append students to
	const studentRow = document.getElementById("students");
	for(let student of students){
		// Create a div for each student in order to add the classname
		const studentCol = document.createElement("div");
		studentCol.className = "col-12 col-md-6 col-lg-4 col-xl-3";

		// Create name elements for each student
		const nameElem = document.createElement("h1");
		const nameFist = student.name.first;
		const nameLast = student.name.last;
		nameElem.innerText = nameFist + " " + nameLast;
		studentCol.appendChild(nameElem);

		// Create major, credits for each student
		const majorElem = document.createElement("h5");
		majorElem.innerText = student.major;
		studentCol.appendChild(majorElem);

		const creditsElem = document.createElement("p");
		creditsElem.innerText = nameFist + " is taking " + student.numCredits + " credits";
		if(student.fromWisconsin){
			creditsElem.innerText += " and is from Wisconsin";
		}
		creditsElem.innerText += ".";
		studentCol.appendChild(creditsElem);

		// Create interests elements for each student
		const interestsElem = document.createElement("p");
		const interestsNum = student.interests.length;
		if(interestsNum > 1){
			interestsElem.innerText = "They have " + interestsNum + " interests including...";
		}else if(interestsNum === 1){
			interestsElem.innerText = "They have 1 interest including...";
		}else{
			interestsElem.innerText = "They have no interests...";
		}
		studentCol.appendChild(interestsElem);

		// Create a list of interests for each student
		const interestsList = document.createElement("ul");
		for(let interestItem of student.interests){
			const interestElem = document.createElement("li");
			interestElem.innerText = interestItem;
			interestsList.appendChild(interestElem);
		}
		studentCol.appendChild(interestsList);

		// Append the student column to the student row
		studentRow.appendChild(studentCol);
	}

	// Add event listeners to the interests list items
	const liElements = document.getElementsByTagName("li");
	for (let i = 0; i < liElements.length; i++) {
	  liElements[i].addEventListener("click", () => {
		console.log("Interests list item clicked!");

		// Clear the search fields
		document.getElementById("search-name").value = "";
		document.getElementById("search-major").value = "";
		document.getElementById("search-interest").value = liElements[i].innerText;
		
		// Handle the search
		handleSearch();
	  });
	}
}

function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	// TODO Implement the search
	console.log("Searching for students...");
	// Get the search values and make it to lowercase
	nameSearch = document.getElementById("search-name").value.toLowerCase();
	majorSearch = document.getElementById("search-major").value.toLowerCase();
	interestSearch = document.getElementById("search-interest").value.toLowerCase();
	console.log(nameSearch, majorSearch, interestSearch);

	// Filter the students
	const filteredStudents = studentsOrig.filter(student => {
		const name = student.name.first.toLowerCase() + " " + student.name.last.toLowerCase();
		const major = student.major.toLowerCase();
		const interests = student.interests.map(interest => interest.toLowerCase());

		// Check if the student matches the search criteria
		if(nameSearch && !name.includes(nameSearch)){
			return false;
		}
		if(majorSearch && !major.includes(majorSearch)){
			return false;
		}
		if(interestSearch && !interests.includes(interestSearch)){
			return false;
		}
		return true;
	});
	students = [...filteredStudents];

	// Update the number of students
	document.getElementById("num-results").innerText = students.length;

	// Clear the current students
	const studentRow = document.getElementById("students");
	studentRow.innerHTML = "";

	// Add the filtered students
	buildStudents();

	console.log(students);
}


document.getElementById("search-btn").addEventListener("click", handleSearch);

let students, studentsOrig;

fetch("https://cs571.org/rest/f24/hw2/students", {
	headers: {
		"X-CS571-ID": "bid_21d52a4a56461602192d0f8732ee253fe2eb44fdc6f78296e497e40a1933ef4a"
	}
})
.then(res => {
    console.log(res.status, res.statusText);
    if(res.status === 200) {
        return res.json();
    } else {
        throw new Error();
    }
})
.then(data => {
	console.log(data);
	if(!students){
		students = [...data];
		studentsOrig = [...data];
	}
	console.log(students);
})
.then(() => {
	// Show the number of students
	document.getElementById("num-results").innerText = students.length;

	buildStudents();

});