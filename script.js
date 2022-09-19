"using strict";

const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");
const yearEl = document.querySelector("#birth");

// Getting the birthday date
let gotDate = prompt(
  "Hello type your birthday date bellow: \nExemple: '25 Apr'"
);
let birthDay2 = new Date(gotDate);

// Adding 0 if needed
function formateTime(time) {
  return time < 10 ? "0" + time : time;
}

// Setting the month
if (birthDay2.getMonth() === 0) month2 = "Jan";
else if (birthDay2.getMonth() === 1) month2 = "Feb";
else if (birthDay2.getMonth() === 2) month2 = "Mar";
else if (birthDay2.getMonth() === 3) month2 = "Apr";
else if (birthDay2.getMonth() === 4) month2 = "May";
else if (birthDay2.getMonth() === 5) month2 = "Iun";
else if (birthDay2.getMonth() === 6) month2 = "Iul";
else if (birthDay2.getMonth() === 7) month2 = "Aug";
else if (birthDay2.getMonth() === 8) month2 = "Sep";
else if (birthDay2.getMonth() === 9) month2 = "Oct";
else if (birthDay2.getMonth() === 10) month2 = "Nov";
else if (birthDay2.getMonth() === 11) month2 = "Dec";

// Editing the h1 to have user's uncoming years
let currentYear = new Date();
yearEl.textContent =
  "Your " +
  (currentYear.getFullYear() - birthDay2.getFullYear()) +
  "th " +
  "Birthday!🎂";

// Building user's birthDay
let birthDay = birthDay2.getDate() + " " + month2 + " " + "2023";

// Repeating every 1s
setInterval(function () {
  function getTime(time) {
    // Getting the diff of time
    const birthDayDate = new Date(time);
    const currentTime = new Date();
    return (birthDayDate - currentTime) / 1000;
  }

  // Calculating every diff
  const days = Math.trunc(getTime(birthDay) / 3600 / 24);
  const hours = Math.trunc((getTime(birthDay) / 3600) % 24);
  const min = Math.trunc((getTime(birthDay) / 60) % 60);
  const sec = Math.trunc(getTime(birthDay) % 60);

  daysEl.textContent = formateTime(days);
  hoursEl.textContent = formateTime(hours);
  minEl.textContent = formateTime(min);
  secEl.textContent = formateTime(sec);
}, 1000);
