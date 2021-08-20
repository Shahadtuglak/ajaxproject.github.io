//AJAX REQUEST USING jQuery Method 2


//Main Function
function fetchRandomDogImage(){

	$.get('https://dog.ceo/api/breeds/image/random', function(data){ //Get Method

			var imageURL = data.message;	 //Extract only image("message") link from the Whole JSON Response..

			$('#dog-image').attr('src',imageURL);  //Set image URL to the dog-image section

		}).fail(function(){			 // Message Show when Error Occur in API Call..
			console.log("Request Failed");
		})

};



//if button is click what will happen
$(document).ready(function(){

	$('#fetch-btn').click(fetchRandomDogImage);

});