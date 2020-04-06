let val;

const today = new Date(); //instantiates date object, if nothing is passed through, by default it will be todays Date
let birthday = new Date('12-29-1845 11:25:00')
birthday = new Date('07-04-1776 11:25:00')


// Gets multiple attributes of date and time.
val = today.getMonth(); // like arrays, months for dates start at 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2); //Allows you to set date and time attributes of
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
