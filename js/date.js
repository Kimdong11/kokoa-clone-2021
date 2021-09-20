const day = document.getElementById("day");
const month = document.getElementById("month");
const fullDates = document.getElementById("date");

const monthNames = ["January", "Febulary", "March", "April", "June", "July", "August", "September", "October", 
                    "November", "December"];
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function handleDate() {
    const date = new Date();
    
    const year = date.getFullYear();
    const months = date.getMonth();
    const days = date.getDate();
    const day_name = date.getDay();
    const monthName = monthNames[months - 1];
    const dayName = dayNames[day_name -1];
    const fullDate = `${months}.${days}.${year}`;

    month.innerText = `${monthName}, `;
    day.innerText = `${dayName}, `
    fullDates.innerText = fullDate;
    
}

handleDate();