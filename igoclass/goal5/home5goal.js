// This is a JS comment 

// DOM = Document Object Model, the computational
// representation of our site
// event listener to only execute JS when document/site/content
// is available
document.addEventListener("DOMContentLoaded", function() {
// Writes to browser console
	console.log("Are you there?")

	//  document is a reserved JS variable that refers to the full html document
	// dot syntax allows us to call methods applicable to the variable
	var fortune = document.getElementById("fortune")

	// addEventListener needs two parameters, the event and the function to execute when the event occurs
	fortune.addEventListener("click", clickHandler)

	function clickHandler() {
		
		// console.log("Cookie click")
		//  FIRST WITHOUT IF
		//  THEN WITH
		//  THEN SHOW WHAT FILE PATH GETS COMPUTED INTO
		//  THEN SIMPLIFY
		if (fortune.src.includes("images/fortune2.png")){
			fortune.src = "images/fortune1.png"	
		}else {
			fortune.src = "images/fortune2.png"		
			console.log("Fortune requested!")
			//  ULTIMATELY: CLICK, LOADER, LOADED, PULL FORTUNE BACK IN

			$("#fortune").addClass( "spinning" );

		

		// THERE ARE MANY WAYS TO COMMUNICATE WITH APIs USING JS
		//  MY FAVORITE LIBRARY FOR THIS IS AXIOS
		
			axios.get('https://api.adviceslip.com/advice')
			.then(function (response) {
				// handle success
				console.log(response);

				// alert(response.data.slip.advice)

				//  the swal.fire method takes a JS objects as its parameter
				Swal.fire({
				  title: 'Fortune!',
				  text: response.data.slip.advice,
				  icon: 'info',
				  confirmButtonText: 'Cool'
				})
				$("#fortune").removeClass( "spinning" );
			})
			// ERROR HANDLING IS IMPORTANT PART OF USER EXPERIENCE DESIGN
			// SHOULD HAVE TWO PARTS, USER FEEDBACK AND DEVELOPER INFORMATION
			.catch(function (error) {
				// handle error
				console.log(error);
			})



		}
	}
})

