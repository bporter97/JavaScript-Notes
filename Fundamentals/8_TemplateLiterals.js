const name = "Gill Bates";
const age = 30;
const job = 'Janitor';
const city = 'Austin';
//HTML can be imported from javascript using HTML strings
let html;

// Importing data Wtihout Template strings
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

//HTML string is is assigned to html variable above. We then assign
// the inner HTML code that the webpage will display using the codeblock below
// this is the old way of doing things (es5)

//With Template strings (es6)
//New way of doing things
function hello(){
  return 'hello';
}
// code uses back ticks (tilde key) instead of single or double quotes
// code is then written out like you would write regular HTML
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30 Years Old' : 'Under 30'}</li>
  </ul>
`;
// use ${} to inject javascript variables into HTML
// can also use ${} to put expressions and functions and conditionals respectively


document.body.innerHTML = html;
