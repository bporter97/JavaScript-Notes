// var, let, const

var name = "Shaggy Rogers"; // Initializes a variable called name with the value of "Mary Jane"
console.log(name); // prints out the value of the "name" variable
// "var" and "let" all you to reassign variables after they have been declared
name = "Scooby Doo"; // name variable has been given a new value of "scooby doo"
console.log(name):

//variables can NOT start with a number

// CONST: Stands for constant, which means it can change or be reassigned
// When using const, you HAVE to declare a value,
const company = { //in this case, the constant is the class called company
  companyName: "Mystery INC" //however, the attributes inside the class can be re-named
}
console.log(company.companyName);
company.comanyName = "Mystery Incorporated"; //Here we assigned a new value to the companyName Attribute in the company class

const numbers = [1,2,3,4,5] // we can update arrays as well using the .push method, however we can't declare a new array
// variable with the name numbers that has 1-6 in it.
// Same goes for objects
// Values cannot be reassigned as a new primitive value when they are delcared with const 
