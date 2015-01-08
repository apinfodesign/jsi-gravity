//index3.js   This is the callback challenge item
 
function each( somearray, somefunction ) {

 	 for (i=0; i<somearray.length; i++)
 	 {
	 		console.log(somearray[i]);	 
 
 	    somearray[i]= somefunction(somearray[i]);

			 console.log(somearray[i]);
	 };

	 return somearray;
 };

module.exports = each;

