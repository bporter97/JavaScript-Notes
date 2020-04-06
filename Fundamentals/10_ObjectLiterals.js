// This defines an object literals

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 22,
  email: 'steve@aol.com',
  hobbies: ['music', 'sport'],
  address: {
    city:'Austin',
    state: 'TX'
  },
  getBirthYear: function(){
    return 2020 - this.age; // you can calculate values in fucntions
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();



console.log(val);

const people = [ // array of an object
  {name: 'John', age: 30},
  {name: 'Mike', age: 23}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
