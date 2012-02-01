/**
 * This is the entry point for our JavaScript program
 */
function main() {
    //your code goes here
//    alert("hello world!");


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
	
	var s = new Spotter("twitter.search", 
						{q:"Pokemon", period:120},
						{buffer:true, bufferTimeout:750}
						);
						
	s.register(function(tweet) {
		//2. Add profile images (tweet.profile_image_url)
		var profile_image = "<img src=' "+tweet.profile_image_url+" ' />";	
		
		
		$("#tweets").append("<p>" + profile_image + tweet.text+ "</p>");
	});
	
	s.start();
	
	// Jeison value (key: value, period:seconds),
	// 				(Buffer gives one at a time, instead of array)

	// function tweet appended as id
	
	// start s(potter)
	
	
	
	
	
    //3. Make the tweets occur so the most recent are at the top	
    //4. Make the tweets slide down
	//   Slide down (hint)

	
    //5. Alternate the colors or the background of the tweets
	//   Alternate color by storing into seperates
	
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)
	//   Array (hint)


}

main();
