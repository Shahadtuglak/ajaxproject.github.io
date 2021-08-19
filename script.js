//Function with the Whole logic inside..
function fetchRandomDogImage(){

 //Create HTTP Request
 var xhrRequest = new XMLHttpRequest();

 //When the Page is totally Load this Fumction will Run
 xhrRequest.onload = function(){

 	//Console the JSON Response ( as a String )
 	console.log(xhrRequest.response);

 	//Convert the String Response into JSON  
 	var responseJSON = JSON.parse(xhrRequest.response);


 	//Extract only image("message") link from the Whole JSON Response..
 	var imageURL = responseJSON.message;

 	//Set the image link into the DIV
 	$('#dog-image').attr('src',imageURL);

 }


 //Open / Initialized the Request
 xhrRequest.open('get','https://dog.ceo/api/breeds/image/random', true);

 //Make a Request to the Server
 xhrRequest.send();

}
 //Click on the Fetch Button this function will Run
$(document).ready(function(){

	$('#fetch-btn').click(fetchRandomDogImage);

});