let mydate = new Date();
// console.log(mydate.toString()); // give the date and time in all details
// console.log(mydate.toDateString()); // give weeks month date year
// console.log(mydate.toLocaleDateString()); // like 8/2/2025
// console.log(mydate.toISOString()); // give the date in ISO format
// console.log(typeof(mydate)); // object


let mycreateddate = new Date(2025, 2, 8, 10, 30, 0, 0);   // give as many arguments as you want to specifyt the date and time
// console.log(mycreateddate.toLocaleString()); // give the date and time in all details   

let mytimestamp = Date.now();
// console.log(mytimestamp); // give the timestamp in milliseconds 
// console.log(mycreateddate.getTime()); // give the timestamp in milliseconds so that they are easily compared  /1000 to convert it into seconds

let data = new Date();
// console.log(data.getDay()); // all this type of method are aviailable to extract the data as you need

data.toLocaleString('default', { // can custmize the date and time into the format you want to see
    weekday: 'long',
    month: 'long',
});