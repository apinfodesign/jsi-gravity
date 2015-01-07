//index.js 

var fallingTime = function(height){
	var falltime = Math.sqrt(2 * height/9.8);
	console.log("From height " + height + " meters, the fall time is: " + falltime + " seconds.");
	return falltime;
};
 
 module.exports = fallingTime;