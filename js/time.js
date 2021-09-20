const time = document.getElementById("time");
const span = time.querySelector("span");


function handleTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    span.innerText = `${hours}:${minutes}`;
}

setInterval(handleTime, 1000);

