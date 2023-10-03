const convertToCelsius = function(fahrenheitValue) {
   tempVal = (5/9)*(fahrenheitValue-32);
   celciusValue = tempVal.toFixed(1);  
   return celciusValue = Number(celciusValue);
  
};

const convertToFahrenheit = function(celciusValue) {
  tempVal = (9/5)*celciusValue+32;
  fahrenheitValue = tempVal.toFixed(1);
  return fahrenheitValue = Number(fahrenheitValue);
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
