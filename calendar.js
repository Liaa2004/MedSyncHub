const calendar = document.getElementById("calendar");
const addEvent = document.getElementById("addEvent");
const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");

// Generate calendar
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const today = new Date();
const date = new Date(today.getFullYear(), today.getMonth(), 1);
let day = 1;
while (day <= new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()) {
  const dayEl = document.createElement("div");
  dayEl.textContent = day;
  if (new Date(today.getFullYear(), today.getMonth(), day).toDateString() === new Date().toDateString()) {
    dayEl.style.backgroundColor = "lightgreen";
  }
  calendar.appendChild(dayEl);
  day++;
}

// Add events
addEvent.addEventListener("click", function() {
  if (eventName.value && eventDate.value) {
    const eventDateObj = new Date(eventDate.value);
    const dayEl = calendar.children[eventDateObj.getDay() + (eventDateObj.getDate() - 1)];
    const eventEl = document.createElement("div");
    eventEl.textContent = eventName.value;
    eventEl.style.backgroundColor = "lightblue";
    eventEl.style.marginTop = "10px";
    dayEl.appendChild(eventEl);
  }
});