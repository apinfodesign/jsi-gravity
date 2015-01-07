//index.js 

var fallingTime = function(height){
	var falltime = Math.sqrt(2 * height/9.8);
	console.log("From height " + height + " meters, the fall time is: " + falltime + " seconds.");
	return falltime;
};

var distanceFallen = function(time){
	var distance = (9.8 / 2)* Math.pow(time, 2);
  	console.log("In time " + time + " seconds, the distance fallen is " + distance + " meters.");
  	return distance;
};
 
 module.exports = {
 	"fallingTime": fallingTime,
 	"distanceFallen": distanceFallen
 };