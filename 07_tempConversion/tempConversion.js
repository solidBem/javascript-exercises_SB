const convertToCelsius = function(temperature) {
  const newTemp = (temperature - 32) * 5 / 9;
  const rounded = Math.round(newTemp * 10) / 10;
  return rounded
};

const convertToFahrenheit = function(temperature) {
  const newTemp = temperature * 9 / 5 + 32;
  const rounded = Math.round(newTemp * 10) / 10;
  return rounded
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
