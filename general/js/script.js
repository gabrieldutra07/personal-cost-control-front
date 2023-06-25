const addCost2 = () => {
    // WARNING: For POST requests, body is set to null by browsers.
    var data = JSON.stringify({
        "description": document.getElementById("description").value,
        "value": document.getElementById("value").value,
        "date": document.getElementById("date").value,
        "category": document.getElementById("category").value,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/cost");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    window.location.href = "list-costs.html"
}

function redirect() {
    window.location.href = "create-cost.html"
}