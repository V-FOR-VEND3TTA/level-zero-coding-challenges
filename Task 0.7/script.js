// Formula to convert celsius to fahrenheit: fahrenheit = celsius * 1.8 + 32
function degreesToFahrenheit(temp) {
  const fahrenheit = temp * 1.8 + 32;
  /* Using concatenation
  console.log(
    temp + " degrees celsius is equal to " + fahrenheit + " degrees fahrenheit."
  );*/
  // Using ES6 Syntax
  console.log(
    `${temp} degrees celsius is equal to ${fahrenheit} degree fahrenheit.`
  );
}

degreesToFahrenheit(35);

// Formula to convert fahrenheit to celsius: celsius = temp
function fahrenheitToDegrees(temp) {
  const celsius = (temp - 32) / 1.8;
  console.log(
    `${temp} degrees fahrenheit is equal to ${celsius.toFixed()} degrees celsius.`
  );
}

fahrenheitToDegrees(110);
