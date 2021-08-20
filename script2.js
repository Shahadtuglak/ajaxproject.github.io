//AJAX REQUEST USING jQuery Method 1


// Method 1
function fetchRandomDogImage(){

	$.ajax({
		url:'https://dog.ceo/api/breeds/image/random',  // URL
		method: "GET",									// Method
		success : function(data){						// When Request of Success this Function will Run
			var imageURL = data.message;				//Extract only image("message") link from the Whole JSON Response..
			$('#dog-image').attr('src',imageURL);		// Set imageURL to the Dog Image
		}

	}).fail(function(){									 // Message Show when Error Occur in API Call..

		console.log("Request is Failed");
	})



};


//CLick on fetch Button 
$(document).ready(function(){

	$('#fetch-btn').click(fetchRandomDogImage);
});
