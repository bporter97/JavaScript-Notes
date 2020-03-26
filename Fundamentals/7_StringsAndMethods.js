const firstName = 'Ra Ra';
const lastName = 'Rasputin';

let val;

val = firstName + lastName; // adds values of both constants together

// Concatentenation
val = firstName + ' ' + lastName; // adds a space in between both constants

// Appending
// you can Append strings with the += modifier
val = "Russia's ";
val += "Favorite love machine"; // instead of reassigning val, this adds the string "Favorite love machine" to values

// Escaping
val = 'Russia\'s favorite love machine'; // add in a backslash to negate the effect of another quote or character used outside of strings

// Length
val = firstName.length; //gives us the number of characters in a string (does not need parenthesis since it is a property)

// concat()
val = firstName.concat(' ', lastName); // another way to concatinate strings

// Changing cases
val = firstName.toUpperCase(); // converts characters in string to upper case
val = firstName.toLowerCase(); // converts characters in string to lower case

// strings can be read like arrays
val = firstName[1]; // arrays start at 0, so this assigns a in 'Ra Ra' to val since 'a' is at position 1. If we did 0, we would get an R

// indexOf()
val = lastName.indexOf('s'); // this method finds the index location of the character that was put into the parenthesis
val = firstName.lastIndexOf('a'); // finds the index location of a in firstName, however it starts the search at the end of the string.

// charAt()
val = lastName.charAt('3'); // finds the character at the index position given in the parenthesis

// last characters
val = lastName.charAt(lastName.length - 1); // gives you the last character of a string

//substring
val = lastName.substring(0, 4); // makes a substring from the characters in between indexes 0 and 4

// slice()
val = lastName.slice(0, 4); // does the same thing as substring, however you can make this start at the back with a negative number

// split()
//splits string into an array based on a seperator
val = firstName.split(' '); // what you put in the parenthesis define where the method splits the strings at. In other words if i put
// 'a' in the parenthesi, it will split the string twice at 'a', only giving the console an output of "R" "R"
// instead, it is split at the space, so the console output is "Ra" "Ra"

//replace()
val = lastName.replace("Rasputin", "Putin") // replaces first attribute that is in string with second attribute

// includes()

val = firstName.includes("Kalash"); // tests the string to see if it includes the value of 'Kalash' and will print out a bool values
// based on the result of the test, in this case, "false" will be the value printed out.


console.log(val);
