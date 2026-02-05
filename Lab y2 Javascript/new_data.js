let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; //January is 0
let year = today.getFullYear();

document.write("Today is: " + day + "/" + month + "/" + year);