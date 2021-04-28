function degreesToFahrenheit(temp) {
  const fahrenheit = temp * 1.8 + 32;
  
  console.log(
    `${temp} degrees celsius is equal to ${fahrenheit} degree fahrenheit.`
  );
}

degreesToFahrenheit(35);

function fahrenheitToDegrees(temp) {
  const celsius = (temp - 32) / 1.8;
  console.log(
    `${temp} degrees fahrenheit is equal to ${celsius.toFixed()} degrees celsius.`
  );
}

fahrenheitToDegrees(110);
