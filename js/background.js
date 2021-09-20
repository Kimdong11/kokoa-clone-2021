const div = document.querySelector("#no-mobile");
const image = div.querySelector("img");

function handleTime() {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    handleBgImage(hours);    
}

function handleBgImage(hours) {
    if(hours > 18) {
        image.src = "jeju-night.jpeg";
    }
}

setInterval(handleTime, 1000);

