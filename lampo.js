let decimalPlaces = 2;

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;

    if (isNaN(inputTemp)) {
        alert("Laita oikee lämpötila.");
        return;
    }

    let result;

    if (inputUnit === "celsius") {
        result = (inputTemp * 9/5) + 32;
        document.getElementById("result").innerText = `Fahrenheit: ${result.toFixed(decimalPlaces)}`;
    } else if (inputUnit === "fahrenheit") {
        result = (inputTemp - 32) * 5/9;
        document.getElementById("result").innerText = `Celsius: ${result.toFixed(decimalPlaces)}`;
    }
}

function setDecimalPlaces(places) {
    decimalPlaces = places;
    convertTemperature();
}