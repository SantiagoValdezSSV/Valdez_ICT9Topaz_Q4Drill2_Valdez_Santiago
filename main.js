function calculateHeatIndex() {
    const tempCelsius = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);


    const heatIndex = tempCelsius + (0.33 * humidity) - 4;

    let status = "";


    if (heatIndex <= 27) {
        status = "Comfortable / Cool";
    } else if (heatIndex >= 28 && heatIndex <= 32) {
        status = "Warm";
    } else if (heatIndex >= 33 && heatIndex <= 37) {
        status = "Hot";
    } else if (heatIndex >= 38 && heatIndex <= 41) {
        status = "Very Hot / Caution";
    } else {
        status = "Extreme Heat / Danger";
    }

    window.alert(
        "Heat Index: " + heatIndex.toFixed(2) + " °C\nStatus: " + status
    );
}