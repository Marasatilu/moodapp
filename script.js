document.addEventListener('DOMContentLoaded', function () {
    var range = document.getElementById("range");
    updateProgress(range.value);

    range.addEventListener("input", function () {
        updateProgress(this.value);
    });
});

function updateProgress(value) {
    var percent = (value / 100) * 5;
    var percentshow = Math.round((value / 100) * 100);
    var circle = document.querySelector(".progress .circle");

    if (percent < 5) {
        circle.style.animationDelay = "-" + percent + "s";
    } else {
        circle.style.animationDelay = "5s";
    }

    document.querySelector(".progress .precent").textContent = percentshow + "%";

    // Change the gradient color based on the value range
    if (percentshow <= 50) {
        circle.style.backgroundImage = "linear-gradient(135deg, #a8e063 10%, #56ab2f 100%)"; // Green
    } else if (percentshow <= 70) {
        circle.style.backgroundImage = "linear-gradient(135deg, #fceabb 10%, #f8b500 100%)"; // Yellow
    } else {
        circle.style.backgroundImage = "linear-gradient(135deg, #ff4e50 10%, #f9d423 100%)"; // Red
    }
}

