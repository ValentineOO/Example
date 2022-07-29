const selectMenu = document.querySelectorAll("select");
const selectMenu = document.querySelectorAll("select");

for(let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

 setInterval(() => {
    // getting hour, mins, secs.
    let date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    ampm = "AM";

    if (hour >= 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    // If hour value is 0, set this value to 12
     hour = hour == 0 ? hour = 12 : hour;
     // adding 0 before hr, min, sec if this value is less than 10.
     hour = hour < 10 ? "0" + hour : hour;
     minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`${hour}:${minutes}:${seconds}:${ampm}`);
 }, 1000);
