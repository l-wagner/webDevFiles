// This is a JS comment 

// JS will execute this as soon as it's loaded
// So we tell it to wait until the document is ready
// DOM = Document Object Model  same as document variable 
// Common precaution to take
document.addEventListener("DOMContentLoaded", function() {

	// Writes to browser console
	console.log("Content Loaded!")


	//  LOTS OF COPYING AND PASTING
	//  BECAUSE ONCE YOU KNOW WHAT YOU"RE DOING YOU'LL SEE PATTERNS YOU CAN REUSE
	//  OVER AND OVER AGAIN -> REFACTORING
	var fortune = document.querySelector("#fortune")
	var cat = document.querySelector("#cat")

	//  RENAME THINNGS TO BE MORE SPECIFIC AND CLEAR
	fortune.addEventListener("click", fortuneClickHandler)
	cat.addEventListener("click", catClickHandler)

	function fortuneClickHandler() {
		console.log("Cookie click")

		if (fortune.src.includes("images/fortune1.png") ) {
			console.log("Fortune requested.")
			//  flip image
			fortune.src = "images/fortune2.png"	
			//  spin image while we wait
			$("#fortune").addClass("spinning")

			//  get request to fortune api
			axios.get("https://api.adviceslip.com/advice")
			.then(function(response){
				// stop spinning
				$("#fortune").removeClass("spinning") 
				//  show fortune
				Swal.fire({
					title: "Fortune!",
					text: response.data.slip.advice,
					icon: "success",
					confirmButtonText: "Cool."
				})
				fortune.src = "images/fortune1.png"
			})
			.catch(function(error){
				console.log(error)
			})
		} 
		else {
			fortune.src = "images/fortune1.png"
		}
	}


	function catClickHandler() {
		console.log("cat click")
		

		if (cat.src.includes("images/cat1.png") ) {
			//  flip image
			cat.src = "images/cat2.png"	
			//  spin image while we wait
			$("#cat").addClass("spinning")

			//  get request to fortune api
			axios.get("https://catfact.ninja/fact")
			.then(function(response){
				// stop spinning
				$("#cat").removeClass("spinning") 
				//  show fortune

				// OOPS DIDN"T HANDLE THAT OBJECT CORRECTLY, LETS SEE
				console.log(response)
				Swal.fire({
					title: "Cat Fact!",
					text: response.data.fact,
					icon: "success",
					confirmButtonText: "Cool."
				})

				//  ADD THIS TO RESET IMAGE 
				cat.src = "images/cat1.png"
			})
			.catch(function(error){
				console.log(error)
			})
		} 
		else {
			cat.src = "images/cat1.png"
		}
	}



	// COUNT LETTERS
	//  Variables we will need
	var form = $( "#countLetters" )
	var textToSearchField = $( "#textToSearch" )
	var letterToCountField = $( "#letterToCount" )
	var countResult = $( "#countResult" )

	form.submit(function( event ) {
		// default behavior is to submit this form in the default way
		// but we want to do our own thing
		event.preventDefault();
  		console.log( "Handler for .submit() called." );
  		// SHOW EMPTY LINE IN CONSOLE
  		// console.log(textToSearch.val())
  		// $( "#count-letters" ).
  		var textToSearch = textToSearchField.val()
  		var letterToCount = letterToCountField.val()
		// console.log(textToSearch)
  		if (textToSearch == "" || letterToCount == "" ){
  			console.log("empty")
  			Swal.fire({
					title: "Empty input",
					text: "Please fill out the whole form.",
					icon: "warning",
					confirmButtonText: "Will do."
				})
  		}else {
  			let count = 0;
  			//  Our first loop!
  			for (let i = 0; i <= textToSearch.length; i++){
  				
  				if (textToSearch[i] == letterToCount){
  					console.log(textToSearch[i])	
  					count = count + 1
  				}
  			}
  			countResult.html(count)


  		}


  		
	});


})

















