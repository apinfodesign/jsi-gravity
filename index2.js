//index2.js   array of people

// Write a function that takes an array of people as an argument and 
// updates each of their ages to be one year older. Make sure you write tests 
// before you write the function--this is how TDD is done!
 
function increaseAgeByOne(people){

 	 for (i=0; i<people.length; i++)

 	 {
	 console.log(people[i]);
 	
 	 people[i].age = people[i].age + 1;

	 console.log(people[i]);
	 };

	 return people;
};

module.exports = increaseAgeByOne;