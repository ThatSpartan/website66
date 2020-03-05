


// let datePast = new Date("3 march 2020 16:00").getTime();
// console.log(datePast);
// let dateNow = Date.now();
// console.log(dateNow);

// let difference = dateNow - datePast;
// let days = difference / (1000 * 60 * 60 * 24);
// console.log(Math.floor(days));
// let hours = difference / (1000 * 60 * 60);
// console.log(Math.floor(hours % 24));

let targetDate = new Date("6 may 2020 11:00").getTime();
let dateNow = Date.now();

let difference = targetDate - dateNow;
let weeks = difference / (1000 * 60 * 60 * 24 * 7);
console.log(Math.floor(weeks));
let days = difference / (1000 * 60 * 60 * 24);
console.log(Math.floor(days % 7));
let hours = difference / (1000 * 60 * 60);
console.log(Math.floor(hours % 24));


let oldDate = new Date("19 february 2020 15:00");

let differenceMax = targetDate - oldDate;
let weeksMax = differenceMax / (1000 * 60 * 60 * 24 * 7);
console.log(Math.floor(weeksMax));
let daysMax = differenceMax / (1000 * 60 * 60 * 24);
console.log(Math.floor(daysMax % 7));
let hoursMax = differenceMax / (1000 * 60 * 60);
console.log(Math.floor(hoursMax % 24));

console.log(Math.round((dateNow - oldDate) / differenceMax * 100));
let percent = Math.round((dateNow - oldDate) / differenceMax * 100);
console.log(`translateX(${percent})`);
// document.getElementById("percent").style.transform = `translateX(-${100 - percent}%)`;




let button1 = document.getElementById("navigation").children[0];
button1.innerHTML = "Percent";
button1.addEventListener("click", function(el) {
    document.getElementById("percent").style.transform = `translateX(-${100 - percent}%)`;
});

let button2 = document.getElementById("navigation").children[1];
button2.innerHTML = "0";
button2.addEventListener("click", function(el) {
    document.getElementById("percent").style.transform = `translateX(${-100}%)`;
});

let button3 = document.getElementById("navigation").children[2];
button3.innerHTML = "100";
button3.addEventListener("click", function(el) {
    document.getElementById("percent").style.transform = `translateX(${0}%)`;
});
