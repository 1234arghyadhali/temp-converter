function convert() {
  const value = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unit").value;
  let output;

  if (isNaN(value)) {
    output = "Enter a valid number, genius.";
  } else {
    switch (unit) {
      case "C":
        const f = value * 9/5 + 32;
        const k = value + 273.15;
        output = `🌡️ Fahrenheit: ${f.toFixed(2)} °F<br>Kelvin: ${k.toFixed(2)} K`;
        break;
      case "F":
        const c = (value - 32) * 5/9;
        const k2 = c + 273.15;
        output = `🌡️ Celsius: ${c.toFixed(2)} °C<br>Kelvin: ${k2.toFixed(2)} K`;
        break;
      case "K":
        const c2 = value - 273.15;
        const f2 = c2 * 9/5 + 32;
        output = `🌡️ Celsius: ${c2.toFixed(2)} °C<br>Fahrenheit: ${f2.toFixed(2)} °F`;
        break;
      default:
        output = "Invalid unit selection.";
    }
  }

  document.getElementById("result").innerHTML = output;
}
