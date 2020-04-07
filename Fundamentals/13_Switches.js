// Another way of validating conditions

const rgb = "blue";

switch(rgb){ //switch statements are started off like this
  case 'red': //cases test to see if the variable is equal to what is defined after 'case'
    console.log("Color is red")
    break;
  case 'blue':
    console.log('Color is blue'); // next lines define what the case does if a condition is met
    break;
  default:
    console.log('Color is not red or blue, therefore it is green');
    break; // 'break' breaks out of the 'case' therfore ending it.
}
// switches are better for bigger statements that involve, I would say, more than 5 statements.
