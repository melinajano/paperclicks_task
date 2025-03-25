document.addEventListener("DOMContentLoaded", function() {
    const timeSelect = document.getElementById("timeSelect");
    for (let hour = 8; hour <= 17; hour++) {
        let option = document.createElement("option");
        option.value = hour + " am CST";
        option.textContent = (hour <= 11 ? hour : hour - 12) + " " + (hour < 12 ? "am" : "pm") + " CST";
        timeSelect.appendChild(option);
    }
    
    
    const savedTime = localStorage.getItem("selectedTime");
    if (savedTime) {
        timeSelect.value = savedTime;
    }
    
    timeSelect.addEventListener("change", function() {
        localStorage.setItem("selectedTime", timeSelect.value);
    });
});

function nextPage() {
    const timeSelect = document.getElementById("timeSelect").value;
    if (timeSelect) {
        localStorage.setItem("selectedTime", timeSelect);
        window.location.href = "second-page.html"; 
    } else {
        alert("Please select a time before proceeding.");
    }
}