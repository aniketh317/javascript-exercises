const convertToCelsius = function(F) {
  let C = ((F-32)/180)*100;
  C = C.toFixed(1);
  return parseFloat(C);
};

const convertToFahrenheit = function(C) {
  let F = ((C*180)/100)+32;
  F = F.toFixed(1);
  return parseFloat(F);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
